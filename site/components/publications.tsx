'use client';
import { useContent } from '@/lib/i18n';
export default function Publications() {
  const t = useContent();
  return (
    <section className="publications section-pad" id="yayinlar">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">{t.publications.eyebrow}</p>
          <h2>
            <em>{t.publications.heading}</em>
          </h2>
        </div>
        <p>{t.publications.intro}</p>
      </div>
      <div className="publication-list">
        {t.publications.articles.map((a) => (
          <a
            className="publication-row"
            href={'/yayinlar/' + a.slug}
            key={a.slug}
          >
            <span className="category">{a.category}</span>
            <h3>{a.title}</h3>
            <span className="read-time">{a.time}</span>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
