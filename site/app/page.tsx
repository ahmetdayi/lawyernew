'use client';
import CinematicHero from '@/components/cinematic-hero';
import Header from '@/components/header';
import Expertise from '@/components/expertise';
import Footer from '@/components/footer';
import Publications from '@/components/publications';
import Reveals from '@/components/reveals';
import { useContent } from '@/lib/i18n';
export default function Home() {
  const t = useContent();
  const mapQuery = encodeURIComponent(t.contact.mapQuery);
  return (
    <>
      <Header />
      <main id="main">
        <CinematicHero />
        <section className="manifesto section-pad" id="hakkimizda">
          <div className="eyebrow">{t.manifesto.eyebrow}</div>
          <div className="manifesto-grid reveal">
            <figure className="manifesto-photo">
              <img
                src="/about/portrait-900.webp"
                srcSet="/about/portrait-600.webp 600w, /about/portrait-900.webp 900w"
                sizes="(max-width: 767px) 88vw, 40vw"
                width="900"
                height="1125"
                alt={t.manifesto.photoAlt}
                loading="lazy"
              />
            </figure>
            <div>
              <h2>
                {t.manifesto.heading[0]}
                <br />
                <em>{t.manifesto.heading[1]}</em>
              </h2>
              <div className="manifesto-text">
                {t.manifesto.paragraphs.map((p, i) => (
                  <p key={i} style={i > 0 ? { marginTop: 20 } : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="facts reveal">
            {t.manifesto.facts.map(({ value, label }) => (
              <div className="fact" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
        <Expertise />
        <section className="approach section-pad" id="yaklasim">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">{t.approach.eyebrow}</p>
              <h2>
                {t.approach.heading[0]}
                <br />
                <em>{t.approach.heading[1]}</em>
              </h2>
            </div>
            <p>{t.approach.intro}</p>
          </div>
          <div className="approach-grid">
            {t.approach.steps.map(({ n, title, quote, body }) => (
              <article className="approach-step reveal" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p className="approach-quote">&ldquo;{quote}&rdquo;</p>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <Publications />
        <section className="contact section-pad" id="iletisim">
          <div className="reveal">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>
              {t.contact.heading[0]}
              <br />
              <em>{t.contact.heading[1]}</em>
            </h2>
            <a className="text-link" href={'mailto:' + t.contact.email}>
              {t.contact.linkText} <span>↗</span>
            </a>
          </div>
          <div className="contact-details">
            <p className="office">
              {t.contact.officeName}
              <br />
              {t.contact.officeTagline}
            </p>
            <p className="address">
              {t.contact.addressLines[0]}
              <br />
              {t.contact.addressLines[1]}
            </p>
            <a
              className="kvkk-link"
              href={t.contact.kvkkHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.kvkkLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-people">
            <div className="contact-person">
              <span className="contact-name">{t.contact.emailLabel}</span>
              <a className="contact-email" href={'mailto:' + t.contact.email}>
                {t.contact.email} ↗
              </a>
            </div>
            <div className="contact-person">
              <span className="contact-name">{t.contact.phoneLabel}</span>
              <a
                className="contact-email"
                href={
                  'tel:' +
                  t.contact.phone.replace(/\s/g, '').replace(/^0/, '+90')
                }
              >
                {t.contact.phone} ↗
              </a>
            </div>
          </div>
          <div className="contact-map reveal">
            <iframe
              title={t.contact.mapTitle}
              src={
                'https://www.google.com/maps?q=' +
                mapQuery +
                '&z=17&output=embed'
              }
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
            />
            <a
              className="contact-map-link"
              href={
                'https://www.google.com/maps/search/?api=1&query=' + mapQuery
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.mapOpen}
            >
              <span>
                {t.contact.mapOpen} <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Reveals />
    </>
  );
}
