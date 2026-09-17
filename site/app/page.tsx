'use client';
import CinematicHero from '@/components/cinematic-hero';
import Header from '@/components/header';
import Expertise from '@/components/expertise';
import Publications from '@/components/publications';
import Reveals from '@/components/reveals';
import Team from '@/components/team';
import { useContent } from '@/lib/i18n';
export default function Home() {
  const t = useContent();
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
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <a
            className="brand footer-brand"
            href="#"
            aria-label={t.footer.homeAria}
          >
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
      <Reveals />
    </>
  );
}
