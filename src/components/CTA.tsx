import { useState, type FormEvent } from 'react';
import { contactInfo, site } from '../content/site';
import { Reveal } from './Reveal';
import './CTA.css';

function buildWhatsAppMessage(data: FormData) {
  const field = (key: string) => String(data.get(key) ?? '').trim();
  const details = [
    `Name: ${field('name')}`,
    field('phone') && `Phone: ${field('phone')}`,
    field('email') && `Email: ${field('email')}`,
    field('matter') && `Matter: ${field('matter')}`,
  ].filter(Boolean);
  return ['*Consultation request*', '', ...details, '', field('message')].join('\n');
}

export function CTA() {
  const { contact } = site;
  const [status, setStatus] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get('name') ?? '').trim() || !String(data.get('message') ?? '').trim()) {
      setStatus(contact.form.incomplete);
      return;
    }
    const url = `${contactInfo.whatsappHref}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus(contact.form.note);
  };

  return (
    <section id="contact" className="section cta" aria-labelledby="contact-title">
      <div className="container cta__grid">
        <Reveal className="cta__intro">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 id="contact-title" className="cta__heading">
            {contact.heading}
          </h2>
          <p className="cta__lead">{contact.intro}</p>

          <dl className="cta__details">
            {contact.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>
                  {d.href ? (
                    <a
                      href={d.href}
                      {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="cta__panel">
          <form className="enquiry" onSubmit={onSubmit}>
            <h3 className="enquiry__title">{contact.form.title}</h3>

            <div className="enquiry__row">
              <div className="field">
                <label htmlFor="enq-name">Full name</label>
                <input id="enq-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="enq-phone">Telephone</label>
                <input id="enq-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="enq-email">Email address</label>
              <input id="enq-email" name="email" type="email" autoComplete="email" />
            </div>

            <div className="field">
              <label htmlFor="enq-matter">Nature of matter</label>
              <select id="enq-matter" name="matter" defaultValue="">
                <option value="" disabled>
                  Please select
                </option>
                {contact.form.matterOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="enq-message">Brief description</label>
              <textarea id="enq-message" name="message" rows={4} required />
            </div>

            <label className="enquiry__consent">
              <input type="checkbox" name="consent" required />
              <span>{contact.form.consent}</span>
            </label>

            <div className="enquiry__footer">
              <button type="submit" className="btn btn--dark">
                <WhatsAppIcon />
                {contact.form.submitLabel}
              </button>
              <p className="enquiry__status" role="status" aria-live="polite">
                {status || contact.form.note}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.64.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}
