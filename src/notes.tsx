import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Note = { id: string; text: string; section: string; createdAt: number; updatedAt: number };
export type SavedQuestion = { id: string; text: string; section: string };

type State = { notes: Note[]; questions: SavedQuestion[]; lastExport: number | null };

const KEY = "silvertech-cahier-2026-10-05";
const EMPTY: State = { notes: [], questions: [], lastExport: null };

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const p = JSON.parse(raw);
    return {
      notes: Array.isArray(p.notes) ? p.notes : [],
      questions: Array.isArray(p.questions) ? p.questions : [],
      lastExport: typeof p.lastExport === "number" ? p.lastExport : null,
    };
  } catch {
    return EMPTY;
  }
}

function canStore(): boolean {
  try {
    localStorage.setItem(KEY + ":test", "1");
    localStorage.removeItem(KEY + ":test");
    return true;
  } catch {
    return false;
  }
}

type Ctx = {
  state: State;
  storageOk: boolean;
  open: boolean;
  draftSection: string;
  openPanel: (section?: string) => void;
  closePanel: () => void;
  addNote: (text: string, section: string) => void;
  updateNote: (id: string, text: string) => void;
  removeNote: (id: string) => void;
  toggleQuestion: (q: SavedQuestion) => void;
  isSaved: (id: string) => boolean;
  markExported: () => void;
  replaceAll: (s: Partial<State>) => void;
  unexported: number;
};

const NotesContext = createContext<Ctx | null>(null);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(load);
  const [storageOk] = useState(canStore);
  const [open, setOpen] = useState(false);
  const [draftSection, setDraftSection] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* stockage indisponible : l'avertissement du carnet le signale */
    }
  }, [state]);

  // synchronisation entre onglets
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setState(load());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const openPanel = useCallback((section?: string) => {
    setDraftSection(section ?? "");
    setOpen(true);
  }, []);

  const value = useMemo<Ctx>(() => {
    const touched = (n: { updatedAt: number }) => state.lastExport === null || n.updatedAt > state.lastExport;
    return {
      state,
      storageOk,
      open,
      draftSection,
      openPanel,
      closePanel: () => setOpen(false),
      addNote: (text, section) => {
        const now = Date.now();
        setState((s) => ({ ...s, notes: [{ id: crypto.randomUUID(), text, section, createdAt: now, updatedAt: now }, ...s.notes] }));
      },
      updateNote: (id, text) =>
        setState((s) => ({ ...s, notes: s.notes.map((n) => (n.id === id ? { ...n, text, updatedAt: Date.now() } : n)) })),
      removeNote: (id) => setState((s) => ({ ...s, notes: s.notes.filter((n) => n.id !== id) })),
      toggleQuestion: (q) =>
        setState((s) =>
          s.questions.some((x) => x.id === q.id)
            ? { ...s, questions: s.questions.filter((x) => x.id !== q.id) }
            : { ...s, questions: [...s.questions, q] },
        ),
      isSaved: (id) => state.questions.some((q) => q.id === id),
      markExported: () => setState((s) => ({ ...s, lastExport: Date.now() })),
      replaceAll: (p) => setState((s) => ({ ...s, ...p })),
      unexported: state.notes.filter(touched).length,
    };
  }, [state, storageOk, open, draftSection, openPanel]);

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const c = useContext(NotesContext);
  if (!c) throw new Error("NotesProvider manquant");
  return c;
}
