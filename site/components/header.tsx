'use client';
import { useEffect, useState } from 'react';
const links = [
  ['Çalışma Alanlarımız', 'uzmanlik'],
  ['Yaklaşımımız', 'yaklasim'],
  ['Ekibimiz', 'ekip'],
  ['Yayınlar', 'yayinlar'],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  return (
    <div className="header-wrap">
      <div className="top-bar">
        <a href="tel:+905466229845">0 546 622 98 45</a>
        <a href="mailto:omerfarukaskn@gmail.com">omerfarukaskn@gmail.com</a>
      </div>
      <header className="site-header">
        <a href="#" className="brand" aria-label="Aşkın Hukuk ana sayfa">
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
          {open ? 'Kapat −' : 'Menü +'}
        </button>
        <nav
          id="navigation"
          className={open ? 'nav open' : 'nav'}
          aria-label="Ana menü"
        >
          {links.map(([name, id]) => (
            <a href={'#' + id} key={id} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#iletisim"
            onClick={() => setOpen(false)}
          >
            İletişim <span>↗</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
