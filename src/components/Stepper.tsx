import { useEffect, useRef, useState } from "react";

/** Parcours en étapes cliquables, avec défilement automatique doux (désactivé au survol et si mouvement réduit). */
export default function Stepper({ items, loopFrom, label }: { items: string[][]; loopFrom?: number; label: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || paused || !visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((x) => (x + 1) % items.length), 4800);
    return () => clearTimeout(t);
  }, [i, auto, paused, visible, items.length]);

  const inLoop = (k: number) => loopFrom !== undefined && k >= loopFrom;
  return (
    <div ref={root} className="stepper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <ol className="steps" aria-label={label}>
        {items.map(([t], k) => (
          <li key={t} className={`${k === i ? "on" : ""} ${k < i ? "past" : ""} ${inLoop(k) ? "loop" : ""}`}>
            <button onClick={() => { setI(k); setAuto(false); }} aria-current={k === i ? "step" : undefined}>
              <span className="dot">{k + 1}</span>
              <span className="lbl">{t}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="step-card" key={i} aria-live="polite">
        <span className="tag">Étape {i + 1} sur {items.length}</span>
        <h4>{items[i][0]}</h4>
        <p>{items[i][1]}</p>
        {inLoop(i) && <p className="loop-note">Cette étape fait partie de la boucle continue (étapes {(loopFrom ?? 0) + 1} à {items.length}).</p>}
        <div className="step-ctl">
          <button className="btn" onClick={() => { setI((i + items.length - 1) % items.length); setAuto(false); }}>← Précédente</button>
          <button className="btn" onClick={() => { setI((i + 1) % items.length); setAuto(false); }}>Suivante →</button>
        </div>
      </div>
    </div>
  );
}
