import { useMemo, useState } from "react";
import { Accordion, Counter, Discuss, Drawer, Reveal, Sub, img, useInView } from "../components/ui";
import VideoFacade from "../components/VideoFacade";
import { goTo } from "../components/Nav";
import {
  CONVERSION, DIMENSIONS, FAMILIES, MEMBERSHIP_QUESTIONS, FICHES, FOUR_P, IN_CONSTRUCTION, OFFERS, PIONNIERS, PIPELINE, TEAM, TRL_PHASES, VALUES, WHY_STRUCTURE, type Status,
} from "../content";

function ChapterHead({ id, n, label, title, children }: { id: string; n: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <header id={id} data-sec={id} data-title={`${n} ${title}`} className="chap-head big">
      <Reveal>
        <div className="chap-num"><span>{n}</span><i>{label}</i></div>
        <h2>{title}</h2>
        <p className="chap-lead">{children}</p>
      </Reveal>
    </header>
  );
}

export default function Section1() {
  return (
    <div className="chapter">
      <ChapterHead id="s1" n="1" label="Section" title="Le Centre d'expertise SilverTech">
        Le Centre d'expertise SilverTech facilite l'adoption des nouvelles technologies pour mieux vieillir chez soi. Tiers neutre entre les PME technologiques et les milieux de vie pour aînés, il met à profit ses expertises clinique, technologique et opérationnelle pour évaluer les solutions en conditions réelles et accompagner leur intégration.
      </ChapterHead>
      <Reveal className="video-wrap"><VideoFacade /></Reveal>

      <Problem />
      <Benchmark />
      <Foundations />
      <Ambition />
      <Team />
      <Model />
      <Pipeline />
      <Membership />
    </div>
  );
}

function Problem() {
  const [hover, setHover] = useState<"a" | "b" | null>(null);
  return (
    <Sub id="s1-1" num="1.1" title="La problématique" lead="Les deux côtés du marché vivent un problème symétrique : les milieux de vie ne savent pas quoi adopter, et les entreprises ne savent pas comment se faire adopter.">
      <div className={`gap-grid ${hover ?? ""}`}>
        <Reveal className="gap-card a" style={{}}>
          <div onMouseEnter={() => setHover("a")} onMouseLeave={() => setHover(null)} tabIndex={0} onFocus={() => setHover("a")} onBlur={() => setHover(null)}>
            <span className="tag">Milieux de vie</span>
            <h4>Choisir et intégrer les bonnes solutions</h4>
            <p>Les milieux de vie privés pour aînés doivent répondre à des besoins croissants de sécurité, d'autonomie, de qualité des soins et d'efficience, dans un contexte de pénurie de main-d'œuvre et de multiplication des technologies.</p>
            <p>Or, ils disposent de peu de moyens pour déterminer quelles solutions répondent réellement à leurs besoins, évaluer leur valeur en conditions réelles et les intégrer efficacement à leurs pratiques et systèmes existants.</p>
          </div>
        </Reveal>
        <div className="gap-mid" aria-hidden><span>?</span></div>
        <Reveal className="gap-card b" delay={120}>
          <div onMouseEnter={() => setHover("b")} onMouseLeave={() => setHover(null)} tabIndex={0} onFocus={() => setHover("b")} onBlur={() => setHover(null)}>
            <span className="tag">Entreprises technologiques</span>
            <h4>Passer de l'innovation à l'adoption</h4>
            <p>Les PME développant des technologies pour les aînés peinent souvent à passer de l'innovation à l'adoption. L'accès limité à des milieux réels complique la validation de leurs solutions, leur adaptation aux réalités des RPA et la démonstration de leur valeur.</p>
            <p>Elles ont besoin d'un environnement structuré d'évaluation et d'accompagnement pour tester, adapter et démontrer leurs technologies afin d'en accélérer l'adoption et le déploiement à grande échelle.</p>
          </div>
        </Reveal>
      </div>
      <Reveal className="gap-bridge">
        <h4>L'écart à combler</h4>
        <p>Il manque aujourd'hui un tiers neutre capable de partir des besoins réels des aînés et des milieux de vie, de sélectionner et d'évaluer les technologies en conditions réelles, d'en mesurer la valeur globale et les risques, puis d'accompagner leur intégration et leur adoption dans l'écosystème existant.</p>
        <blockquote>SilverTech ne valide pas seulement une technologie : <em>il sécurise la décision de l'adopter.</em></blockquote>
      </Reveal>
    </Sub>
  );
}

function Benchmark() {
  const [ref, seen] = useInView<HTMLDivElement>(0.35);
  return (
    <Sub id="s1-2" num="1.2" title="Un modèle unique" lead="Ce que confirme l'étalonnage d'Innovitech">
      <div className="bench" ref={ref}>
        <div className="funnel" aria-label="Entonnoir : 63 organisations recensées, 10 retenues, 4 analysées en profondeur">
          {[
            { n: 63, label: "organisations recensées", w: 100 },
            { n: 10, label: "retenues", w: 62 },
            { n: 4, label: "analysées en profondeur", w: 36 },
          ].map((f, i) => (
            <div key={f.n} className={`funnel-row ${seen ? "seen" : ""}`} style={{ transitionDelay: `${i * 220}ms`, width: seen ? `${f.w}%` : "0%" }}>
              <b><Counter to={f.n} duration={1000 + i * 300} /></b><span>{f.label}</span>
            </div>
          ))}
          <p className="funnel-note">Innovitech a recensé 63 organisations, dont 22 centres d'évaluation; elle en a retenu 10 et en a analysé 4 en profondeur. Ces quatre modèles sont CABHI (Toronto), Vilans (Pays-Bas), LiCalab (Belgique) et CIRris (Québec).</p>
        </div>
        <div className="bench-claim">
          <span className="tag light">Sur 63 organisations comparables</span>
          <p>Aucune ne combine <b>évaluation neutre en conditions réelles</b>, <b>services facturés aux entreprises</b> et <b>ancrage dans les RPA privées</b>. La proposition de valeur de SilverTech est confirmée.</p>
        </div>
      </div>
      <Accordion
        items={[
          { title: "Un positionnement unique", body: "Les organisations étudiées sont surtout publiques, universitaires ou subventionnaires. Aucune n'offre un service d'évaluation neutre facturé, centré sur les RPA privées." },
          { title: "La mesure de la valeur est un différenciateur", body: "Sur 22 centres d'évaluation analysés, aucun ne couvre les 7 familles d'indicateurs; les moins couvertes sont l'efficience, la technologie et l'économie." },
          { title: "La dépendance au financement public est la faiblesse commune", body: "Le modèle par honoraires de SilverTech est plus pérenne, à condition de démontrer qu'il préserve la neutralité." },
          { title: "Des alliés plutôt que des concurrents", body: "CABHI, AGE-WELL, Vilans et LiCalab sont des partenaires potentiels." },
        ]}
      />
    </Sub>
  );
}

function Foundations() {
  const [v, setV] = useState(0);
  return (
    <Sub id="s1-3" num="1.3" title="Nos fondements">
      <div className="found">
        <Reveal className="found-card"><span className="tag">Mission</span><p>Faciliter l'adoption des technologies dans les milieux de vie pour aîné·e·s afin de transformer la manière de vieillir chez soi, en RPA comme à domicile.</p></Reveal>
        <Reveal className="found-card" delay={100}><span className="tag">Vision</span><p>Devenir le centre de référence canadien pour l'identification des besoins, l'évaluation et la recommandation de technologies et de modèles innovants favorisant l'autonomie, la sécurité et la qualité de vie des personnes aînées.</p></Reveal>
        <Reveal className="found-card wide" delay={200}><span className="tag">Proposition de valeur</span><p>SilverTech agit comme tiers neutre entre les entreprises technologiques et les milieux de vie : il évalue les solutions en conditions réelles, les aligne sur les besoins des aînés, et accompagne leur intégration jusqu'à leur adoption.</p></Reveal>
      </div>
      <Reveal className="values">
        <h4 className="h4">Valeurs</h4>
        <div className="chips" role="tablist" aria-label="Valeurs">
          {VALUES.map(([t], i) => (
            <button key={t} role="tab" aria-selected={v === i} className={v === i ? "on" : ""} onClick={() => setV(i)}>{t}</button>
          ))}
        </div>
        <p className="value-text" key={v}>{VALUES[v][1]}</p>
      </Reveal>
    </Sub>
  );
}

function Ambition() {
  const [p, setP] = useState<number | null>(null);
  return (
    <Sub id="s1-4" num="1.4" title="Notre ambition d'impact">
      <Reveal className="northstar">
        <span className="tag light">Notre étoile du nord</span>
        <p className="big-quote">Faire passer la santé globale des aînés du réactif au préventif, pour que vieillir chez soi devienne la norme.</p>
      </Reveal>
      <div>
        <Reveal className="prose">
          <p>Nos systèmes de santé ont été conçus pour intervenir une fois le problème survenu. Le vieillissement appelle une santé personnalisée, prédictive, préventive et participative, qui prend soin du bien-être avant de traiter la maladie. Avec les aînés, leurs proches, les milieux de vie et les innovateurs, SilverTech valide sur le terrain les technologies et les modèles de services qui permettront de vieillir chez soi plus longtemps, en sécurité et en confiance.</p>
        </Reveal>
      </div>
      <div className="duo">
        <Reveal className="photo"><img src={img("capteur-nuit")} alt="Une aînée dort pendant qu'un capteur discret veille" loading="lazy" /></Reveal>
        <Reveal className="photo" delay={120}><img src={img("montre-connectee")} alt="Une montre connectée au poignet d'une personne aînée" loading="lazy" /></Reveal>
      </div>
      <Reveal>
        <h4 className="h4">L'approche 4P en santé</h4>
        <p className="muted">Proposée au début des années 2000 par le biologiste Leroy Hood, la médecine des 4P déplace le centre de gravité des soins : on ne réagit plus seulement à la maladie, on agit en amont, avec la personne.</p>
      </Reveal>
      <div className="fourp">
        {FOUR_P.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90}>
            <button className={`p-tile ${p === i ? "on" : ""}`} onClick={() => setP(p === i ? null : i)} aria-expanded={p === i}>
              <span className="p-letter">P</span>
              <strong>{t}</strong>
              <span className="p-desc">{d}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <Discuss id="q-prevention" section="1.4 Notre ambition d'impact" questions={["Selon des sources fiables, le gouvernement rendra bientôt disponibles des enveloppes budgétaires en prévention. Quelle approche devrions-nous adopter pour faciliter le financement de la transformation numérique des RPA : subventions, partenariats ou autre avenue?"]} />
    </Sub>
  );
}

function Team() {
  const [open, setOpen] = useState<string | null>(null);
  const m = TEAM.find((t) => t.id === open);
  return (
    <Sub id="s1-5" num="1.5" title="L'équipe terrain" lead="Une équipe multidisciplinaire qui allie expertise clinique, technologique et d'affaires pour l'adoption des innovations en milieux de vie pour aînés. Les trois directeurs sont co-leads sur l'ensemble des activités et des livrables.">
      <div className="team">
        {TEAM.map((t, i) => (
          <Reveal key={t.id} delay={i * 110}>
            <button className="person" onClick={() => setOpen(t.id)} aria-label={`Lire le parcours de ${t.name}`}>
              <img src={img(t.img)} alt={t.name} loading="lazy" />
              <div>
                <strong>{t.name}</strong>
                <em>{t.role}</em>
                <span>{t.expertise}</span>
                <b>Lire le parcours →</b>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <Drawer open={!!m} onClose={() => setOpen(null)} title={m?.name ?? ""}>
        {m && (
          <div className="bio">
            <img src={img(m.img)} alt={m.name} />
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <p className="exp">{m.expertise}</p>
            {m.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
      </Drawer>
    </Sub>
  );
}

function Model() {
  const [trl, setTrl] = useState(7);
  const phase = TRL_PHASES.find((p) => trl >= p.range[0] && trl <= p.range[1])!;
  return (
    <Sub id="s1-6" num="1.6" title="Le modèle SilverTech" lead="Au cœur du modèle : une échelle de maturité technologique (TRL) conçue pour les technologies d'assistance aux aînés, d'où découlent quatre offres de service.">
      <Reveal className="trl">
        <h4 className="h4">Explorez l'échelle : déplacez le curseur</h4>
        <div className="trl-track">
          <input type="range" min={1} max={9} step={1} value={trl} onChange={(e) => setTrl(+e.target.value)} aria-label="Niveau de maturité technologique (TRL)" aria-valuetext={`TRL ${trl}, ${phase.name}`} />
          <div className="trl-scale" aria-hidden>
            {Array.from({ length: 9 }, (_, i) => <span key={i} className={i + 1 === trl ? "on" : ""} onClick={() => setTrl(i + 1)}>{i + 1}</span>)}
          </div>
        </div>
        <div className="trl-phase" key={phase.name}>
          <span className="tag">TRL {trl}</span>
          <strong>{phase.name}</strong>
          <p>{phase.text}</p>
        </div>
        <div className="offers">
          {OFFERS.map((o) => {
            const active = trl >= o.trl[0] && trl <= o.trl[1];
            return (
              <div key={o.n} className={`offer ${active ? "on" : ""}`}>
                <span className="offer-n">{o.n}</span>
                <span className="offer-trl">{o.trl[0] === o.trl[1] ? `TRL ${o.trl[0]}` : `TRL ${o.trl[0]} à ${o.trl[1]}`}</span>
                <strong>{o.title}</strong>
                <dl><dt>Pour qui</dt><dd>{o.who}</dd><dt>Marché</dt><dd>{o.market}</dd></dl>
              </div>
            );
          })}
        </div>
        <p className="muted small">Le TRL (Technology Readiness Level) mesure, sur une échelle de 1 à 9, à quel point une technologie est prête à être utilisée en contexte réel.</p>
      </Reveal>

      <Reveal>
        <h4 className="h4">L'échelle d'évaluation</h4>
        <p className="muted">Les cadres existants mesurent surtout la performance clinique. Celui de SilverTech, inspiré de l'aérospatiale, mesure la réduction du risque jusqu'à un niveau acceptable pour une RPA. Il croise 9 niveaux de maturité et 9 dimensions, de la valeur pour les participants au risque légal.</p>
        <h4 className="h4">Les 9 dimensions évaluées</h4>
        <p className="muted">L'échelle d'évaluation découle de ces questions : des exigences à rencontrer pour chaque dimension à chaque niveau de TRL.</p>
      </Reveal>
      <ol className="dims">
        {DIMENSIONS.map((d, i) => (
          <Reveal as="li" key={i} delay={(i % 3) * 80}><span>{i + 1}</span>{d}</Reveal>
        ))}
      </ol>
    </Sub>
  );
}

const statusClass = (s: Status) => ({ "En cours": "s-run", "En attente": "s-wait", "Approuvé": "s-ok", "Complété": "s-done" }[s]);

function Pipeline() {
  const [filter, setFilter] = useState<"Tous" | Status>("Tous");
  const [open, setOpen] = useState<string | null>(null);
  const rows = useMemo(() => PIPELINE.filter((r) => filter === "Tous" || r.projects.some((p) => p.status === filter)), [filter]);
  const fiche = FICHES.find((f) => f.id === open);
  const filters: ("Tous" | Status)[] = ["Tous", "En cours", "Approuvé", "En attente", "Complété"];
  return (
    <Sub id="s1-7" num="1.7" title="Le pipeline de projets">
      <div className="stats">
        <Reveal className="stat"><b><Counter to={1.7} decimals={1} suffix=" M$ +" /></b><span>de projets engagés</span></Reveal>
        <Reveal className="stat" delay={80}><b><Counter to={11} /></b><span>projets</span></Reveal>
        <Reveal className="stat" delay={160}><b><Counter to={8} /></b><span>organisations</span></Reveal>
        <Reveal className="stat" delay={240}><b>4 + 4</b><span>entreprises et RPA en voie de conversion</span></Reveal>
      </div>
      <Reveal><p className="muted">Plus de 1,7 M$ de projets engagés auprès de 8 organisations, et 4 entreprises et 4 RPA en voie de conversion. La plupart des projets sont financés par envisAGE (MEDTEQ+ et AGE-WELL), et les Habitations Bordeleau en sont le principal milieu preneur.</p></Reveal>

      <div className="filters" role="group" aria-label="Filtrer par statut">
        {filters.map((f) => <button key={f} className={filter === f ? "on" : ""} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}
      </div>
      <div className="table-wrap">
        <table className="pipe">
          <thead><tr><th>Organisation</th><th>Projet</th><th>Valeur</th><th><span className="sr">Fiche</span></th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.org} onClick={() => setOpen(r.fiche!)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setOpen(r.fiche!)}>
                <td><div className="org">{r.logo && <img src={img(`logo-${r.logo}`)} alt="" loading="lazy" />}<strong>{r.org}</strong></div></td>
                <td>{r.projects.map((p) => (
                  <div key={p.name} className="proj">{p.name} <span className={`status ${statusClass(p.status)} ${filter !== "Tous" && p.status !== filter ? "dim" : ""}`}>{p.status}</span></div>
                ))}</td>
                <td className="val">{r.value}{r.phase && <span className="phase">{r.phase}</span>}</td>
                <td className="go">Fiche →</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="conv">
        <Reveal className="conv-card"><h4>Entreprises en conversion</h4><p>{CONVERSION.entreprises.join(", ")}</p></Reveal>
        <Reveal className="conv-card" delay={100}><h4>RPA en conversion</h4><p>{CONVERSION.rpa.join(", ")}</p></Reveal>
      </div>

      <Drawer open={!!fiche} onClose={() => setOpen(null)} title={fiche?.name ?? ""} wide>
        {fiche && (
          <div className="fiche">
            <img className="fiche-logo" src={img(`logo-${fiche.logo}`)} alt={fiche.name} />
            <h3>{fiche.name}</h3>
            <span className="tag">{fiche.badge}</span>
            {fiche.blocks.map(([k, v]) => (
              <div key={k} className="fiche-block"><h5>{k}</h5><p>{v}</p></div>
            ))}
            {fiche.id === "fondation" && <button className="btn" onClick={() => { setOpen(null); setTimeout(() => goTo("s2"), 200); }}>Aller à la section 2</button>}
          </div>
        )}
      </Drawer>
    </Sub>
  );
}

function Membership() {
  const [fam, setFam] = useState<"fondateurs" | "innovateurs" | "milieux">("innovateurs");
  const [tier, setTier] = useState(0);
  const f = FAMILIES.find((x) => x.id === fam)!;
  return (
    <Sub id="s1-8" num="1.8" title="L'offre de membership" lead="SilverTech réunit des Fondateurs, des Innovateurs et des Milieux de vie. Chaque famille joue un rôle distinct, avec ses droits et ses avantages.">
      <div className="families">
        {FAMILIES.map((x, i) => (
          <Reveal key={x.id} delay={i * 90}>
            <button className={`family ${fam === x.id ? "on" : ""}`} onClick={() => { setFam(x.id as typeof fam); setTier(0); }} aria-pressed={fam === x.id}>
              <span className="family-n">Famille {i + 1}</span>
              <strong>{x.name}</strong>
              <span>{x.tagline}</span>
              <span className={`vote ${x.vote ? "yes" : "no"}`}>{x.vote ? "Droit de vote" : "Sans droit de vote"}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="family-detail" key={fam}>
        <h4 className="fam-title">{f.name}</h4>
        <dl className="rows">
          {f.rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
        {f.advantages && (
          <>
            <h5>Avantages</h5>
            <ul className="ticks">{f.advantages.map((a) => <li key={a}>{a}</li>)}</ul>
          </>
        )}
        {f.tiers && f.grid && f.who && f.renewal && (
          <div className="tiers">
            <h5>Grille de cotisations</h5>
            <div className="tier-pick" role="tablist" aria-label="Palier">
              {f.tiers.map((t, i) => <button key={t} role="tab" aria-selected={tier === i} className={tier === i ? "on" : ""} onClick={() => setTier(i)}>{t}</button>)}
            </div>
            <div className="tier-card" key={tier}>
              <p className="tier-who"><span>Pour qui</span>{f.who[tier]}</p>
              <ul>
                {f.grid.map((r) => (
                  <li key={r[0]} className={r[tier + 1] ? "" : "na"}><span>{r[0]}</span><b>{r[tier + 1] || "Non inclus"}</b></li>
                ))}
                <li className="renew"><span>Années suivantes · {f.renewalNote}</span><b>{f.renewal[tier]}</b></li>
              </ul>
            </div>
            <div className="table-wrap compare">
              <table>
                <thead><tr><th></th>{f.tiers.map((t, i) => <th key={t} className={i === tier ? "hl" : ""}>{t}</th>)}</tr></thead>
                <tbody>
                  {f.grid.map((r) => <tr key={r[0]}><th>{r[0]}</th>{[1, 2, 3].map((c) => <td key={c} className={c - 1 === tier ? "hl" : ""}>{r[c] || "·"}</td>)}</tr>)}
                  <tr><th>Années suivantes</th>{f.renewal.map((v, i) => <td key={i} className={i === tier ? "hl" : ""}>{v}</td>)}</tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {fam === "innovateurs" && (
          <Reveal className="trl-review">
            <span className="tag">Point de départ</span>
            <h5>La revue TRL officielle</h5>
            <p>L'adhésion comprend une revue officielle du niveau de maturité technologique (TRL) de la solution, réalisée par l'équipe du CEST selon une méthode rigoureuse signée SilverTech.</p>
            <ul className="ticks">
              <li>Un rapport daté, remis dans les 90 jours suivant la réception des informations demandées.</li>
              <li>Une base commune pour la suite : la revue sert de point de départ à tout accompagnement du CEST et permet de mesurer la progression d'un niveau de maturité à l'autre.</li>
            </ul>
          </Reveal>
        )}
      </div>

      <Reveal className="pioneers">
        <span className="tag light">Statut spécial</span>
        <h4>Le cercle des Pionniers : nos sept premiers alliés</h4>
        <p>Un statut réservé aux sept premières organisations à rejoindre SilverTech, Innovateurs ou Milieux de vie, pour honorer celles qui ont cru au Centre dès le départ.</p>
        <ul className="ticks light">{PIONNIERS.map((p) => <li key={p}>{p}</li>)}</ul>
        <p className="fine">Les privilèges des Pionniers portent sur la visibilité, la durée de l'adhésion et la co-construction de l'offre. Ils ne touchent jamais à l'évaluation, à la classification ni à la sélection des projets.</p>
      </Reveal>

      <Reveal>
        <span className="tag">En construction</span>
        <h4 className="h4">Des services que nous bâtissons avec nos membres</h4>
        <p className="muted">Le CEST développe de nouveaux services pour ses membres. Les Pionniers seront les premiers à y avoir accès et contribueront à en définir le contenu.</p>
      </Reveal>
      <div className="cons">
        {IN_CONSTRUCTION.map(([t, d], i) => (
          <Reveal key={t} delay={i * 80} className="cons-card"><strong>{t}</strong><p>{d}</p></Reveal>
        ))}
      </div>

      <Reveal><h4 className="h4">Pourquoi cette structure?</h4></Reveal>
      <ol className="why">
        {WHY_STRUCTURE.map(([a, b], i) => (
          <Reveal as="li" key={a} delay={i * 80}><span>{i + 1}</span><p><b>{a}</b> {b}</p></Reveal>
        ))}
      </ol>

      <Reveal className="neutral">
        <h4>Et la neutralité face aux Fondateurs?</h4>
        <p>Les Habitations Bordeleau et la Fondation Famille Bordeleau sont à la fois Fondateurs et principaux milieux preneurs du Centre. Pour que ce double rôle ne compromette jamais l'indépendance de l'évaluation, nous proposons d'adopter une politique sur les conflits d'intérêts.</p>
      </Reveal>
      <Discuss id="q-membership" section="1.8 L'offre de membership" questions={MEMBERSHIP_QUESTIONS} />
      <p className="fine-note">L'adhésion ne garantit ni la sélection d'un projet, ni une implantation, ni une classification.</p>
    </Sub>
  );
}
