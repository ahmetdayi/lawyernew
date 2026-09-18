'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { useContent } from '@/lib/i18n';
export default function Expertise() {
  const t = useContent();
  return (
    <section className="expertise section-pad" id="uzmanlik">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">{t.expertise.eyebrow}</p>
          <h2>
            {t.expertise.heading[0]}
            <br />
            <em>{t.expertise.heading[1]}</em>
          </h2>
        </div>
        <p>{t.expertise.intro}</p>
      </div>
      <Accordion className="expertise-list" multiple>
        {t.expertise.areas.map(({ title, description }, i) => (
          <AccordionItem
            className="expertise-item"
            key={i}
            value={String(i)}
          >
            <AccordionTrigger className="expertise-trigger">
              <span className="expertise-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="expertise-title">{title}</span>
            </AccordionTrigger>
            <AccordionContent className="expertise-description" keepMounted>
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
