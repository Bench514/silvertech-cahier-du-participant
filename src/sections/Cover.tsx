import { META } from "../content";
import { img } from "../components/ui";
import { goTo } from "../components/Nav";

export default function Cover() {
  return (
    <section id="cover" data-sec="cover" data-title="Couverture" className="cover">
      <div className="cover-bg" aria-hidden />
      <div className="cover-inner">
        <p className="eyebrow cv-1">{META.event}</p>
        <h1 className="cv-2">Cahier des<br />participant·e·s</h1>
        <p className="cover-sub cv-3">Tout ce qu'il faut pour préparer la rencontre, à parcourir à votre rythme.</p>
        <button className="cta cv-4" onClick={() => goTo("bienvenue")}>
          Commencer la lecture <span aria-hidden>↓</span>
        </button>
      </div>
      <img className="cover-logo cv-5" src={img("logo-silvertech")} alt="Centre d'expertise SilverTech" />
      <div className="cover-meta cv-4">
        <div>
          <span className="label">Rencontre</span>
          <strong>{META.date}</strong>
          <span>{META.time} · {META.place}</span>
        </div>
        <div className="right">
          <span>{META.version}</span>
          <span className="conf">{META.confidential}</span>
        </div>
      </div>
    </section>
  );
}
