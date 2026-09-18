'use client';
import { useContent } from '@/lib/i18n';
export default function Footer() {
  const t = useContent();
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="brand footer-brand" href="/" aria-label={t.footer.homeAria}>
          <img src="/brand/askin-hukuk-logo.png" alt={t.footer.logoAlt} />
        </a>
        <div className="footer-nav">
          {t.footer.nav.map(({ label, href }, i) => (
            <a href={href} key={i}>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
