'use client';
import { useEffect, useState } from 'react';
import { useLanguage, useContent } from '@/lib/i18n';
function TrFlag() {
  return (
    <svg viewBox="0 0 24 16" className="flag-icon" aria-hidden="true">
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9.5" cy="8" r="4" fill="#fff" />
      <circle cx="10.7" cy="8" r="3.2" fill="#E30A17" />
      <path
        fill="#fff"
        d="M14.7 6.3l.55 1.62 1.71.02-1.38 1.02.52 1.63-1.4-1-1.4 1 .52-1.63-1.38-1.02 1.71-.02z"
      />
    </svg>
  );
}
function GbFlag() {
  return (
    <svg viewBox="0 0 24 16" className="flag-icon" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" strokeWidth="3.2" />
      <path
        d="M0,0 L10.5,7 M13.5,9 L24,16 M24,0 L13.5,7 M10.5,9 L0,16"
        stroke="#C8102E"
        strokeWidth="1.4"
      />
      <path d="M12,0 V16 M0,8 H24" stroke="#fff" strokeWidth="5.3" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useContent();
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  useEffect(() => {
    const scroll = () => {
      document.documentElement.classList.toggle(
        'scrolled',
        window.scrollY > 50,
      );
    };
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  return (
    <div className="header-wrap">
      <div className="top-bar">
        <a href="tel:+905466229845">0 546 622 98 45</a>
        <a href="mailto:omerfarukaskn@gmail.com">omerfarukaskn@gmail.com</a>
        <div className="lang-switch" role="group" aria-label={t.header.langLabel}>
          <button
            type="button"
            className={lang === 'tr' ? 'lang-flag active' : 'lang-flag'}
            aria-pressed={lang === 'tr'}
            aria-label="Türkçe"
            onClick={() => setLang('tr')}
          >
            <TrFlag /> TR
          </button>
          <button
            type="button"
            className={lang === 'en' ? 'lang-flag active' : 'lang-flag'}
            aria-pressed={lang === 'en'}
            aria-label="English"
            onClick={() => setLang('en')}
          >
            <GbFlag /> EN
          </button>
        </div>
      </div>
      <header className="site-header">
        <a href="#" className="brand" aria-label={t.header.homeAria}>
          <span className="brand-symbol">
            <img src="/brand/askin-hukuk-icon.png" alt="" />
          </span>
          <span>
            AŞKIN<span className="brand-sub">HUKUK BÜROSU</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? t.header.menuOpen : t.header.menuClosed}
        </button>
        <nav
          id="navigation"
          className={open ? 'nav open' : 'nav'}
          aria-label={t.header.mainMenuAria}
        >
          {t.header.nav.map(({ label, id }) => (
            <a href={'#' + id} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#iletisim"
            onClick={() => setOpen(false)}
          >
            {t.header.contact} <span>↗</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
