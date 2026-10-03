import { useEffect, useState } from "react";
import { Reveal, Sub } from "../components/ui";
import { ANNEXES } from "../content";

/** Le mot de passe des annexes n'est pas dans le code : le Worker le fournit (secret ANNEXES_PASSWORD) aux personnes déjà connectées. */
function useAnnexPassword() {
  const [pw, setPw] = useState<string | null>(null);
  useEffect(() => {
    fetch("/__annexes-password", { credentials: "same-origin" })
      .then((r) => (r.ok && (r.headers.get("Content-Type") || "").includes("json") ? r.json() : null))
      .then((d) => setPw(d && typeof d.password === "string" && d.password ? d.password : null))
      .catch(() => setPw(null));
  }, []);
  return pw;
}

export default function Annexes() {
  const pw = useAnnexPassword();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!pw) return;
    try {
      await navigator.clipboard.writeText(pw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* copie refusée : le mot de passe reste lisible à l'écran */
    }
  };
  return (
    <div className="chapter">
      <header id="annexes" data-sec="annexes" data-title="3 Annexes" className="chap-head big">
        <Reveal>
          <div className="chap-num"><span>3</span><i>Section</i></div>
          <h2>Annexes</h2>
        </Reveal>
      </header>

      <Reveal className="annex-pass">
        <span>Chaque annexe est accessible en ligne dans sa version complète. Pour les ouvrir, utilisez le mot de passe suivant :</span>
        {pw ? (
          <>
            <code>{pw}</code>
            <button className="btn" onClick={copy}>{copied ? "Copié" : "Copier"}</button>
          </>
        ) : (
          <strong>celui qui vous a été transmis avec le cahier.</strong>
        )}
      </Reveal>

      {ANNEXES.map((a) => (
        <Sub key={a.id} id={a.id} num={a.letter} title={a.title}>
          <Reveal className="annex-card">
            <span className="annex-letter" aria-hidden>{a.letter}</span>
            <div>
              <p>{a.text}</p>
              <div className="annex-meta">
                <a className="btn primary" href={a.url} target="_blank" rel="noopener noreferrer">Consulter l'annexe ↗</a>
                <small>{a.pages} pages · s'ouvre dans un nouvel onglet</small>
              </div>
            </div>
          </Reveal>
        </Sub>
      ))}
    </div>
  );
}
