import { site } from '../content/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import './Approach.css';

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export function Approach() {
  const { approach } = site;

  return (
    <section id="experience" className="section approach" aria-labelledby="approach-title">
      <div className="approach__backdrop" aria-hidden="true">
        <img src={approach.image.src} alt={approach.image.alt} loading="lazy" width={1024} height={576} />
      </div>

      <div className="container approach__inner">
        <SectionHeading
          id="approach-title"
          eyebrow={approach.eyebrow}
          title={approach.heading}
          intro={approach.intro}
          tone="dark"
          align="split"
        />

        <ol className="approach__steps">
          {approach.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="approach__step">
              <span className="approach__numeral" aria-hidden="true">
                {NUMERALS[i] ?? i + 1}
              </span>
              <h3 className="approach__step-title">{step.title}</h3>
              <p className="approach__step-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
