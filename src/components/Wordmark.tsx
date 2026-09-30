import { site } from '../content/site';
import { Logo } from './Logo';
import './Wordmark.css';

export function Wordmark({ href = '#top', full = false }: { href?: string; full?: boolean }) {
  const { name, fullName, descriptor } = site.brand;

  return (
    <a className={full ? 'wordmark wordmark--full' : 'wordmark'} href={href} aria-label={`${fullName}, ${descriptor} — home`}>
      <Logo className="wordmark__logo" size={full ? 76 : 58} />
      <span className="wordmark__text">
        <span className="wordmark__name">{full ? fullName : name}</span>
        <span className="wordmark__descriptor">{descriptor}</span>
      </span>
    </a>
  );
}
