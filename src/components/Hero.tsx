import { site } from '../content/site';
import { ArrowRight } from './Icons';
import './Hero.css';

function renderHeadline(headline: string, emphasis?: string) {
  if (!emphasis || !headline.includes(emphasis)) return headline;
  const [before, after] = headline.split(emphasis);
  return (
    <>
      {before}
      <em>{emphasis}</em>
      {after}
    </>
  );
}

export function Hero() {
  const { hero, primaryCta } = site;

  return (
    <section className={`hero${site.showConceptNotice ? ' hero--with-notice' : ''}`} aria-labelledby="hero-title">
      <div className="hero__rules" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>

          <h1 id="hero-title" className="hero__title">
            {renderHeadline(hero.headline, hero.headlineEmphasis)}
          </h1>

          <p className="hero__statement">{hero.statement}</p>

          <div className="hero__actions">
            <a className="btn btn--gold" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            <a className="btn btn--outline-light" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <ArrowRight />
            </a>
          </div>
        </div>

        <figure className="hero__media">
          <div className="hero__frame">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={768}
              height={1024}
            />
          </div>
          <figcaption className="hero__caption">
            <span className="hero__caption-title">{hero.caption.title}</span>
            <span className="hero__caption-detail">{hero.caption.detail}</span>
          </figcaption>
        </figure>

        <ul className="hero__principles">
          {hero.principles.map((p, i) => (
            <li key={p.title}>
              <span className="hero__principle-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="hero__principle-title">{p.title}</h2>
                <p>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
