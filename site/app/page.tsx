import CinematicHero from '@/components/cinematic-hero';
import Header from '@/components/header';
import Expertise from '@/components/expertise';
import Publications from '@/components/publications';
import Reveals from '@/components/reveals';
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <CinematicHero />
        <section className="manifesto section-pad" id="hakkimizda">
          <div className="eyebrow">01 / AŞKIN HUKUK</div>
          <div className="manifesto-grid reveal">
            <h2>
              Bugünün hukuki kararları,
              <br />
              <em>yarının sonuçlarını belirler.</em>
            </h2>
            <div>
              <p>
                Av. Ömer Faruk Aşkın, Bursa ilinde doğmuş olup ilköğretimini
                burada tamamlamıştır. Lise eğitimini Bilecik Anadolu
                Lisesi&rsquo;nde tamamladıktan sonra Kırıkkale Üniversitesi
                Hukuk Fakültesi&rsquo;nde başladığı hukuk eğitimini başarıyla
                tamamlayarak 2023 yılında mezun olmuştur.
              </p>
              <p style={{ marginTop: 20 }}>
                Avukatlık stajını Eskişehir&rsquo;de tamamlamıştır. Stajının
                ardından kurduğu hukuk bürosuyla 2024 yılından beri
                Eskişehir&rsquo;de serbest avukatlık yapmaktadır.
              </p>
            </div>
          </div>
        </section>
        <Expertise />
        <section className="approach section-pad" id="yaklasim">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">03 / YAKLAŞIMIMIZ</p>
              <h2>
                Doğru sorular.
                <br />
                <em>Sağlam bir yol haritası.</em>
              </h2>
            </div>
            <p>Birlikte atılan her adımda açıklık, özen ve kararlılık.</p>
          </div>
          <div className="approach-grid">
            {[
              [
                '01',
                'Analiz',
                'Her hukuki süreç, detaylı bir inceleme ve doğru teşhisle başlar.',
                'Uyuşmazlığın tüm boyutlarını, risklerini ve sunduğu fırsatları somut veriler ve güncel emsal kararlar ışığında titizlikle inceliyoruz.',
              ],
              [
                '02',
                'Strateji',
                'Doğru adımlar, hedefe ulaştıran bir planla atılır.',
                'Analiz aşamasında elde ettiğimiz veriler doğrultusunda, müvekkillerimizin hedeflerine en hızlı ve en güvenli yoldan ulaşmasını sağlayacak özel hukuki yol haritaları çiziyoruz.',
              ],
              [
                '03',
                'Temsil',
                'Müvekkillerimizin haklarını, kararlılık ve etik ilkelere bağlılıkla savunuyoruz.',
                'Belirlediğimiz stratejiyi müzakere masasında ve yargı mercileri önünde yetkinlikle uygulayarak haklarınızı en üst düzeyde koruyoruz.',
              ],
            ].map(([n, title, quote, body]) => (
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
              <p className="eyebrow">04 / EKİBİMİZ</p>
              <h2>
                Ortak bir ilke.
                <br />
                <em>Birbirini tamamlayan bakışlar.</em>
              </h2>
            </div>
          </div>
          <div className="team-grid">
            {[
              [
                '/team/omer-faruk-askin.jpg',
                'Av. Ömer Faruk Aşkın',
                'Kurucu Ortak',
              ],
              [
                '/team/gulsum-burcu-ugur.jpg',
                'Av. Gülsüm Burcu Uğur',
                'Kurucu Ortak',
              ],
            ].map(([photo, name, role]) => (
              <article className="team-card reveal" key={name}>
                <div className="team-portrait">
                  <img src={photo} alt={name} loading="lazy" />
                  <small>AŞKIN / HUKUK BÜROSU</small>
                </div>
                <div className="team-info">
                  <h3>{name}</h3>
                  <span aria-hidden="true">—</span>
                </div>
                <p className="team-role">{role}</p>
              </article>
            ))}
          </div>
        </section>
        <Publications />
        <section className="contact section-pad" id="iletisim">
          <div className="reveal">
            <p className="eyebrow">06 / İLETİŞİM</p>
            <h2>
              Bir konuşmayla
              <br />
              <em>başlayalım.</em>
            </h2>
            <a
              className="text-link"
              href="mailto:omerfarukaskn@gmail.com"
            >
              Hukuki sürecinizi birlikte değerlendirelim <span>↗</span>
            </a>
          </div>
          <div className="contact-details">
            <p>
              AŞKIN HUKUK BÜROSU
              <br />
              Hukuki danışmanlık & temsil
            </p>
            <a className="contact-email" href="mailto:omerfarukaskn@gmail.com">
              omerfarukaskn@gmail.com ↗
            </a>
            <a className="contact-email" href="tel:+905466229845">
              0 546 622 98 45 ↗
            </a>
            <p className="address">
              Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76/3
              <br />
              Odunpazarı / ESKİŞEHİR
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#" aria-label="Başa dön">
            <img src="/brand/askin-hukuk-logo.png" alt="Avukat Ömer Faruk Aşkın" />
          </a>
          <div className="footer-nav">
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#uzmanlik">Çalışma Alanlarımız</a>
            <a href="#iletisim">İletişim</a>
            <a href="#">Başa dön ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Aşkın Hukuk.</p>
          <p>Hukuk · Strateji · Güven</p>
        </div>
      </footer>
      <Reveals />
    </>
  );
}
