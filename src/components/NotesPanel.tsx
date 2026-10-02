import { useEffect, useRef, useState } from "react";
import { useNotes, type Note } from "../notes";
import { META } from "../content";

const fmt = (t: number) => new Date(t).toLocaleString("fr-CA", { dateStyle: "medium", timeStyle: "short" });

function toMarkdown(notes: Note[], questions: { text: string; section: string }[]) {
  const L: string[] = [];
  L.push(`# Mon carnet : ${META.event}`, `${META.date}, ${META.place}`, "", `Exporté le ${fmt(Date.now())}`, "");
  L.push("## Questions à discuter", "");
  if (!questions.length) L.push("(aucune)");
  questions.forEach((q) => L.push(`- ${q.text}${q.section ? ` (section ${q.section})` : ""}`));
  L.push("", "## Mes notes", "");
  if (!notes.length) L.push("(aucune)");
  [...notes].reverse().forEach((n) => {
    L.push(`### ${n.section || "Note générale"}`, `*${fmt(n.createdAt)}*`, "", n.text, "");
  });
  return L.join("\n");
}

function download(name: string, mime: string, content: string) {
  const url = URL.createObjectURL(new Blob([content], { type: mime + ";charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function NotesPanel() {
  const n = useNotes();
  const [text, setText] = useState("");
  const [section, setSection] = useState("");
  const [msg, setMsg] = useState("");
  const [tab, setTab] = useState<"notes" | "questions">("notes");
  const area = useRef<HTMLTextAreaElement>(null);
  const file = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (n.open) {
      setSection(n.draftSection);
      setTimeout(() => area.current?.focus(), 250);
    }
  }, [n.open, n.draftSection]);

  useEffect(() => {
    if (!n.open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && n.closePanel();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n.open, n]);

  const flash = (m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(""), 3500);
  };
  const stamp = () => new Date().toISOString().slice(0, 10);
  const total = n.state.notes.length + n.state.questions.length;

  const exportMd = () => {
    download(`carnet-silvertech-${stamp()}.md`, "text/markdown", toMarkdown(n.state.notes, n.state.questions));
    n.markExported();
    flash("Carnet exporté (.md).");
  };
  const exportJson = () => {
    download(`carnet-silvertech-${stamp()}.json`, "application/json", JSON.stringify({ app: "silvertech-cahier", version: 1, notes: n.state.notes, questions: n.state.questions }, null, 2));
    n.markExported();
    flash("Sauvegarde exportée (.json). Vous pourrez la réimporter.");
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toMarkdown(n.state.notes, n.state.questions));
      n.markExported();
      flash("Carnet copié dans le presse-papiers.");
    } catch {
      flash("Copie impossible : utilisez l'export.");
    }
  };
  const importJson = async (f?: File) => {
    if (!f) return;
    try {
      const p = JSON.parse(await f.text());
      if (p.app !== "silvertech-cahier") throw new Error();
      const ids = new Set(n.state.notes.map((x: Note) => x.id));
      const qids = new Set(n.state.questions.map((x) => x.id));
      n.replaceAll({
        notes: [...n.state.notes, ...(p.notes as Note[]).filter((x) => !ids.has(x.id))].sort((a, b) => b.createdAt - a.createdAt),
        questions: [...n.state.questions, ...(p.questions as { id: string; text: string; section: string }[]).filter((x) => !qids.has(x.id))],
      });
      flash("Sauvegarde importée et fusionnée.");
    } catch {
      flash("Fichier invalide.");
    }
  };

  const printNotes = () => {
    document.body.classList.add("printing-notes");
    window.addEventListener("afterprint", () => document.body.classList.remove("printing-notes"), { once: true });
    window.print();
  };

  const add = () => {
    const t = text.trim();
    if (!t) return;
    n.addNote(t, section);
    setText("");
  };

  return (
    <div className={`drawer-wrap notes ${n.open ? "open" : ""}`} aria-hidden={!n.open}>
      <div className="drawer-scrim" onClick={n.closePanel} />
      <aside className="drawer notes-drawer" role="dialog" aria-modal="true" aria-label="Mon carnet">
        <button className="drawer-close" onClick={n.closePanel} aria-label="Fermer">×</button>
        <h2 className="notes-title">Mon carnet</h2>

        <div className="warn" role="note">
          <strong>Vos notes restent sur cet appareil.</strong> Elles sont enregistrées dans ce navigateur seulement : personne d'autre ne les voit, mais elles peuvent être perdues
          (vidage des données du navigateur, navigation privée, autre appareil ou autre navigateur). <strong>Exportez-les avant de quitter.</strong>
          {!n.storageOk && <div className="warn-bad">Le stockage est désactivé dans ce navigateur : vos notes seront perdues à la fermeture de la page.</div>}
        </div>

        <div className="notes-actions">
          <button className="btn primary" onClick={exportMd} disabled={!total}>Exporter (.md)</button>
          <button className="btn" onClick={copy} disabled={!total}>Copier</button>
          <button className="btn" onClick={exportJson} disabled={!total}>Sauvegarde (.json)</button>
          <button className="btn" onClick={() => file.current?.click()}>Importer</button>
          <button className="btn" onClick={printNotes} disabled={!total}>Imprimer</button>
          <input ref={file} type="file" accept="application/json,.json" hidden onChange={(e) => { importJson(e.target.files?.[0]); e.target.value = ""; }} />
        </div>
        <div className="notes-status" aria-live="polite">
          {msg || (n.state.lastExport ? `Dernier export : ${fmt(n.state.lastExport)}` : "Jamais exporté")}
          {!msg && n.unexported > 0 && <span className="pill">{n.unexported} non exportée{n.unexported > 1 ? "s" : ""}</span>}
        </div>

        <div className="tabs small" role="tablist">
          <button role="tab" aria-selected={tab === "notes"} className={tab === "notes" ? "on" : ""} onClick={() => setTab("notes")}>Notes ({n.state.notes.length})</button>
          <button role="tab" aria-selected={tab === "questions"} className={tab === "questions" ? "on" : ""} onClick={() => setTab("questions")}>Questions ({n.state.questions.length})</button>
        </div>

        {tab === "notes" ? (
          <>
            <div className="note-form">
              {section && (
                <div className="note-ctx">
                  Section : <strong>{section}</strong>
                  <button onClick={() => setSection("")} aria-label="Retirer la section">×</button>
                </div>
              )}
              <textarea ref={area} value={text} onChange={(e) => setText(e.target.value)} placeholder="Une idée, une question, un point à valider…" rows={3}
                onKeyDown={(e) => (e.metaKey || e.ctrlKey) && e.key === "Enter" && add()} />
              <button className="btn primary" onClick={add} disabled={!text.trim()}>Ajouter la note</button>
            </div>
            <ul className="note-list">
              {n.state.notes.length === 0 && <li className="empty">Aucune note pour l'instant. Utilisez le bouton « Note » à côté d'un titre pour en lier une à une section.</li>}
              {n.state.notes.map((x) => (
                <li key={x.id}>
                  <div className="note-meta"><span>{x.section || "Note générale"}</span><time>{fmt(x.createdAt)}</time></div>
                  <textarea value={x.text} onChange={(e) => n.updateNote(x.id, e.target.value)} rows={Math.min(8, Math.max(2, x.text.split("\n").length))} aria-label="Modifier la note" />
                  <button className="link-danger" onClick={() => { if (confirm("Supprimer cette note?")) n.removeNote(x.id); }}>Supprimer</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="note-list">
            {n.state.questions.length === 0 && <li className="empty">Utilisez « Garder pour la discussion » sur les questions du cahier pour les retrouver ici.</li>}
            {n.state.questions.map((q) => (
              <li key={q.id}>
                <div className="note-meta"><span>Section {q.section}</span></div>
                <p>{q.text}</p>
                <button className="link-danger" onClick={() => n.toggleQuestion(q)}>Retirer</button>
              </li>
            ))}
          </ul>
        )}
      </aside>
      <div className="print-only">
        <h1>Mon carnet</h1>
        <pre>{toMarkdown(n.state.notes, n.state.questions)}</pre>
      </div>
    </div>
  );
}
