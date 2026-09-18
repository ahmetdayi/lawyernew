'use client';
import CinematicHero from '@/components/cinematic-hero';
import Header from '@/components/header';
import Expertise from '@/components/expertise';
import Footer from '@/components/footer';
import Publications from '@/components/publications';
import Reveals from '@/components/reveals';
import Team from '@/components/team';
import { useContent, useLanguage } from '@/lib/i18n';
export default function Home() {
  const t = useContent();
  const { lang } = useLanguage();
  return (
    <>
      <Header />
      <main id="main">
        <CinematicHero />
        <section className="manifesto section-pad" id="hakkimizda">
          <div className="eyebrow">{t.manifesto.eyebrow}</div>
          <div className="manifesto-grid reveal">
            <h2>
              {t.manifesto.heading[0]}
              <br />
              <em>{t.manifesto.heading[1]}</em>
            </h2>
            <div>
              {t.manifesto.paragraphs.map((p, i) => (
                <p key={i} style={i > 0 ? { marginTop: 20 } : undefined}>
                  {p}
                </p>
              ))}
            </div>
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
        <section className="team section-pad" id="ekip">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">{t.team.eyebrow}</p>
              <h2>
                {t.team.heading[0]}
                <br />
                <em>{t.team.heading[1]}</em>
              </h2>
            </div>
          </div>
          <Team />
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
            <a className="text-link" href="mailto:omerfarukaskn@gmail.com">
              {t.contact.linkText} <span>↗</span>
            </a>
          </div>
          <div className="contact-details">
            <p>
              {t.contact.officeName}
              <br />
              {t.contact.officeTagline}
            </p>
            <div className="contact-people">
              {t.contact.persons.map((p) => (
                <div className="contact-person" key={p.email}>
                  <span className="contact-name">{p.name}</span>
                  <a className="contact-email" href={'mailto:' + p.email}>
                    {p.email.split('@')[0]}@
                    <wbr />
                    {p.email.split('@')[1]} ↗
                  </a>
                  <a
                    className="contact-email"
                    href={
                      'tel:' + p.phone.replace(/\s/g, '').replace(/^0/, '+90')
                    }
                  >
                    {p.phone} ↗
                  </a>
                </div>
              ))}
            </div>
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
          <div className="contact-map reveal">
            <iframe
              title={t.contact.mapTitle}
              src={
                'https://maps.google.com/maps?q=' +
                encodeURIComponent(t.contact.mapQuery) +
                '&hl=' +
                lang +
                '&z=16&output=embed'
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
            />
            <a
              className="contact-map-link"
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(t.contact.mapQuery)
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
