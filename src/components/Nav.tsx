import { useEffect, useMemo, useRef, useState } from "react";
import { TOC } from "../content";
import { useNotes } from "../notes";
import { img } from "./ui";

export function useScrollSpy() {
  const [active, setActive] = useState("cover");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
      let cur = "cover";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.3) cur = el.dataset.sec!;
        else break;
      }
      setActive(cur);
      const h = document.documentElement;
      setProgress(Math.min(1, window.scrollY / Math.max(1, h.scrollHeight - h.clientHeight)));
    };
    const on = () => !raf && (raf = requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return { active, progress };
}

export function goTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function Nav({ active, progress }: { active: string; progress: number }) {
  const { openPanel, state } = useNotes();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const parent = useMemo(() => TOC.find((g) => g.id === active || g.children?.some((c) => c.id === active))?.id, [active]);
  const count = state.notes.length + state.questions.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setMenu(false);
    setSearch(false);
    setTimeout(() => goTo(id), 30);
  };

  return (
    <>
      <div className="progress" aria-hidden><i style={{ transform: `scaleX(${progress})` }} /></div>

      <header className="topbar">
        <button className="icon-btn" onClick={() => setMenu(true)} aria-label="Ouvrir la table des matières">☰</button>
        <img src={img("logo-silvertech")} alt="SilverTech" height={26} />
        <div className="topbar-actions">
          <button className="icon-btn" onClick={() => setSearch(true)} aria-label="Rechercher">⌕</button>
          <button className="icon-btn badge" onClick={() => openPanel()} aria-label="Mon carnet">✎{count > 0 && <b>{count}</b>}</button>
        </div>
      </header>

      <div className={`side-scrim ${menu ? "open" : ""}`} onClick={() => setMenu(false)} />
      <nav className={`side ${menu ? "open" : ""}`} aria-label="Table des matières">
        <button className="side-brand" onClick={() => go("cover")}>
          <img src={img("logo-silvertech")} alt="Centre d'expertise SilverTech" />
          <span>Cahier des participant·e·s<br /><small>5 octobre 2026</small></span>
        </button>
        <button className="search-trigger" onClick={() => setSearch(true)}>
          <span>Rechercher</span><kbd>Ctrl K</kbd>
        </button>
        <ol className="toc">
          {TOC.map((g) => (
            <li key={g.id} className={parent === g.id ? "current" : ""}>
              <a href={`#${g.id}`} className={active === g.id ? "on" : ""} onClick={(e) => { e.preventDefault(); go(g.id); }}>
                {g.num && <span className="num">{g.num}</span>}{g.title}
              </a>
              <ol>
                {g.children?.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className={active === c.id ? "on" : ""} onClick={(e) => { e.preventDefault(); go(c.id); }}>
                      <span className="num">{c.num}</span>{c.title}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <button className="notes-open" onClick={() => openPanel()}>
          <span>✎ Mon carnet</span>{count > 0 && <b>{count}</b>}
        </button>
      </nav>

      {search && <Search onClose={() => setSearch(false)} onPick={go} />}
    </>
  );
}

function Search({ onClose, onPick }: { onClose: () => void; onPick: (id: string) => void }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const index = useMemo(
    () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-sec]")).map((el) => ({
        id: el.dataset.sec!,
        title: el.dataset.title || el.id,
        text: (el.textContent || "").replace(/\s+/g, " "),
      })),
    [],
  );
  const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const results = useMemo(() => {
    const t = norm(q.trim());
    if (t.length < 2) return [];
    return index
      .map((r) => {
        const nt = norm(r.text);
        const at = nt.indexOf(t);
        const inTitle = norm(r.title).includes(t);
        if (at < 0 && !inTitle) return null;
        const i = Math.max(0, at);
        const snippet = (i > 40 ? "…" : "") + r.text.slice(Math.max(0, i - 40), i + 110) + "…";
        return { ...r, snippet, score: inTitle ? 0 : 1 };
      })
      .filter(Boolean)
      .sort((a, b) => a!.score - b!.score)
      .slice(0, 12) as { id: string; title: string; snippet: string }[];
  }, [q, index]);

  useEffect(() => {
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="search-wrap" onClick={onClose}>
      <div className="search" role="dialog" aria-label="Recherche" onClick={(e) => e.stopPropagation()}>
        <input
          ref={input}
          value={q}
          placeholder="Rechercher dans le cahier (ex. Paratus, consentement, cotisation)"
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(results.length - 1, s + 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
            if (e.key === "Enter" && results[sel]) onPick(results[sel].id);
          }}
        />
        <ul>
          {q.trim().length >= 2 && results.length === 0 && <li className="empty">Aucun résultat</li>}
          {results.map((r, i) => (
            <li key={r.id} className={i === sel ? "sel" : ""}>
              <button onClick={() => onPick(r.id)} onMouseEnter={() => setSel(i)}>
                <strong>{r.title}</strong>
                <span>{r.snippet}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
