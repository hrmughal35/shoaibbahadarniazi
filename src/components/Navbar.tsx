import { useEffect, useState } from 'react';
import { site } from '../content/site';
import { CloseIcon, MenuIcon } from './Icons';
import { Wordmark } from './Wordmark';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1080px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      {site.showConceptNotice && (
        <div className="concept-notice" aria-hidden={scrolled}>
          <div className="container">{site.conceptNotice}</div>
        </div>
      )}

      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Wordmark />

          <nav className="site-nav" aria-label="Primary">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn btn--outline-light site-header__cta" href={site.primaryCta.href}>
            {site.primaryCta.label}
          </a>

          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          <ul>
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  <span className="mobile-menu__index">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--gold mobile-menu__cta" href={site.primaryCta.href} onClick={close}>
            {site.primaryCta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
