'use client';
import { useContent } from '@/lib/i18n';
export default function CinematicHero() {
  const t = useContent();
  return (
    <section className="cinematic" aria-label={t.hero.ariaLabel}>
      <div className="scene-image" />
      <div className="scene-shade" />
      <div className="hero-copy opening-copy">
        <p className="eyebrow">
          <span className="gold-line" /> {t.hero.eyebrow}
        </p>
        <h1>
          {t.hero.heading[0]}
          <br />
          <em>{t.hero.heading[1]}</em>
        </h1>
      </div>
      <div className="scene-bottom">
        <a href="#hakkimizda" className="scroll-cue">
          <span className="scroll-line" />
          <span className="scroll-label">{t.hero.scrollCue}</span>
        </a>
        <span className="scene-note">{t.hero.note}</span>
      </div>
    </section>
  );
}
