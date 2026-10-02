import { useState } from "react";
import { VIDEO } from "../content";
import { img } from "./ui";

/** Façade : YouTube n'est chargé qu'au clic (rapidité et confidentialité). */
export default function VideoFacade() {
  const [on, setOn] = useState(false);
  return (
    <figure className="video">
      <div className="video-frame">
        {on ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO.id}?autoplay=1&rel=0`}
            title={VIDEO.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button className="video-poster" onClick={() => setOn(true)} aria-label={`Lire la vidéo : ${VIDEO.title}`}>
            <img src={img("poster-video")} alt="" loading="lazy" />
            <span className="video-play" aria-hidden>
              <svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
            <span className="video-hint">Regarder la vidéo de présentation</span>
          </button>
        )}
      </div>
      <figcaption>
        La vidéo est hébergée sur YouTube et ne se charge qu'au clic.{" "}
        <a href={`https://www.youtube.com/watch?v=${VIDEO.id}`} target="_blank" rel="noreferrer noopener">Ouvrir sur YouTube</a>
      </figcaption>
    </figure>
  );
}
