import { Reveal, Sub } from "../components/ui";
import { BENCHMARK, DIMENSIONS } from "../content";

const EVAL_STEPS = [
  ["Revue du TRL", "environ 1 mois", "À partir du TRL 6"],
  ["Évaluation en laboratoire", "1 à 3 mois", ""],
  ["Chez des primo-adoptants", "3 à 6 mois", ""],
  ["Déploiement en RPA", "1 à 2 ans", ""],
];

const WORK = [
  ["Positionnement", "Mission, vision et proposition de valeur préliminaires; équation de SilverTech; cartographie des parties prenantes; catégories de membres."],
  ["Besoins du terrain", "Guides d'entrevue; 6 entrevues; synthèse des besoins prioritaires."],
  ["Technologies", "Typologie de 50 types de technologies en 6 catégories; radar de veille; étalonnage de 63 organisations; échelle TRL; processus d'évaluation; architecture des données."],
  ["Organisation", "Outil d'évaluation de la maturité à innover (12 leviers); capacités d'affaires; définition des offres de service."],
];

const MODELS = ["OROT (CIUSSS du Centre-Ouest)", "Bruyère Health", "KITE Research Institute (UHN)", "CABHI", "RÉISD (Université Laval)", "AGE-WELL", "Vilans (Pays-Bas)", "LiCalab (Belgique)", "NIM Intelliance (CIUSSS du Nord)", "CIRris (Université Laval)"];

export default function Annexes() {
  return (
    <div className="chapter">
      <header id="annexes" data-sec="annexes" data-title="3 Annexes" className="chap-head big">
        <Reveal>
          <div className="chap-num"><span>3</span><i>Pour approfondir</i></div>
          <h2>Annexes</h2>
        </Reveal>
      </header>

      <Sub id="annexe-a" num="A" title="Le modèle SilverTech en détail">
        <Reveal><h4 className="h4">Les 9 dimensions de l'échelle TRL SilverTech</h4></Reveal>
        <ol className="dims">{DIMENSIONS.map((d, i) => <Reveal as="li" key={i} delay={(i % 3) * 70}><span>{i + 1}</span>{d}</Reveal>)}</ol>

        <Reveal><h4 className="h4">Le parcours d'évaluation (offre 1)</h4></Reveal>
        <ol className="eval">
          {EVAL_STEPS.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 110}><span>{i + 1}</span><strong>{t}</strong><em>{d}</em></Reveal>
          ))}
        </ol>

        <Reveal><h4 className="h4">Les travaux d'Innovitech (mai à septembre 2026)</h4><p className="muted">Quinze livrables regroupés en quatre blocs.</p></Reveal>
        <div className="work">
          {WORK.map(([t, d], i) => <Reveal key={t} delay={i * 80} className="work-card"><h5>{t}</h5><p>{d}</p></Reveal>)}
        </div>

        <Reveal className="equation">
          <span className="tag light">L'équation de SilverTech</span>
          <p className="big-quote small">Pour un ensemble de technologies qui augmentent le bien-être des aînés, maximiser la valeur pour l'ensemble des parties prenantes, en commençant par l'aîné.</p>
        </Reveal>
        <p className="source">Source : Innovitech, 2026.</p>
      </Sub>

      <Sub id="annexe-b" num="B" title="L'étalonnage en détail">
        <Reveal><h4 className="h4">Les 10 modèles retenus</h4>
          <ul className="chips static">{MODELS.map((m) => <li key={m}>{m}</li>)}</ul>
        </Reveal>
        <div className="bench-list">
          {BENCHMARK.map((b, i) => (
            <Reveal key={b.org} delay={i * 80} className="bench-card">
              <h4>{b.org}</h4>
              <dl>
                <div><dt>Nature et financement</dt><dd>{b.nature}</dd></div>
                <div><dt>Ce qu'on peut en apprendre</dt><dd>{b.learn}</dd></div>
                <div className="plus"><dt>Ce que SilverTech offre en plus</dt><dd>{b.extra}</dd></div>
              </dl>
            </Reveal>
          ))}
        </div>
        <p className="source">Source : Innovitech, 2026. L'étalonnage repose sur des sources publiques.</p>
      </Sub>

      <Sub id="annexe-c" num="C" title="Document d'adhésion des Innovateurs">
        <Reveal className="placeholder">Emplacement prévu pour le document d'adhésion des Innovateurs, dans sa version révisée.</Reveal>
      </Sub>
    </div>
  );
}
