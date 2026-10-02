import { NotesProvider } from "./notes";
import Nav, { useScrollSpy } from "./components/Nav";
import NotesPanel from "./components/NotesPanel";
import Cover from "./sections/Cover";
import Before from "./sections/Before";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Annexes from "./sections/Annexes";
import { useEffect } from "react";

function Shell() {
  const { active, progress } = useScrollSpy();
  useEffect(() => {
    if (location.hash) setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 200);
  }, []);
  return (
    <>
      <Nav active={active} progress={progress} />
      <main id="contenu">
        <Cover />
        <Before />
        <Section1 />
        <Section2 />
        <Annexes />
        <footer className="foot">
          <span>Cahier du participant · Conseil d'administration · 5 octobre 2026</span>
          <span className="conf">Confidentiel · pour discussion seulement</span>
        </footer>
      </main>
      <NotesPanel />
    </>
  );
}

export default function App() {
  return (
    <NotesProvider>
      <Shell />
    </NotesProvider>
  );
}
