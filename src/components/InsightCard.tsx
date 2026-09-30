import type { Insight } from '../content/site';
import { ArrowRight } from './Icons';
import './InsightCard.css';

type InsightCardProps = Insight & { variant?: 'featured' | 'compact' };

export function InsightCard({ category, date, title, excerpt, href, image, variant = 'compact' }: InsightCardProps) {
  return (
    <article className={`insight-card insight-card--${variant}`}>
      <a href={href} className="insight-card__link">
        {variant === 'featured' && image && (
          <div className="insight-card__media">
            <img src={image} alt="" width={1024} height={768} loading="lazy" />
          </div>
        )}
        <div className="insight-card__body">
          <p className="insight-card__meta">
            <span>{category}</span>
            <span aria-hidden="true" className="insight-card__dot" />
            <span>{date}</span>
          </p>
          <h3 className="insight-card__title">{title}</h3>
          <p className="insight-card__excerpt">{excerpt}</p>
          <span className="insight-card__more">
            Read Article
            <ArrowRight />
          </span>
        </div>
      </a>
    </article>
  );
}
