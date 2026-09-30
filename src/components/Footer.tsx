import { contactInfo, site } from '../content/site';
import { Wordmark } from './Wordmark';
import './Footer.css';

export function Footer() {
  const { footer, nav, brand } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Wordmark full />
            <p>{footer.tagline}</p>
          </div>

          <nav className="site-footer__col" aria-label="Footer">
            <h2 className="site-footer__heading">Navigate</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Contact</h2>
            <ul>
              <li>
                <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contactInfo.phoneHref}>Tel: {contactInfo.phoneDisplay}</a>
              </li>
              <li>
                <a href={contactInfo.emailHref}>{contactInfo.email}</a>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Consultations</h2>
            <ul>
              <li>Remote practice</li>
              <li>Online, by appointment</li>
              <li>
                <a href="#contact">Book a consultation</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__disclaimer">
          <h2 className="site-footer__heading">Disclaimer</h2>
          <p>{footer.disclaimer}</p>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <ul>
            {footer.legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
