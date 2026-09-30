import { site } from '../content/site';
import { ArrowRight } from './Icons';
import { Reveal } from './Reveal';
import './ProfileSection.css';

export function ProfileSection() {
  const { profile } = site;

  return (
    <section id="about" className="section profile" aria-labelledby="about-title">
      <div className="container profile__grid">
        <Reveal className="profile__media">
          <figure className="profile__figure">
            <img src={profile.image.src} alt={profile.image.alt} width={768} height={1024} loading="lazy" />
            <figcaption className="profile__image-note">{profile.imageNote}</figcaption>
          </figure>
        </Reveal>

        <div className="profile__content">
          <Reveal>
            <span className="eyebrow">{profile.eyebrow}</span>
            <h2 id="about-title" className="profile__heading">
              {profile.heading}
            </h2>
          </Reveal>

          <Reveal delay={100} className="profile__body">
            {profile.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={150}>
            <dl className="profile__facts">
              {profile.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200} className="profile__footer">
            <div className="profile__signature">
              <span className="profile__signature-name">{profile.signature}</span>
              <span className="profile__signature-role">{profile.signatureRole}</span>
            </div>
            <a className="text-link" href={profile.cta.href}>
              {profile.cta.label}
              <ArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
