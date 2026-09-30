import { site } from '../content/site';
import { PracticeAreaCard } from './PracticeAreaCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import './PracticeAreas.css';

export function PracticeAreas() {
  const { practice } = site;

  return (
    <section id="practice" className="section practice" aria-labelledby="practice-title">
      <div className="container">
        <SectionHeading
          id="practice-title"
          eyebrow={practice.eyebrow}
          title={practice.heading}
          intro={practice.intro}
          align="split"
        />

        <ul className="practice__grid">
          {practice.areas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={i * 90}>
              <PracticeAreaCard {...area} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
