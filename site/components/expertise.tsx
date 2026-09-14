'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
const areas = [
  [
    'Miras Hukuku',
    'Veraset İlamı, Vasiyetname, Mirastan Feragat, Reddi Miras, Ortaklığın Giderilmesi (İzale-i Şüyu) Davası ve benzeri konularda hukuki destek.',
  ],
  [
    'Kamulaştırma Hukuku',
    'Kamulaştırma Bedelinin Tespiti ve Tescili, Kamulaştırma İşleminin İptali, Kamulaştırmasız El Atma ve Acele Kamulaştırma Davası gibi süreçlerde hukuki temsil.',
  ],
  [
    'Yabancılar Hukuku',
    'Vatandaşlık Başvuruları, İkamet-Çalışma İzni, Sınırdışı Kararları, Uluslararası ve Geçici Koruma gibi işlemlerde danışmanlık.',
  ],
  [
    'Gayrimenkul Hukuku',
    'Taşınmaz işlemleri, kira ilişkileri ve gayrimenkul projelerinde sözleşme ve uyuşmazlık yönetimi.',
  ],
  [
    'Ceza Hukuku',
    'Soruşturma ve kovuşturma süreçlerinin her aşamasında titiz dosya incelemesi ve savunma hazırlığı.',
  ],
  [
    'Aile Hukuku',
    'Boşanma, Nafaka, Mal Rejimi Tasfiyesi, Velayet ve Soybağı gibi davalarda hukuki destek.',
  ],
  [
    'Ticaret Hukuku ve Şirketler Hukuku',
    'Ticari ilişkilerin kuruluşundan uyuşmazlıkların çözümüne kadar, işinizin dinamiklerini gözeten hukuki destek. Şirket kuruluşu, kurumsal yönetim, ortaklık ilişkileri ve sözleşme süreçlerinde bütüncül danışmanlık.',
  ],
  [
    'İş Hukuku',
    'İşveren ve çalışan ilişkileri, iş sözleşmeleri ve iş uyuşmazlıklarında önleyici hukuki yaklaşım.',
  ],
];
export default function Expertise() {
  return (
    <section className="expertise section-pad" id="uzmanlik">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">02 / ÇALIŞMA ALANLARIMIZ</p>
          <h2>
            Farklı meseleler.
            <br />
            <em>Tek bir titizlik.</em>
          </h2>
        </div>
        <p>
          İhtiyacınızı anlıyor, her alanda aynı özeni ve stratejik bakışı
          sunuyoruz.
        </p>
      </div>
      <Accordion className="expertise-list" multiple>
        {areas.map(([title, description], i) => (
          <AccordionItem className="expertise-item" key={title} value={title}>
            <AccordionTrigger className="expertise-trigger">
              <span className="expertise-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="expertise-title">{title}</span>
            </AccordionTrigger>
            <AccordionContent className="expertise-description">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
