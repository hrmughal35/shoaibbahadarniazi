import type { PracticeArea } from '../content/site';
import { ArrowRight } from './Icons';
import './PracticeAreaCard.css';

type PracticeAreaCardProps = PracticeArea & { index: number };

export function PracticeAreaCard({ title, summary, href, index }: PracticeAreaCardProps) {
  return (
    <a className="practice-card" href={href}>
      <span className="practice-card__index">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="practice-card__title">{title}</h3>
      <p className="practice-card__summary">{summary}</p>
      <span className="practice-card__more">
        Enquire
        <ArrowRight />
      </span>
    </a>
  );
}
