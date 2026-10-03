import { AGENDA, EXPECTATIONS, NETWORK_PROMPTS, PEOPLE, READING_QUESTIONS, TOC, UPCOMING_DECISIONS } from "../content";
import { Discuss, Reveal } from "../components/ui";
import { goTo } from "../components/Nav";
import { useNotes } from "../notes";

export default function Before() {
  const { openPanel } = useNotes();
  return (
    <div className="chapter">
      <section id="avant" data-sec="avant" data-title="Avant la rencontre" className="chap-head">
        <Reveal><p className="eyebrow">Avant la rencontre</p></Reveal>
      </section>

      <section id="bienvenue" data-sec="bienvenue" data-title="Bienvenue" className="sub welcome">
        <Reveal>
          <h2 className="h2">Bienvenue</h2>
          <div className="welcome-grid">
            <div className="prose">
              <p>Au nom du Centre d'expertise SilverTech, nous vous souhaitons la bienvenue à la première rencontre du conseil d'administration et du comité aviseur.</p>
              <p>Vous avez été invités à siéger au sein de ces instances pour la qualité de votre expertise, la rigueur de votre jugement et la franchise de vos perspectives. Ces atouts sont essentiels pour doter le Centre d'une gouvernance crédible, indépendante et multidisciplinaire. En tant que premières personnes appelées à y siéger, vous contribuerez à poser les fondations du Centre et à orienter ses premières décisions.</p>
              <p>Ce cahier réunit l'information essentielle pour préparer la rencontre, afin que vous puissiez questionner, orienter et décider en toute connaissance de cause. Les annexes sont à votre disposition pour approfondir les sujets qui vous intéressent.</p>
              <p>Nous vous remercions de votre engagement et sommes honorés de pouvoir compter sur votre contribution.</p>
            </div>
            <aside className="practical">
              <div>
                <b>En pratique</b>
                Temps de lecture estimé : 45 minutes. N'hésitez pas à annoter le document : le bouton « Note » à côté de chaque titre ouvre votre carnet.
              </div>
              <div className="disc">
                <b>Pour discussion</b>
                Les sections où nous souhaitons particulièrement mobiliser votre apport sont indiquées. Ce sont des éléments sur lesquels nous souhaitons vos avis et vos idées.
              </div>
              <div className="tips">
                <h4>Pour naviguer</h4>
                <ul>
                  <li><b>Table des matières</b> : elle suit votre lecture.</li>
                  <li><b>Ctrl ou Cmd + K</b> pour chercher un mot dans tout le cahier.</li>
                  <li><b>Garder pour la discussion</b> sur les questions que vous voulez aborder.</li>
                  <li><b>Mon carnet</b> garde vos notes sur votre appareil : pensez à les exporter.</li>
                </ul>
                <button className="btn" onClick={() => openPanel()}>Ouvrir mon carnet</button>
              </div>
            </aside>
          </div>
        </Reveal>
      </section>

      <section id="ordre" data-sec="ordre" data-title="Ordre du jour" className="sub">
        <Reveal><h2 className="h2">Ordre du jour</h2></Reveal>
        <ol className="agenda">
          {AGENDA.map(([t, d], i) => (
            <Reveal as="li" key={i} delay={i * 50} className="agenda-item">
              <span className="agenda-n">{i + 1}</span>
              <div><strong>{t}</strong>{d && <span>{d}</span>}</div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="attentes" data-sec="attentes" data-title="Ce que nous attendons de vous" className="sub">
        <Reveal><h2 className="h2">Ce que nous attendons de vous</h2></Reveal>
        <div className="expect">
          {EXPECTATIONS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 90} className="expect-card"><span>{i + 1}</span><div><h4>{t}</h4><p>{d}</p></div></Reveal>
          ))}
        </div>
        <Reveal className="decisions">
          <span className="tag">Pour le conseil d'administration</span>
          <h4 className="h4" style={{ marginTop: 0 }}>Les décisions des prochains mois</h4>
          <p>Voici les décisions qui seront soumises au CA au cours des prochains mois. Cette rencontre vise à poursuivre la réflexion et à préparer le terrain.</p>
          <ul className="ticks">{UPCOMING_DECISIONS.map((d) => <li key={d}>{d}</li>)}</ul>
        </Reveal>
        <Discuss id="q-lecture" section="Ce que nous attendons de vous" title="Questions pour guider la lecture" questions={READING_QUESTIONS} />
        <Reveal className="guide-card alt">
          <h4>Réseau et opportunités</h4>
          <ul>{NETWORK_PROMPTS.map((p) => <li key={p}>{p}</li>)}</ul>
        </Reveal>
      </section>

      <section id="personnes" data-sec="personnes" data-title="Personnes présentes" className="sub">
        <Reveal><h2 className="h2">Personnes présentes</h2></Reveal>
        <div className="people">
          {PEOPLE.map((g) => (
            <Reveal key={g.group} className="people-group">
              <h4>{g.group}</h4>
              <ul>
                {g.members.map((m) => (
                  <li key={m.name}>
                    <span className="avatar" aria-hidden>{m.name.replace(/^(Me|Dre?) /, "").split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
                    <div><strong>{m.name}</strong>{m.role && <em>{m.role}</em>}{m.note && <span>{m.note}</span>}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="toc" className="sub toc-grid-wrap">
        <Reveal><h2 className="h2">Table des matières</h2></Reveal>
        <div className="toc-grid">
          {TOC.slice(1).map((g, i) => (
            <Reveal key={g.id} delay={i * 80} className="toc-card">
              <button className="toc-card-head" onClick={() => goTo(g.id)}><span className="num">{g.num}</span>{g.title}</button>
              <ul>
                {g.children!.map((c) => (
                  <li key={c.id}><a href={`#${c.id}`} onClick={(e) => { e.preventDefault(); goTo(c.id); }}><span>{c.num}</span>{c.title}</a></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
