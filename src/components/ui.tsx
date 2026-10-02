import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useNotes } from "../notes";

export const img = (name: string) => `/img/${name}.webp`;

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", style }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "section" | "p"; style?: CSSProperties }) {
  const [ref, seen] = useInView<HTMLElement>(0.12);
  const Comp = Tag as "div";
  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Comp>
  );
}

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Counter({ to, decimals = 0, suffix = "", prefix = "", duration = 1400 }: { to: number; decimals?: number; suffix?: string; prefix?: string; duration?: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduced()) {
      setV(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  const txt = v.toLocaleString("fr-CA", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className="counter">
      {prefix}
      {txt}
      {suffix}
    </span>
  );
}

/** En-tête de sous-section : ancre, numéro, titre et bouton de note. */
export function Sub({ id, num, title, children, lead }: { id: string; num: string; title: string; children: ReactNode; lead?: ReactNode }) {
  const { openPanel } = useNotes();
  return (
    <section id={id} data-sec={id} data-title={`${num} ${title}`.trim()} className="sub">
      <Reveal>
        <header className="sub-head">
          <span className="sub-num">{num}</span>
          <h3>{title}</h3>
          <button className="note-btn" onClick={() => openPanel(`${num} ${title}`.trim())} aria-label={`Ajouter une note sur ${title}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" /></svg>
            <span>Note</span>
          </button>
        </header>
        {lead && <p className="lead">{lead}</p>}
      </Reveal>
      {children}
    </section>
  );
}

/** Question ou décision, avec mise en carnet. */
export function Ask({ id, section, kind = "question", title, children, text }: { id: string; section: string; kind?: "question" | "decision" | "reflexion"; title: string; children: ReactNode; text: string }) {
  const { toggleQuestion, isSaved } = useNotes();
  const saved = isSaved(id);
  return (
    <Reveal className={`ask ask-${kind}`}>
      <div className="ask-icon" aria-hidden>{kind === "decision" ? "✓" : "?"}</div>
      <div className="ask-body">
        <div className="ask-title">{title}</div>
        <div className="ask-text">{children}</div>
      </div>
      {kind !== "decision" ? (
        <button className={`ask-save ${saved ? "on" : ""}`} aria-pressed={saved} onClick={() => toggleQuestion({ id, text, section })}>
          {saved ? "Dans mon carnet" : "Garder pour la discussion"}
        </button>
      ) : (
        <button className={`ask-save ${saved ? "on" : ""}`} aria-pressed={saved} onClick={() => toggleQuestion({ id, text: `Décision demandée : ${text}`, section })}>
          {saved ? "Dans mon carnet" : "Garder pour la discussion"}
        </button>
      )}
    </Reveal>
  );
}

export function Drawer({ open, onClose, title, children, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    ref.current?.focus();
    document.body.classList.add("lock");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("lock");
      prev?.focus?.();
    };
  }, [open, onClose]);
  return (
    <div className={`drawer-wrap ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="drawer-scrim" onClick={onClose} />
      <aside ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title} className={`drawer ${wide ? "wide" : ""}`}>
        <button className="drawer-close" onClick={onClose} aria-label="Fermer">×</button>
        {open && children}
      </aside>
    </div>
  );
}

export function Tabs<T extends string>({ tabs, value, onChange, label }: { tabs: { id: T; label: string }[]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((t) => (
        <button key={t.id} role="tab" aria-selected={value === t.id} className={value === t.id ? "on" : ""} onClick={() => onChange(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function Accordion({ items }: { items: { title: ReactNode; body: ReactNode; kicker?: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <div key={i} className={`acc-item ${open === i ? "open" : ""}`}>
          <button className="acc-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span className="acc-n">{it.kicker ?? i + 1}</span>
            <span className="acc-t">{it.title}</span>
            <span className="acc-chev" aria-hidden>+</span>
          </button>
          <div className="acc-body"><div>{it.body}</div></div>
        </div>
      ))}
    </div>
  );
}
