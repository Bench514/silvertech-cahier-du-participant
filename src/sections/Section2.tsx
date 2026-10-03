import { useState } from "react";
import { Accordion, Counter, Discuss, Reveal, Sub, Tabs, img } from "../components/ui";
import Stepper from "../components/Stepper";
import {
  ADVISORY_QUESTIONS, COMPETITORS, ETHICS, ETHICS_QUESTIONS, IMPROVEMENT_LOOP, INDICATORS, JOURNEY, LEARNINGS, LIFECYCLE, PARTNERS, PROMISE, RESEARCH_QUESTIONS, ROADMAP, THEMES,
} from "../content";

export default function Section2() {
  return (
    <div className="chapter">
      <header id="s2" data-sec="s2" data-title="2 Projet-phare : RPA à la maison" className="chap-head big hero">
        <img src={img("hero-rpa")} alt="" />
        <div className="hero-shade" />
        <Reveal className="hero-text">
          <div className="chap-num"><span>2</span><i>Section · Projet-phare</i></div>
          <h2>Vieillir chez soi, en toute confiance</h2>
          <p className="chap-lead">RPA à la maison offre l'encadrement d'une résidence pour aînés directement à domicile, grâce à une technologie intelligente et à une équipe humaine dédiée. C'est le premier grand terrain de validation de SilverTech.</p>
        </Reveal>
      </header>

      <div className="stats on-photo">
        <Reveal className="stat"><b><Counter to={85} suffix=" %" /></b><span>des aînés souhaitent vieillir chez eux</span></Reveal>
        <Reveal className="stat" delay={100}><b><Counter to={14} /></b><span>participants actifs : 9 en résidence aux Habitations Bordeleau, 5 à domicile</span></Reveal>
        <Reveal className="stat" delay={200}><b><Counter to={500000} suffix=" $" /></b><span>engagés par la Caisse Desjardins de Joliette et du Centre de Lanaudière sur cinq ans</span></Reveal>
      </div>

      <Sub id="s2-1" num="2.1" title="Pourquoi ce projet">
        <div className="split">
          <div className="prose">
            <Reveal><p>Chaque année, les Habitations Bordeleau accompagnent des centaines d'aînés et leurs proches. Une réalité revient sans cesse : près de 85 % des personnes aînées souhaitent demeurer chez elles le plus longtemps possible. Pourtant, plusieurs doivent partir plus tôt qu'ils ne l'auraient voulu, faute d'un accompagnement suffisamment structuré, coordonné et sécuritaire.</p></Reveal>
            <Reveal><p>Les services demeurent largement fragmentés, réactifs et insuffisamment coordonnés, et les technologies de soutien à domicile sont souvent déployées de façon isolée, sans parcours de services cohérent. Il en résulte une détection tardive des changements de condition, des chutes, des visites à l'urgence, des hospitalisations évitables et des admissions prématurées en hébergement.</p></Reveal>
            <Reveal><p>Pour les Habitations Bordeleau, c'est une priorité stratégique : l'organisation passe d'une logique principalement immobilière à une offre intégrée de services destinée à soutenir les aînés dans leur milieu de vie.</p></Reveal>
          </div>
          <Reveal className="photo tall" delay={120}><img src={img("plaisirs")} alt="Bien vivre chez soi, c'est aussi garder ses plaisirs" loading="lazy" /></Reveal>
        </div>
        <Reveal className="big-question">D'où une question simple : est-il possible d'offrir à domicile un niveau de soutien inspiré des meilleures pratiques développées en résidence pour aînés?</Reveal>
      </Sub>

      <Sub id="s2-2" num="2.2" title="Thématiques prioritaires">
        <Accordion items={THEMES.map(([t, d]) => ({ title: t, body: <p>{d}</p> }))} />
      </Sub>

      <Sub id="s2-3" num="2.3" title="Les participant·e·s">
        <div className="portrait-card">
          <Reveal className="photo"><img src={img("loranger")} alt="Mme Loranger, résidente et participante au projet" loading="lazy" /></Reveal>
          <Reveal className="portrait-text" delay={120}>
            <span className="tag">Portrait</span>
            <blockquote>« Les technologies sont comme mes anges gardiens. Je me sens protégée. »</blockquote>
            <p>Résidente des Habitations Bordeleau depuis 2022, Mme Loranger a été parmi les toutes premières à accepter de participer au projet. Pionnière parmi les participants, elle en est aujourd'hui une fidèle alliée.</p>
          </Reveal>
        </div>
        <div className="stats small-stats">
          <Reveal className="stat"><b>72 à 94</b><span>ans</span></Reveal>
          <Reveal className="stat" delay={80}><b><Counter to={86} suffix=" %" /></b><span>de femmes</span></Reveal>
          <Reveal className="stat" delay={160}><b><Counter to={14} /></b><span>premiers participants, tous vivent seuls (deux avec un chien)</span></Reveal>
        </div>
        <Reveal className="prose">
          <h4 className="h4">Qui peut participer</h4>
          <p>Une personne qui vit seule dans la MRC de Joliette, communique verbalement, habite un logement de type 3½ ou 4½ et se déplace de façon autonome.</p>
          <p>Les quatorze premiers participants ont entre 72 et 94 ans. Ce sont à 86 % des femmes, et toutes et tous vivent seuls; deux partagent leur quotidien avec un chien. Ils ont accepté de participer d'abord parce que le service augmente leur sentiment de sécurité, puis parce qu'il les rassure : ils savent qu'en cas de besoin, quelqu'un sera là.</p>
        </Reveal>
      </Sub>

      <Sub id="s2-4" num="2.4" title="Notre promesse">
        <Reveal className="pillars"><span>Bien-être</span><span>Sentiment de sécurité</span><span>Motivation</span></Reveal>
        <Reveal><p className="muted">Offert gratuitement par la Fondation Famille Bordeleau, le service réunit trois volets :</p></Reveal>
        <div className="promise">
          {PROMISE.map(([t, d], i) => (
            <Reveal key={t} delay={i * 120} className="promise-card"><span className="promise-n">{i + 1}</span><h4>{t}</h4><p>{d}</p></Reveal>
          ))}
        </div>
        <Reveal><p className="callout">Pour les proches, c'est la possibilité de ne plus porter seuls toute la responsabilité, et d'avoir une meilleure visibilité sur la situation de la personne, au quotidien, sans être intrusifs.</p></Reveal>
        <Reveal className="callout"><b>Un abonnement à vie.</b> Les participants bénéficient d'un abonnement à vie : il n'y a pas de « fin de parcours », seulement une boucle d'amélioration continue.</Reveal>
      </Sub>

      <Technologies />

      <Sub id="s2-6" num="2.6" title="Le service au quotidien">
        <Stepper label="Le service au quotidien" items={LIFECYCLE} />
        <Reveal className="improve">
          <h4>Boucle d'amélioration continue ↺</h4>
          <div className="improve-row">
            {IMPROVEMENT_LOOP.map(([t, d], i) => (
              <div key={t} className="improve-item"><strong>{t}</strong><span>{d}</span>{i < 2 && <i aria-hidden>→</i>}</div>
            ))}
          </div>
        </Reveal>
      </Sub>

      <Impact />

      <Sub id="s2-8" num="2.8" title="Le parcours d'un participant">
        <Stepper label="Parcours d'un participant" items={JOURNEY} loopFrom={3} />
        <Reveal><p className="fine-note">Les étapes 4 à 6 forment une boucle continue.</p></Reveal>
      </Sub>

      <Sub id="s2-9" num="2.9" title="Nos principes éthiques" lead="La technologie doit protéger la personne sans jamais la déposséder de sa vie. L'entente signée avec chaque participant traduit ce principe en engagements concrets.">
        <div className="ethics">
          {ETHICS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80} className="ethic"><h4>{t}</h4><p>{d}</p></Reveal>
          ))}
        </div>
        <Discuss id="q-ethique" section="2.9 Nos principes éthiques" questions={ETHICS_QUESTIONS} />
      </Sub>

      <Competition />

      <Sub id="s2-11" num="2.11" title="Notre feuille de route" lead="RPA à la maison grandit par étapes : d'abord la sécurité, puis le lien social, puis la santé préventive.">
        <ol className="roadmap">
          {ROADMAP.map((r, i) => (
            <Reveal as="li" key={r.phase} delay={i * 140} className={`road ${i === 0 ? "now" : ""}`}>
              <div className={`road-year ${/^\d+$/.test(r.year) ? "" : "word"}`}>{r.year}</div>
              <div className="road-body">
                <span className="tag">Phase {r.phase}</span>
                <h4>{r.theme}</h4>
                <p>{r.text}</p>
                {r.status && <span className="status s-run">{r.status}</span>}
              </div>
            </Reveal>
          ))}
        </ol>
      </Sub>

      <Sub id="s2-12" num="2.12" title="Nos apprentissages">
        <Reveal className="photo wide-photo"><img src={img("numerique")} alt="Apprivoiser le numérique, à son rythme" loading="lazy" /></Reveal>
        <Reveal><p className="lead">Nous partageons nos premiers apprentissages avec franchise, parce que c'est précisément ce qu'un projet pilote doit produire.</p></Reveal>
        <div className="learn">
          {LEARNINGS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 110} className="learn-card"><span>{i + 1}</span><h4>{t}</h4><p>{d}</p></Reveal>
          ))}
        </div>
        <Discuss id="q-engagement" section="2.12 Nos apprentissages" questions={["Dre Pomey, la motivation des aînés est au cœur de votre démarche : quels leviers favorisent l'engagement dans la durée, bien au-delà des premières semaines, et comment les intégrer dès maintenant au parcours?"]} />
      </Sub>

      <Sub id="s2-13" num="2.13" title="Un comité à créer">
        <Reveal className="next-step">
          <span className="tag">Prochaine étape</span>
          <p>Nous voulons que les aînés et leurs proches participent à la conception du modèle, et pas seulement à son essai. Les évaluateurs d'envisAGE l'ont d'ailleurs suggéré pour un projet connexe mené aux Habitations Bordeleau : l'inclusion de partenaires patients renforcerait la démarche.</p>
          <p>Nous proposons de créer un comité de participants et de proches aidants, qui contribuerait à :</p>
          <ul className="ticks">
            <li>co-construire l'offre de services, les protocoles et les outils;</li>
            <li>valider les indicateurs qui comptent vraiment pour eux;</li>
            <li>interpréter les résultats et formuler les recommandations.</li>
          </ul>
        </Reveal>
        <div className="duo">
          <Reveal className="photo"><img src={img("portrait-ainee")} alt="Portrait d'une aînée" loading="lazy" /></Reveal>
          <Reveal className="photo" delay={120}><img src={img("portrait-aine")} alt="Portrait d'un aîné" loading="lazy" /></Reveal>
        </div>
        <Discuss id="q-politiques" section="2.13 Un comité à créer" heading="De la preuve de concept aux politiques publiques" questions={["Si le modèle fonctionne pour 50 aînés de la région de Joliette, que faudrait-il pour qu'il fonctionne pour 50 000 aînés au Québec?"]}>
          <p>En janvier 2024, le Commissaire à la santé et au bien-être concluait sa série Bien vieillir chez soi en appelant à une transformation du soutien à domicile, qu'il jugeait complexe, mal intégré et peu performant, et en recommandant de mieux soutenir l'innovation. RPA à la maison s'inscrit dans cette volonté : documenter, avec des données réelles, ce qu'il en coûte et ce qu'on y gagne à accompagner un aîné chez lui plutôt qu'en hébergement.</p>
          <p>La démonstration permettra de valider, en conditions réelles, une nouvelle approche favorisant le maintien à domicile, de documenter sa valeur clinique, organisationnelle et économique, puis de produire les données probantes nécessaires à son acquisition par les Habitations Bordeleau et à son déploiement auprès d'autres organisations au Québec.</p>
          <p>Les composantes qui auront démontré leur valeur pourront être intégrées au futur modèle de services, puis déployées à plus grande échelle.</p>
          <p>Les organisations visées sont les résidences, les municipalités, les organismes communautaires, les assureurs et, à terme, les établissements du réseau de la santé.</p>
        </Discuss>
      </Sub>

      <Sub id="s2-14" num="2.14" title="Votre regard nous serait précieux">
        <div className="discuss-light">
          <Discuss id="q-aviseur" section="2.14 Votre regard nous serait précieux" title="Pour le comité aviseur" heading="Quatre questions sur lesquelles nous aimerions votre éclairage" questions={ADVISORY_QUESTIONS} />
        </div>
        <Reveal className="closing">
          <p>Vieillir chez soi en toute confiance est une ambition collective, et nous sommes heureux de la porter avec vous dès aujourd'hui.</p>
          <p className="small">Merci de votre engagement : votre regard franc et éclairé nous aidera à bâtir un Centre crédible, utile et à la hauteur des aîné·e·s qu'il veut servir.</p>
        </Reveal>
      </Sub>
    </div>
  );
}

function Technologies() {
  const [t, setT] = useState<"lisa" | "virtuose">("lisa");
  return (
    <Sub id="s2-5" num="2.5" title="Les technologies déployées">
      <Tabs label="Technologie" value={t} onChange={setT} tabs={[{ id: "lisa", label: "LivingSafe · LISA" }, { id: "virtuose", label: "Virtuose" }]} />
      <div className="tech" key={t}>
        {t === "lisa" ? (
          <>
            <figure className="photo"><img src={img("lever-lit")} alt="Le lever du lit, le moment où le risque de chute est le plus élevé" /><figcaption>Le lever du lit : le moment où le risque de chute est le plus élevé.</figcaption></figure>
            <div className="tech-text">
              <img className="tech-logo" src={img("logo-livingsafe")} alt="LivingSafe" />
              <h4>LISA : détecter les chutes</h4>
              <p><b>Le défi.</b> Les chutes causent environ 85 % des hospitalisations liées à une blessure chez les aînés au Canada. Et chez les personnes très âgées, le danger tient aussi au temps passé au sol : dans une étude menée auprès de personnes de plus de 90 ans, 80 % de celles qui étaient tombées n'avaient pas pu se relever seules, et 30 % étaient restées au sol une heure ou plus.</p>
              <p><b>La solution.</b> Conçue à Montréal, LISA détecte les chutes en temps réel grâce au radar, sans caméra et sans objet à porter, puis alerte immédiatement l'équipe. La personne n'a rien à faire, même si elle est incapable de demander de l'aide.</p>
              <p className="question"><b>Notre question.</b> LISA réduit-elle le délai d'intervention après une chute?</p>
            </div>
          </>
        ) : (
          <>
            <figure className="photo"><img src={img("virtuose-accueil")} alt="L'accueil de l'assistant Virtuose et son bouton Demande rappel" /><figcaption>L'accueil de l'assistant Virtuose et son bouton Demande rappel.</figcaption></figure>
            <div className="tech-text">
              <img className="tech-logo" src={img("logo-virtuose")} alt="Virtuose Technologies" />
              <h4>Virtuose : prévenir les visites à l'urgence</h4>
              <p><b>Le défi.</b> Au Québec, les personnes de 75 ans et plus représentent plus de 30 % des patients sur civière aux urgences, et près de la moitié d'entre elles sont ensuite hospitalisées.</p>
              <p><b>La solution.</b> Conçue à Alma, la plateforme Virtuose regroupe les données d'objets connectés (montre, tablette) et de courts questionnaires quotidiens. Elle signale à l'équipe clinique les signes de détérioration, permet une vidéoconsultation et tient les proches aidants informés.</p>
              <p className="question"><b>Notre question.</b> Parvient-on à détecter plus tôt une détérioration de l'état de santé, et à prévenir les complications?</p>
            </div>
          </>
        )}
      </div>
    </Sub>
  );
}

const LEVEL = ["Absent", "Partiel ou variable", "Présent"];

function Competition() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Sub id="s2-10" num="2.10" title="Le paysage concurrentiel">
      <div className="stats small-stats">
        <Reveal className="stat"><b><Counter to={14} /></b><span>modèles et acteurs comparés, au Québec et à l'international</span></Reveal>
        <Reveal className="stat" delay={80}><b><Counter to={4} /></b><span>dimensions examinées : détection, coordination, services humains, prévention</span></Reveal>
        <Reveal className="stat" delay={160}><b><Counter to={1} /></b><span>seul compétiteur direct, limité à Montréal</span></Reveal>
      </div>
      <Reveal><p className="muted">Les modèles de coordination (PRISMA, PACE, Buurtzorg, CRT) intègrent peu ou pas de détection continue. Les entreprises privées offrent des technologies ou des services, sans modèle coordonné. RPA à la maison réunit les deux approches dans une seule offre.</p></Reveal>

      <Reveal className="matrix-wrap">
        <div className="matrix" role="table" aria-label="Comparaison des modèles">
          <div className="m-row m-head" role="row">
            <div role="columnheader">Famille analysée</div>
            {COMPETITORS.cols.map((c) => <div key={c} role="columnheader">{c}</div>)}
          </div>
          {COMPETITORS.rows.map((r, i) => (
            <div key={r.family} role="row" className={`m-row ${r.highlight ? "hl" : ""} ${hover === i ? "hover" : ""}`} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <div role="rowheader"><strong>{r.family}</strong><span>{r.who}</span></div>
              {r.v.map((v, k) => (
                <div key={k} role="cell" className="m-cell"><i className={`dot l${v}`} title={`${COMPETITORS.cols[k]} : ${LEVEL[v]}`} aria-label={LEVEL[v]} /></div>
              ))}
            </div>
          ))}
        </div>
        <div className="legend"><span><i className="dot l2" /> Présent</span><span><i className="dot l1" /> Partiel ou variable</span><span><i className="dot l0" /> Absent</span></div>
      </Reveal>

      <div className="triple">
        <Reveal className="triple-card"><h4>Une combinaison sans équivalent</h4><p>Aucune solution disponible au Québec ne réunit détection continue, coordination clinique centralisée, accompagnement humain multidisciplinaire et approche préventive dans un modèle clé en main.</p></Reveal>
        <Reveal className="triple-card" delay={90}><h4>Un seul compétiteur direct</h4><p>Equinoxe LifeCare offre une détection similaire, sans caméra ni appareil à porter. Sa couverture se limite à Montréal, sans RPA complète à domicile, dans une approche privée haut de gamme.</p></Reveal>
        <Reveal className="triple-card" delay={180}><h4>Des partenaires potentiels</h4><p>Le CCEG de Drummondville (gérontologie, recherche-action, évaluation) et le Lab. Domus de l'Université de Sherbrooke (technologies pour personnes fragiles) sont complémentaires.</p></Reveal>
      </div>
      <p className="source">Source : analyse de la compétition, dossier de financement de RPA à la maison.</p>

      <Reveal><h4 className="h4">Nos partenaires</h4></Reveal>
      <ul className="partners">
        {PARTNERS.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 70}>
            <div className="logos"><img src={img(`logo-${p.logo}`)} alt="" loading="lazy" /></div>
            <div><strong>{p.name}</strong><span>{p.text}</span></div>
          </Reveal>
        ))}
      </ul>
    </Sub>
  );
}

function Impact() {
  const [k, setK] = useState(0);
  return (
    <Sub id="s2-7" num="2.7" title="Les mesures d'impact">
      <Reveal className="photo wide-photo"><img src={img("virtuose-videos")} alt="Bibliothèque de vidéos de prévention sur la tablette Virtuose" loading="lazy" /></Reveal>
      <Reveal><h4 className="h4">Nos questions de recherche</h4></Reveal>
      <ol className="rq">
        {RESEARCH_QUESTIONS.map((q, i) => <Reveal as="li" key={q} delay={i * 70}><span>{i + 1}</span>{q}</Reveal>)}
      </ol>
      <Reveal>
        <h4 className="h4">Nos indicateurs</h4>
        <p className="muted">L'équipe clinique a défini une trentaine d'indicateurs, mesurés en deux temps : une phase de référence (établir le portrait de départ), puis une phase d'impact (mesurer les changements).</p>
        <div className="ind">
          <div className="ind-tabs" role="tablist" aria-label="Volets d'indicateurs">
            {INDICATORS.map(([t], i) => <button key={t} role="tab" aria-selected={k === i} className={k === i ? "on" : ""} onClick={() => setK(i)}>{t}</button>)}
          </div>
          <div className="ind-body" key={k}><h5>Exemples d'indicateurs</h5><p>{INDICATORS[k][1]}</p></div>
        </div>
      </Reveal>
    </Sub>
  );
}
