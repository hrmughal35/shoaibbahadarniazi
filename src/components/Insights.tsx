import { site } from '../content/site';
import { ArrowRight } from './Icons';
import { InsightCard } from './InsightCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import './Insights.css';

export function Insights() {
  const { insights } = site;
  const [featured, ...rest] = insights.articles;

  return (
    <section id="insights" className="section insights" aria-labelledby="insights-title">
      <div className="container">
        <SectionHeading
          id="insights-title"
          eyebrow={insights.eyebrow}
          title={insights.heading}
          intro={insights.disclaimer}
          align="split"
        />

        <div className="insights__grid">
          {featured && (
            <Reveal className="insights__featured">
              <InsightCard {...featured} variant="featured" />
            </Reveal>
          )}

          <div className="insights__list">
            {rest.map((article, i) => (
              <Reveal key={article.title} delay={i * 90}>
                <InsightCard {...article} />
              </Reveal>
            ))}
            <Reveal className="insights__view-all">
              <a className="text-link" href={insights.viewAll.href}>
                {insights.viewAll.label}
                <ArrowRight />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
