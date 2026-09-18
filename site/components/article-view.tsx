'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useContent } from '@/lib/i18n';
export default function ArticleView({ slug }: { slug: string }) {
  const t = useContent();
  const a = t.publications.articles.find((x) => x.slug === slug);
  if (!a) return null;
  return (
    <div className="article-shell">
      <Header />
      <main id="main" className="article-page">
        <article className="article-page-inner">
          <a className="article-back" href="/#yayinlar">
            ← {t.publications.back}
          </a>
          <p className="eyebrow">{a.category}</p>
          <h1>{a.title}</h1>
          <p className="article-meta">{a.time}</p>
          <p className="article-lead">{a.intro}</p>
          <div className="article-body">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="article-note">{t.publications.note}</p>
          <a className="article-cta" href="/#iletisim">
            {t.contact.linkText} <span aria-hidden="true">↗</span>
          </a>
        </article>
      </main>
      <Footer />
    </div>
  );
}
