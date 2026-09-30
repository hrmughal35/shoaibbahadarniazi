import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import './SectionHeading.css';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'split';
};

export function SectionHeading({ eyebrow, title, intro, id, tone = 'light', align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={`section-heading section-heading--${tone} section-heading--${align}`}>
      <div className="section-heading__title-group">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
      </div>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  );
}
