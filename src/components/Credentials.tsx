import { site } from '../content/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import './Credentials.css';

export function Credentials() {
  const { credentials } = site;
  const { qualification } = credentials;

  return (
    <section id="credentials" className="section credentials" aria-labelledby="credentials-title">
      <div className="container credentials__grid">
        <div className="credentials__aside">
          <SectionHeading
            id="credentials-title"
            eyebrow={credentials.eyebrow}
            title={credentials.heading}
            intro={credentials.intro}
          />
          <Reveal className="credentials__media">
            <img
              src={credentials.image.src}
              alt={credentials.image.alt}
              width={1024}
              height={768}
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="credentials__main">
          <Reveal className="qualification">
            <span className="qualification__label">{qualification.label}</span>
            <div className="qualification__body">
              <span className="qualification__title">{qualification.title}</span>
              <div>
                <h3 className="qualification__name">{qualification.name}</h3>
                <p className="qualification__note">{qualification.note}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="credentials__subheading">{credentials.commitmentsTitle}</h3>
          </Reveal>

          <ol className="commitments">
            {credentials.commitments.map((c, i) => (
              <Reveal as="li" key={c.title} delay={120 + i * 70} className="commitment">
                <span className="commitment__index">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="commitment__title">{c.title}</h4>
                <p className="commitment__body">{c.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
