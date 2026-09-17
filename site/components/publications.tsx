'use client';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
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
        {t.publications.articles.map((a, i) => (
          <Dialog key={i}>
            <DialogTrigger className="publication-row">
              <span className="category">{a.category}</span>
              <h3>{a.title}</h3>
              <span className="read-time">{a.time}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </DialogTrigger>
            <DialogContent className="article-dialog" showCloseButton={false}>
              <DialogClose
                className="article-close"
                aria-label={t.common.close}
              >
                {t.common.close}
              </DialogClose>
              <span className="eyebrow">{a.category}</span>
              <DialogTitle>{a.title}</DialogTitle>
              <DialogDescription>{a.intro}</DialogDescription>
              <div className="article-body">
                {a.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="article-note">{t.publications.note}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
