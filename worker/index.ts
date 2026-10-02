/**
 * Worker Cloudflare : protection par mot de passe partagé devant les fichiers statiques (dist/).
 *
 * Variable requise : CAHIER_PASSWORD (type « Secret »).
 * Sans elle, le site refuse tout accès (échec fermé).
 * Changer le mot de passe invalide automatiquement toutes les sessions ouvertes.
 */

interface Env {
  CAHIER_PASSWORD?: string;
  ASSETS: Fetcher;
}

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; frame-src https://www.youtube-nocookie.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  "X-Robots-Tag": "noindex, nofollow",
};

function withSecurity(res: Response, extra: Record<string, string> = {}): Response {
  const out = new Response(res.body, res);
  for (const [k, v] of Object.entries({ ...SECURITY_HEADERS, ...extra })) out.headers.set(k, v);
  return out;
}

const COOKIE = "cahier_auth";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 jours

const enc = new TextEncoder();

async function token(password: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode("silvertech-cahier-v1"));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a: string, b: string): boolean {
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

function readCookie(req: Request, name: string): string | null {
  const m = (req.headers.get("Cookie") || "").match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? m[1] : null;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function loginPage(next: string, error: boolean, status = 401): Response {
  const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Accès au cahier · SilverTech</title>
<style>
:root{--navy:#262262;--coral:#F26651;--cream:#F7F1EC;--ink:#3A3A55}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--cream);font-family:system-ui,-apple-system,Segoe UI,Arial,sans-serif;color:var(--ink);padding:20px}
main{width:min(420px,100%);background:#fff;border-radius:20px;padding:36px 32px;box-shadow:0 20px 60px -20px rgba(38,34,98,.35)}
.mark{width:52px;height:52px;border-radius:14px;background:var(--navy);display:grid;place-items:center;margin-bottom:20px}
h1{margin:0 0 6px;font-size:24px;color:var(--navy);line-height:1.2}
p{margin:0 0 20px;line-height:1.5}
label{display:block;font-weight:600;font-size:14px;margin-bottom:6px;color:var(--navy)}
input[type=password]{width:100%;font:inherit;font-size:17px;padding:12px 14px;border:2px solid #DEDEE8;border-radius:12px;outline:0}
input[type=password]:focus{border-color:var(--navy)}
button{margin-top:16px;width:100%;font:inherit;font-weight:600;font-size:16px;padding:13px;border:0;border-radius:999px;background:var(--navy);color:#fff;cursor:pointer}
button:hover{background:var(--coral)}
.err{background:#ffe3df;color:#8f2d20;border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:14px}
small{display:block;margin-top:18px;color:#6E6E8A;font-size:12.5px}
</style></head><body>
<main>
<div class="mark" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 64 64"><path d="M32 6l22 12v10l-11 6 11 6v10L32 58 10 46V36l11-6-11-6V18z" fill="#fff"/></svg></div>
<h1>Cahier des participant·e·s</h1>
<p>Document confidentiel. Entrez le mot de passe reçu avec votre invitation.</p>
${error ? '<div class="err" role="alert">Mot de passe incorrect. Veuillez réessayer.</div>' : ""}
<form method="post" action="/__login">
<input type="hidden" name="next" value="${esc(next)}">
<label for="p">Mot de passe</label>
<input id="p" name="password" type="password" autocomplete="current-password" required autofocus>
<button type="submit">Accéder au cahier</button>
</form>
<small>Confidentiel · pour discussion seulement</small>
</main></body></html>`;
  return withSecurity(new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } }));
}

const safeNext = (n: string | null) => (n && n.startsWith("/") && !n.startsWith("//") && !n.startsWith("/__login") ? n : "/");

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
  const password = env.CAHIER_PASSWORD;
  if (!password) {
    return withSecurity(new Response("Accès non configuré : la variable CAHIER_PASSWORD est manquante.", { status: 503, headers: { "Cache-Control": "no-store" } }));
  }

  const url = new URL(request.url);
  const expected = await token(password);

  if (url.pathname === "/__login" && request.method === "POST") {
    const form = await request.formData();
    const given = String(form.get("password") ?? "");
    const target = safeNext(String(form.get("next") ?? "/"));
    if (safeEqual(await token(given), expected)) {
      return withSecurity(new Response(null, {
        status: 303,
        headers: {
          Location: target,
          "Set-Cookie": `${COOKIE}=${expected}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          "Cache-Control": "no-store",
        },
      }));
    }
    await new Promise((r) => setTimeout(r, 800)); // ralentit les essais en rafale
    return loginPage(target, true);
  }

  const cookie = readCookie(request, COOKIE);
  if (cookie && safeEqual(cookie, expected)) {
    return withSecurity(await env.ASSETS.fetch(request), { "Cache-Control": "private, no-cache" });
  }

  return loginPage(safeNext(url.pathname + url.search), false);
  },
} satisfies ExportedHandler<Env>;
