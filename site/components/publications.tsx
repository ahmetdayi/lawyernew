'use client';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
const articles = [
  {
    category: 'MİRAS HUKUKU',
    title: 'Miras Hukuku Nedir?',
    time: '4 dk okuma',
    intro:
      'Miras hukuku, bir kişinin vefatıyla birlikte malvarlığının, haklarının ve borçlarının mirasçılarına nasıl geçeceğini düzenleyen hukuk dalıdır.',
    paragraphs: [
      'Mirasın kimlere ve hangi oranlarda kalacağı, mirasçıların hakları, vasiyetname, mirasın paylaşılması ve mirasçılar arasındaki uyuşmazlıklar bu alanın temel konuları arasında yer alır.',
      'Mirasçılık durumunun belirlenmesi bakımından mirasçılık belgesi (veraset ilamı) önemli bir belgedir. Bu belge, kimlerin mirasçı olduğunu ve miras paylarını göstermektedir. Birden fazla mirasçının bulunması halinde tereke, mirasçılar arasında paylaşılabilir. Paylaşım sırasında taşınmazlar, banka hesapları, şirket payları, araçlar ve diğer malvarlığı unsurlarının hukuki durumunun ayrı ayrı değerlendirilmesi gerekebilir.',
      'Mirasçılar arasında anlaşma sağlanamadığında ise mirasın paylaşılmasına ilişkin hukuki yollar gündeme gelebilir. Miras bırakanın malvarlığı üzerindeki tasarruf özgürlüğü sınırsız değildir. Kanunda belirlenen koşullar altında bazı mirasçıların saklı pay hakkı bulunmaktadır.',
      'Miras yalnızca malvarlığından değil, belirli durumlarda borçlardan da oluşabilir. Bu nedenle mirasçıların, mirasbırakanın borçları ve terekenin genel durumu hakkında bilgi sahibi olması önemlidir. Mirasın reddi konusunda kanunda öngörülen süreler ve usuller bulunmaktadır. Özellikle mirasın borca batık olabileceği durumlarda, sürelere dikkat edilerek hukuki değerlendirme yapılması gerekir.',
      'Bir taşınır veya taşınmaz üzerinde birden fazla kişinin birlikte hak sahibi olması hâlinde, ortaklar arasındaki ortaklık her zaman anlaşma yoluyla sona erdirilemeyebilir. Bu durumda ortaklardan birinin başvurabileceği hukuki yollardan biri ortaklığın giderilmesi davasıdır. Ortaklığın giderilmesi davası, paylı veya elbirliği mülkiyetine konu olan mal üzerindeki ortaklığın sona erdirilmesini ve ortakların kendi paylarına düşen değere ulaşmasını amaçlar.',
      'Ortaklığın giderilmesi, öncelikle ortaklar arasında anlaşma sağlanarak gerçekleştirilebilir. Anlaşma mümkün olmadığında ise mahkeme yoluna başvurulabilir. Mahkeme, somut olayın ve malın niteliğinin özelliklerine göre ortaklığın aynen taksim yoluyla veya satış suretiyle giderilmesine karar verebilir. Dava sürecinde taşınmazın niteliği, ortakların payları, taşınmazın bölünebilir olup olmadığı ve ekonomik değerinin korunup korunamayacağı gibi birçok husus değerlendirilir.',
      'Özellikle taşınmazın satışına karar verilmesi halinde, satışın gerçekleştirilmesi ve satış bedelinin ortaklara payları oranında dağıtılması sürecin önemli aşamalarındandır.',
    ],
  },
  {
    category: 'KAMULAŞTIRMA HUKUKU',
    title: 'Kamulaştırma Hukuku Nedir?',
    time: '7 dk okuma',
    intro:
      'Kamulaştırma hukuku, devletin veya kamu tüzel kişilerinin kamu yararı amacıyla özel mülkiyete konu taşınmazları, bedelini ödemek suretiyle mülkiyetine geçirmesini düzenleyen hukuk dalıdır.',
    paragraphs: [
      "Özellikle yol, hastane, okul, enerji hattı, kentsel dönüşüm ve altyapı projelerinde sıkça karşılaşılan kamulaştırma işlemleri, bireylerin mülkiyet hakkını doğrudan etkilediğinden büyük önem taşımaktadır. Türkiye'de kamulaştırma işlemleri başta Anayasa'nın 46. maddesi ile 2942 sayılı Kamulaştırma Kanunu kapsamında yürütülmektedir.",
      "Kamulaştırmanın Hukuki Dayanağı: Anayasa'ya göre devlet, kamu yararının gerekli kıldığı durumlarda özel mülkiyette bulunan taşınmazları kamulaştırabilir. Ancak bu yetkinin kullanılabilmesi için belirli şartların eksiksiz yerine getirilmesi gerekir. Kamulaştırma işlemleri idarenin tek taraflı işlemleri arasında yer almakla birlikte, mülkiyet hakkına müdahale niteliğinde olduğundan sıkı yargısal denetime tabidir.",
      'Kamulaştırma Şartları Nelerdir?: Bir taşınmazın hukuka uygun şekilde kamulaştırılabilmesi için şu şartların bulunması gerekir: kamu yararı kararının alınmış olması, kamulaştırma işleminin yetkili idare tarafından gerçekleştirilmesi, taşınmaz bedelinin gerçek değer üzerinden belirlenmesi, bedelin hak sahibine ödenmesi ve kanunda öngörülen usul ile prosedürlere uygun hareket edilmesidir. Bu şartlardan herhangi birinin eksik olması durumunda kamulaştırma işleminin iptali gündeme gelebilir. Bu nedenle süreçlerin profesyonel hukuki destek ile yürütülmesi önem taşımaktadır.',
      "Kamulaştırma Süreci Nasıl İşler?: Kamulaştırma süreci genel olarak şu aşamalardan oluşmaktadır: kamu yararı kararının ilgili idare tarafından alınması; kamulaştırılacak taşınmazın tespit edilerek tapu kayıtlarının incelenmesi; idare tarafından taşınmazın değerinin belirlenmesi ve malik ile satın alma görüşmelerinin yapılması; tarafların anlaşamaması halinde idarenin Asliye Hukuk Mahkemesi'nde bedel tespiti ve tescil davası açması; ve mahkemece belirlenen bedelin ödenmesiyle taşınmazın idare adına tescil edilmesi.",
      'Acele Kamulaştırma Nedir?: Acele kamulaştırma, kamu yararının gecikmeye tahammül edemeyeceği durumlarda uygulanan istisnai bir kamulaştırma yöntemidir. Özellikle enerji projeleri, afet durumları ve büyük altyapı yatırımlarında gündeme gelir. Bu yöntemde idare, mahkeme kararıyla taşınmaza hızlı şekilde el koyabilmektedir. Ancak acele kamulaştırma işlemleri de yargı denetimine açıktır ve taşınmaz maliklerinin dava açma hakkı bulunmaktadır.',
      'Kamulaştırmasız El Atma Davaları: İdarenin herhangi bir kamulaştırma işlemi gerçekleştirmeksizin taşınmaza fiilen müdahale etmesi durumunda "kamulaştırmasız el atma" söz konusu olur. Bu durumda taşınmaz sahibi tazminat davası, bedel talebi veya müdahalenin önlenmesi davası gibi hukuki yollara başvurabilmektedir. Kamulaştırmasız el atma davaları, uygulamada en sık karşılaşılan idare hukuku uyuşmazlıkları arasında yer almaktadır.',
      'Kamulaştırma Davalarında Hukuki Destek Neden Önemlidir?: Kamulaştırma işlemleri teknik ve hukuki açıdan karmaşık süreçler içermektedir. Taşınmazın gerçek değerinin belirlenmesi, usulsüz işlemlerin tespiti ve hak kayıplarının önlenmesi açısından sürecin uzman bir avukat tarafından takip edilmesi büyük önem taşır. Özellikle bedel artırımı davaları, kamulaştırma iptal davaları, acele kamulaştırma işlemleri ve kamulaştırmasız el atma davaları alanlarında profesyonel hukuki destek alınması, mülkiyet hakkının etkin şekilde korunmasını sağlar.',
      'Sonuç: Kamulaştırma hukuku, kamu yararı ile bireylerin mülkiyet hakkı arasında denge kurulmasını amaçlayan önemli bir hukuk alanıdır. Kamulaştırma sürecinde yapılan işlemlerin hukuka uygunluğu, taşınmaz maliklerinin hak kaybına uğramaması açısından büyük önem taşımaktadır. Bu nedenle kamulaştırma sürecine ilişkin her aşamanın dikkatle değerlendirilmesi ve gerektiğinde uzman hukuki destek alınması gerekmektedir.',
    ],
  },
  {
    category: 'YABANCILAR HUKUKU',
    title: 'Yabancılar Hukuku Nedir?',
    time: '6 dk okuma',
    intro:
      'Yabancılar hukuku, bir devletin vatandaşı olmayan kişilerin ülkedeki haklarını, yükümlülüklerini ve hukuki statülerini düzenleyen hukuk dalıdır.',
    paragraphs: [
      "Türkiye'de yabancılar hukuku; ikamet izni, çalışma izni, sınır dışı işlemleri, vatandaşlık başvuruları ve uluslararası koruma süreçleri gibi birçok önemli konuyu kapsamaktadır. Son yıllarda Türkiye'de yaşayan yabancı sayısındaki artış, yabancılar hukukuna ilişkin hukuki danışmanlık ihtiyacını da önemli ölçüde artırmıştır. Özellikle başvuru süreçlerinde yapılan eksik veya hatalı işlemler, ciddi hak kayıplarına neden olabilmektedir.",
      "Türkiye'de Yabancılar Hukukunun Kapsamı: Türkiye'de yabancılar hukukuna ilişkin temel düzenlemeler başta 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu olmak üzere çeşitli mevzuat hükümleri kapsamında düzenlenmektedir. Bu kapsamda yabancıların Türkiye'ye giriş ve çıkış işlemleri, ikamet izinleri, çalışma izinleri, sınır dışı kararları, tahdit kodları, vatandaşlık başvuruları ile uluslararası koruma ve geçici koruma işlemleri hukuki denetime tabi tutulmaktadır.",
      "Çalışma İzni Başvuruları: Türkiye'de çalışmak isteyen yabancıların çalışma izni alması zorunludur. Çalışma izni başvuruları Çalışma ve Sosyal Güvenlik Bakanlığı nezdinde yürütülmektedir. Eksik evrak, usule aykırı başvuru veya şirket kriterlerinin sağlanmaması halinde başvurular reddedilebilmektedir. Bu nedenle çalışma izni süreçlerinin profesyonel hukuki destek ile yürütülmesi önem taşımaktadır.",
      'Deport Kararı ve Tahdit Kodları: Yabancılar hakkında çeşitli nedenlerle sınır dışı (deport) kararı verilebilmektedir. Ayrıca kişilere giriş yasağı anlamına gelen tahdit kodları uygulanabilmektedir. Özellikle vize ihlali, kaçak çalışma, kamu düzeni gerekçeleri veya sahte belge kullanımı gibi nedenler deport sürecine yol açabilmektedir. Ancak her deport kararı hukuka uygun olmayabilir; idari işlemlere karşı iptal davası açılması ve yürütmenin durdurulması talep edilmesi mümkündür.',
      "Türk Vatandaşlığı Başvurusu: Türkiye'de belirli şartları taşıyan yabancılar Türk vatandaşlığına başvurabilmektedir. Vatandaşlık başvuruları yatırım yoluyla, evlilik yoluyla veya istisnai vatandaşlık kapsamında gerçekleştirilebilmektedir. Başvuru sürecinde eksik belge sunulması veya güvenlik soruşturmaları nedeniyle işlemler uzayabilmektedir. Bu nedenle hukuki sürecin dikkatli şekilde avukat eşliğinde takip edilmesi gerekmektedir.",
      'Yabancılar Hukukunda Hukuki Destek Neden Önemlidir?: Yabancılar hukukunda yapılan usul hataları; ikamet izni reddi, sınır dışı kararı veya giriş yasağı gibi ciddi sonuçlara neden olabilmektedir. Bu nedenle başvuru ve dava süreçlerinin alanında uzman bir avukat desteğiyle yürütülmesi, hak kayıplarının önlenmesi açısından büyük önem taşımaktadır. Özellikle idari başvuruların hazırlanması, dava süreçlerinin yürütülmesi ve itiraz mekanizmalarının doğru kullanılması profesyonel hukuki bilgi gerektirmektedir.',
    ],
  },
  {
    category: 'GAYRİMENKUL HUKUKU',
    title: 'Gayrimenkul Hukuku Nedir?',
    time: '4 dk okuma',
    intro:
      'Gayrimenkuller; satın alma, satış, kiralama, ortaklık, miras, tapu işlemleri ve uyuşmazlıklar bakımından önemli hukuki sonuçlar doğurabilen varlıklardır.',
    paragraphs: [
      'Bu nedenle bir taşınmaza ilişkin işlem yapılmadan önce, taşınmazın hukuki durumunun ve tarafların haklarının dikkatle değerlendirilmesi büyük önem taşır. Gayrimenkul hukuku; taşınmazların mülkiyetine, kullanımına ve devrine ilişkin işlemler ile bu işlemlerden doğan uyuşmazlıkları kapsayan geniş bir hukuk alanıdır.',
      'Gayrimenkul hukukunda taşınmazın mülkiyeti ve tapu kayıtları, satış ve devir işlemleri, kira ilişkileri, ortak mülkiyet, kat mülkiyeti, imar uygulamaları ve taşınmazlardan kaynaklanan uyuşmazlıklar sıklıkla gündeme gelir. Tapu kaydının incelenmesi, taşınmaz üzerindeki ipotek, haciz, intifa gibi hak ve kısıtlamaların belirlenmesi ve satış işleminin hukuki açıdan değerlendirilmesi, taşınmaz işlemlerinin güvenli şekilde gerçekleştirilmesi açısından önemlidir.',
      'Bir taşınmazın birden fazla kişiye ait olması halinde ortakların taşınmazı kullanımı, yönetimi veya paylaşımı konusunda anlaşmazlıklar ortaya çıkabilir. Bu gibi durumlarda ortaklığın giderilmesi, tapu uyuşmazlıkları veya mülkiyete ilişkin diğer hukuki süreçler gündeme gelebilir.',
      'Kira ve Tahliye Uyuşmazlıkları: Gayrimenkul hukukunun önemli alanlarından biri de kira ilişkileridir. Kira bedeli, kira sözleşmesinin sona ermesi, tahliye, kira alacakları ve tarafların sözleşmeden doğan hak ve yükümlülükleri çeşitli uyuşmazlıklara konu olabilir.',
      'Kiralananın tahliyesi, kira ilişkisinin sona erdirilmesiyle ilgili olarak en sık karşılaşılan hukuki süreçlerden biridir. Kiracının kira bedelini ödememesi, kira sözleşmesinin süresinin sona ermesi veya kanunda öngörülen diğer tahliye sebeplerinin ortaya çıkması halinde tahliye süreci gündeme gelebilir. Tahliye sürecinde, tahliye sebebinin doğru belirlenmesi ve kanunda öngörülen usul ile sürelere uyulması büyük önem taşır.',
    ],
  },
  {
    category: 'AİLE HUKUKU',
    title: 'Aile Hukuku Nedir?',
    time: '4 dk okuma',
    intro:
      'Aile hukuku; evlilik, boşanma, nafaka, velayet, mal paylaşımı ve aile bireyleri arasındaki hukuki ilişkileri düzenleyen hukuk dalıdır.',
    paragraphs: [
      'Aile ilişkilerinin doğası gereği, bu alandaki uyuşmazlıkların hem hukuki hem de kişisel açıdan dikkatle ele alınması gerekir.',
      'Boşanma Süreci: Evlilik birliğinin devamının mümkün olmadığı durumlarda taraflar boşanma yoluna başvurabilir. Boşanmanın çekişmeli veya anlaşmalı olması, sürecin nasıl ilerleyeceğini ve tarafların yerine getirmesi gereken işlemleri etkileyebilir. Boşanma sürecinde yalnızca evliliğin sona ermesi değil; nafaka, velayet, kişisel ilişki, maddi ve manevi tazminat ile mal paylaşımı gibi birçok konu da gündeme gelebilir.',
      'Velayet ve Çocuğun Hakları: Boşanma veya ayrılık halinde çocukların velayetinin hangi ebeveyne bırakılacağı değerlendirilirken temel ölçüt çocuğun üstün yararıdır. Çocuğun yaşı, ihtiyaçları, tarafların yaşam koşulları ve diğer somut şartlar birlikte değerlendirilir. Velayet hakkı kendisine bırakılmayan ebeveyn ile çocuk arasında kişisel ilişki kurulmasına ilişkin düzenlemeler de yapılabilir.',
      'Nafaka: Aile hukukunda nafaka, tarafların ve çocukların ekonomik ihtiyaçlarının karşılanmasına yönelik önemli bir hukuki kurumdur. Tedbir, iştirak, yoksulluk ve yardım nafakası farklı koşullarda gündeme gelebilir. Nafaka taleplerinin değerlendirilmesinde tarafların ekonomik ve sosyal durumları ile somut olayın özellikleri dikkate alınır.',
      'Mal Paylaşımı: Evliliğin sona ermesiyle birlikte eşler arasında mal rejiminin tasfiyesi gündeme gelebilir. Evlilik sırasında edinilen malların hangi mal rejimine tabi olduğu ve eşlerin bu mallar üzerindeki hakları somut olayın koşullarına göre belirlenir. Mal paylaşımına ilişkin uyuşmazlıklarda taşınmazlar, araçlar, banka hesapları ve diğer malvarlığı unsurlarının hukuki durumunun ayrı ayrı değerlendirilmesi gerekebilir.',
    ],
  },
  {
    category: 'CEZA HUKUKU',
    title: 'Ceza Hukuku Nedir?',
    time: '3 dk okuma',
    intro:
      'Ceza hukuku, toplum düzenini bozan ve suç teşkil eden fiilleri belirleyen, bu fiillere uygulanacak yaptırımları (ceza ve güvenlik tedbirleri) düzenleyen kamu hukuku dalıdır.',
    paragraphs: [
      'Temel amacı; kamu düzenini korumak, suç işlenmesini önlemek ve kişilerin hak ve özgürlüklerini güvence altına almaktır.',
      'Ceza yargılaması iki ana evreden oluşur. Soruşturma Evresi: Suç şüphesinin öğrenilmesiyle başlar. Cumhuriyet savcısının önderliğinde kolluk kuvvetleri (polis/jandarma) delilleri toplar. Şüphe yeterli seviyeye ulaşırsa iddianame düzenlenir; aksi halde takipsizlik (KYOK) kararı verilir.',
      'Kovuşturma Evresi: İddianamenin mahkeme tarafından kabul edilmesiyle başlar. Şüpheli artık "sanık" sıfatını alır. Yargılama yapılır, deliller tartışılır ve mahkeme bir hüküm (beraat, ceza vb.) verir.',
      "Türk Ceza Hukuku'nda yaptırımlar Hapis Cezası ve Adli Para Cezası olmak üzere iki ana gruba ayrılır. Güvenlik Tedbirleri: Belli haklardan yoksun bırakılma, çocuklara özgü tedbirler veya akıl hastalarına özgü tedavi süreçleri gibi amaç odaklı yaptırımlardır.",
    ],
  },
  {
    category: 'İNSAN HAKLARI HUKUKU',
    title: 'AİHM Başvuruları ve AİHM Kararları Sonrasında Yeniden Yargılama',
    time: '4 dk okuma',
    intro:
      "Avrupa İnsan Hakları Mahkemesi'ne (AİHM) bireysel başvuru, Avrupa İnsan Hakları Sözleşmesi (AİHS) ile güvence altına alınan temel hak ve özgürlüklerin ulusal hukukta etkili biçimde korunamadığı durumlarda başvurulabilecek uluslararası nitelikte bir insan hakları denetim mekanizmasıdır.",
    paragraphs: [
      "Bununla birlikte AİHM, ulusal mahkemelerin üzerinde yer alan bir temyiz veya istinaf mercii değildir. Mahkemenin temel işlevi, taraf devletlerin Sözleşme'den doğan yükümlülüklerine uyup uymadığını denetlemektir.",
      "Bu nedenle AİHM'e başvuru sürecinin en önemli özelliklerinden biri, başvurucunun öncelikle iç hukuk yollarını tüketmiş olmasıdır. AİHS m. 35 uyarınca Mahkeme, kural olarak ancak iç hukuk yollarının tüketilmesinden sonra yapılan başvuruları inceleyebilir. AİHM'in güncel kabul edilebilirlik rehberinde de iç hukuk yollarının tüketilmesi ilkesinin, ulusal makamların ileri sürülen ihlali önleme veya giderme imkânına sahip olmasını sağlamak amacı taşıdığı belirtilmektedir.",
      'Bu sistemin doğal sonucu olarak AİHM başvurusu ile AİHM kararı sonrasında gündeme gelen yeniden yargılama kurumu birbirinden ayrılmalıdır. İlkinde amaç, uluslararası düzeyde ihlal tespitinin sağlanması iken; ikincisinde amaç, tespit edilen ihlalin ulusal hukuk düzeninde ve somut başvurucu bakımından giderilmesidir.',
      'Sonuç olarak AİHM başvurusu, yalnızca uluslararası düzeyde bir ihlal tespiti elde etme aracı olarak değil; gerekli koşulların oluşması halinde, ulusal hukukta ihlalin sonuçlarının ortadan kaldırılmasına yönelik bir sürecin başlangıcı olarak da değerlendirilmelidir. Özellikle ceza yargılamalarında AİHM kararının gerekçesi ile CMK m. 311 hükmü arasındaki bağlantının doğru kurulması, yeniden yargılama talebinin başarı şansını doğrudan etkileyen en önemli hukuki unsurlardan biridir.',
    ],
  },
];
export default function Publications() {
  return (
    <section className="publications section-pad" id="yayinlar">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">05 / YAYINLAR</p>
          <h2>
            <em>Hukuka dair.</em>
          </h2>
        </div>
        <p>Hukuk dünyasına dair yazılar & bilgiler</p>
      </div>
      <div className="publication-list">
        {articles.map((a) => (
          <Dialog key={a.title}>
            <DialogTrigger className="publication-row">
              <span className="category">{a.category}</span>
              <h3>{a.title}</h3>
              <span className="read-time">{a.time}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </DialogTrigger>
            <DialogContent className="article-dialog" showCloseButton={false}>
              <DialogClose className="article-close" aria-label="Yazıyı kapat">
                Kapat ×
              </DialogClose>
              <span className="eyebrow">{a.category}</span>
              <DialogTitle>{a.title}</DialogTitle>
              <DialogDescription>{a.intro}</DialogDescription>
              <div className="article-body">
                {a.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="article-note">
                Bu metin konsept site için hazırlanmış örnek yayın içeriğidir.
                Somut bir hukuki değerlendirme içermez.
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
