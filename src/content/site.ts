/**
 * All website content lives here.
 *
 * Only information confirmed by the client should be stated as fact.
 * Values in [square brackets] are still awaiting confirmation.
 */

export type NavItem = { label: string; href: string };

export type PracticeArea = {
  title: string;
  summary: string;
  href: string;
};

export type ApproachStep = { title: string; body: string };

export type Commitment = { title: string; body: string };

export type Insight = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
};

export type ContactDetail = { label: string; value: string; href?: string; external?: boolean };

const phoneDisplay = '+92 303 4333589';
const whatsappNumber = '923034333589';
const email = 'saeedwatoo657@gmail.com';

export const contactInfo = {
  phoneDisplay,
  phoneHref: `tel:+${whatsappNumber}`,
  whatsappNumber,
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  email,
  emailHref: `mailto:${email}`,
};

export const site = {
  /** Shows a thin notice bar indicating that the site is a preview. */
  showConceptNotice: true,
  conceptNotice: 'Website preview — content subject to final review.',

  brand: {
    name: 'Shoaib Bahadar',
    fullName: 'Muhammad Shoaib Bahadar',
    descriptor: 'Legal Counsel',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice' },
    { label: 'Approach', href: '#experience' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  primaryCta: { label: 'Book a Consultation', href: '#contact' },

  hero: {
    eyebrow: 'Legal Counselling & Tax Matters',
    headline: 'Trusted legal counsel for individuals and businesses.',
    headlineEmphasis: 'legal counsel',
    statement:
      'Clear, practical guidance on legal and tax matters — offered remotely, in confidence, and at a time that suits you.',
    secondaryCta: { label: 'About the Practice', href: '#about' },
    image: {
      src: '/images/hero-counsel.jpg',
      alt: 'A legal professional in a dark suit resting a hand on a bound law book',
    },
    caption: { title: 'Consultations', detail: 'Online · By appointment' },
    principles: [
      { title: 'Discretion', body: 'Every enquiry handled in strict confidence.' },
      { title: 'Clarity', body: 'Advice set out in plain, direct terms.' },
      { title: 'Accessibility', body: 'Consultations online, wherever you are.' },
    ],
  },

  profile: {
    eyebrow: 'About',
    heading: 'Straightforward legal guidance, without the distance.',
    paragraphs: [
      'Muhammad Shoaib Bahadar is a law graduate (LLB) offering legal counselling and tax-related guidance to individuals and businesses.',
      'The practice is conducted remotely, so seeking advice does not require visiting an office. Consultations are arranged by appointment over WhatsApp, telephone or email — and every matter begins with listening carefully, understanding the full picture, and then setting out the options and next steps in plain language.',
    ],
    facts: [
      { label: 'Qualification', value: 'LLB — Bachelor of Laws' },
      { label: 'Practice', value: 'Remote consultations' },
      { label: 'Availability', value: 'By appointment' },
    ],
    signature: 'Muhammad Shoaib Bahadar',
    signatureRole: 'LLB · Legal Counsel',
    cta: { label: 'Qualification & Standards', href: '#credentials' },
    image: {
      src: '/images/portrait-placeholder.jpg',
      alt: 'Placeholder portrait: a professional in a navy suit, seen from behind',
    },
    imageNote: 'Portrait to be supplied',
  },

  practice: {
    eyebrow: 'Practice Areas',
    heading: 'Areas of practice.',
    intro:
      'Advice and assistance across legal counselling, tax matters and everyday legal needs — for individuals, families and businesses.',
    areas: [
      {
        title: 'Legal Counselling',
        summary: 'Confidential advice on your rights, obligations and options, so you can decide on the right course of action with confidence.',
        href: '#contact',
      },
      {
        title: 'Tax Advisory & Compliance',
        summary: 'Guidance on tax obligations, registration, filing requirements and keeping records in order for individuals and businesses.',
        href: '#contact',
      },
      {
        title: 'Tax Notices & Disputes',
        summary: 'Review of notices and correspondence from tax authorities, with advice on the appropriate response and next steps.',
        href: '#contact',
      },
      {
        title: 'Contracts & Documentation',
        summary: 'Drafting and review of agreements, deeds, affidavits and other legal documents — clear, accurate and fit for purpose.',
        href: '#contact',
      },
      {
        title: 'Property & Civil Matters',
        summary: 'Advice on property transactions, tenancy, ownership and general civil matters, including the documents they require.',
        href: '#contact',
      },
      {
        title: 'Business Legal Support',
        summary: 'Practical legal support for small businesses and professionals — from setting up and compliance to day-to-day agreements.',
        href: '#contact',
      },
    ] satisfies PracticeArea[],
  },

  approach: {
    eyebrow: 'Approach',
    heading: 'How each matter is handled.',
    intro:
      'A clear, orderly process — so that clients understand their position, their options and what happens next at every stage.',
    image: {
      src: '/images/architecture-columns.jpg',
      alt: '',
    },
    steps: [
      {
        title: 'Initial Consultation',
        body: 'A conversation over WhatsApp, telephone or email to understand the circumstances, the objectives and the urgency of the matter.',
      },
      {
        title: 'Assessment & Advice',
        body: 'A careful review of the relevant facts and documents, followed by advice on the available options, set out plainly.',
      },
      {
        title: 'Plan of Action',
        body: 'An agreed way forward, with the expected steps, documents required and timeframes made clear from the outset.',
      },
      {
        title: 'Support & Follow-through',
        body: 'Attentive handling of the matter to its conclusion, with regular updates and a single, direct point of contact.',
      },
    ] satisfies ApproachStep[],
  },

  credentials: {
    eyebrow: 'Qualification',
    heading: 'Qualification & professional standards.',
    intro:
      'Legal training provides the foundation. How each client is treated — with care, confidentiality and honesty — defines the practice.',
    image: {
      src: '/images/law-library.jpg',
      alt: 'A traditional law library with bound law reports and a brass reading lamp',
    },
    qualification: {
      label: 'Academic Qualification',
      title: 'LLB',
      name: 'Bachelor of Laws',
      note: 'A formal grounding in law, legal procedure and the principles that underpin sound legal advice.',
    },
    commitmentsTitle: 'Professional commitments',
    commitments: [
      {
        title: 'Confidentiality',
        body: 'Every enquiry and every document shared is treated in strict confidence.',
      },
      {
        title: 'Honest assessment',
        body: 'A candid view of each matter, including its risks — never false assurances.',
      },
      {
        title: 'Clear communication',
        body: 'Advice in plain language, with prompt replies and no unnecessary jargon.',
      },
      {
        title: 'Continued study',
        body: 'Keeping up with changes in law and tax rules that affect clients.',
      },
    ] satisfies Commitment[],
  },

  insights: {
    eyebrow: 'Insights',
    heading: 'Commentary & publications.',
    viewAll: { label: 'View All Insights', href: '#insights' },
    disclaimer:
      'Articles shown are illustrative placeholders. Published material will be general information only and not legal advice.',
    articles: [
      {
        category: 'Tax',
        date: '[Date]',
        title: 'Featured article title — a considered headline on a legal or tax topic',
        excerpt:
          'A short summary of the article, two or three lines in length, giving the reader a clear sense of the subject and why it matters.',
        href: '#insights',
        image: '/images/desk-documents.jpg',
      },
      {
        category: 'Legal Guidance',
        date: '[Date]',
        title: 'Article title placeholder on a relevant legal subject',
        excerpt: 'A brief summary of the article and its key points.',
        href: '#insights',
      },
      {
        category: 'Tax',
        date: '[Date]',
        title: 'Article title placeholder on a recent tax development',
        excerpt: 'A brief summary of the article and its key points.',
        href: '#insights',
      },
      {
        category: 'Documentation',
        date: '[Date]',
        title: 'Article title placeholder for a practical guide',
        excerpt: 'A brief summary of the article and its key points.',
        href: '#insights',
      },
    ] satisfies Insight[],
  },

  contact: {
    eyebrow: 'Book a Consultation',
    heading: 'Discuss your matter, in confidence.',
    intro:
      'Consultations are held remotely and by appointment. Send a short description of your matter through the form — it opens directly in WhatsApp — or get in touch by telephone or email.',
    details: <ContactDetail[]>[
      { label: 'WhatsApp', value: phoneDisplay, href: `https://wa.me/${whatsappNumber}`, external: true },
      { label: 'Telephone', value: phoneDisplay, href: `tel:+${whatsappNumber}` },
      { label: 'Email', value: email, href: `mailto:${email}` },
      { label: 'Consultations', value: 'Online, by appointment' },
    ],
    form: {
      title: 'Consultation request',
      matterOptions: [
        'Legal Counselling',
        'Tax Advisory & Compliance',
        'Tax Notices & Disputes',
        'Contracts & Documentation',
        'Property & Civil Matters',
        'Business Legal Support',
        'Other',
      ],
      consent:
        'I understand that sending this enquiry does not by itself create a lawyer–client relationship.',
      submitLabel: 'Send via WhatsApp',
      note: 'Your enquiry will open in WhatsApp, ready to send.',
      incomplete: 'Please enter your name and a brief description of your matter.',
    },
  },

  footer: {
    tagline: 'Legal counselling and tax guidance for individuals and businesses.',
    disclaimer:
      'The information on this website is for general information purposes only and does not constitute legal advice. Viewing this website or sending an enquiry does not by itself create a lawyer–client relationship.',
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
    ] satisfies NavItem[],
  },
};

export type SiteContent = typeof site;
