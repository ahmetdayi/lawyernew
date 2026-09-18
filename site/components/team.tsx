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
export default function Team() {
  const t = useContent();
  return (
    <div className="team-grid">
      {t.team.members.map((m, i) => (
        <Dialog key={i}>
          <DialogTrigger className="team-card reveal">
            <div className="team-portrait">
              <img src={m.photo} alt={m.name} loading="lazy" />
              <small>{t.team.brandMark}</small>
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <span aria-hidden="true">↗</span>
            </div>
            <p className="team-role">{m.role}</p>
            <p className="team-bar">{m.bar}</p>
            <p className="team-cta">{t.team.cta}</p>
          </DialogTrigger>
          <DialogContent className="article-dialog" showCloseButton={false}>
            <DialogClose className="article-close" aria-label={t.common.close}>
              {t.common.close}
            </DialogClose>
            <span className="eyebrow">{m.role.toUpperCase()}</span>
            <DialogTitle>{m.name}</DialogTitle>
            <DialogDescription>{m.intro}</DialogDescription>
            <div className="article-body">
              {m.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
