export type Lang = 'tr' | 'en';
interface Area {
  title: string;
  description: string;
}
interface ApproachStep {
  n: string;
  title: string;
  quote: string;
  body: string;
}
interface TeamMember {
  photo: string;
  name: string;
  role: string;
  bar: string;
  intro: string;
  paragraphs: string[];
}
interface Article {
  slug: string;
  category: string;
  title: string;
  time: string;
  intro: string;
  paragraphs: string[];
}
interface SiteContent {
  meta: { title: string; description: string; skipLink: string };
  header: {
    homeAria: string;
    nav: { label: string; id: string }[];
    menuOpen: string;
    menuClosed: string;
    mainMenuAria: string;
    contact: string;
    langLabel: string;
  };
  hero: {
    ariaLabel: string;
    eyebrow: string;
    heading: [string, string];
    scrollCue: string;
    note: string;
  };
  manifesto: {
    eyebrow: string;
    heading: [string, string];
    paragraphs: string[];
  };
  expertise: {
    eyebrow: string;
    heading: [string, string];
    intro: string;
    areas: Area[];
  };
  approach: {
    eyebrow: string;
    heading: [string, string];
    intro: string;
    steps: ApproachStep[];
  };
  team: {
    eyebrow: string;
    heading: [string, string];
    brandMark: string;
    cta: string;
    members: TeamMember[];
  };
  publications: {
    eyebrow: string;
    heading: string;
    intro: string;
    note: string;
    back: string;
    articles: Article[];
  };
  contact: {
    eyebrow: string;
    heading: [string, string];
    linkText: string;
    officeName: string;
    officeTagline: string;
    persons: { name: string; email: string; phone: string }[];
    addressLines: [string, string];
    mapQuery: string;
    mapTitle: string;
    mapOpen: string;
    kvkkLabel: string;
    kvkkHref: string;
  };
  footer: {
    homeAria: string;
    logoAlt: string;
    nav: { label: string; href: string }[];
    copyright: string;
    tagline: string;
  };
  common: { close: string };
}
export const content: Record<Lang, SiteContent> = {
  tr: {
    meta: {
      title: 'Aşkın Hukuk Bürosu | Eskişehir Avukat',
      description:
        'Eskişehir’de miras, kamulaştırma, yabancılar, gayrimenkul, ceza, aile ve iş hukuku alanlarında hukuki danışmanlık ve temsil. Aşkın Hukuk Bürosu.',
      skipLink: 'İçeriğe geç',
    },
    header: {
      homeAria: 'Aşkın Hukuk ana sayfa',
      nav: [
        { label: 'Çalışma Alanlarımız', id: 'uzmanlik' },
        { label: 'Yaklaşımımız', id: 'yaklasim' },
        { label: 'Ekibimiz', id: 'ekip' },
        { label: 'Yayınlar', id: 'yayinlar' },
      ],
      menuOpen: 'Kapat −',
      menuClosed: 'Menü +',
      mainMenuAria: 'Ana menü',
      contact: 'İletişim',
      langLabel: 'Dil seçimi',
    },
    hero: {
      ariaLabel: 'Aşkın Hukuk Bürosu',
      eyebrow: 'HUKUK · STRATEJİ · GÜVEN',
      heading: ['Adalet tesadüfe', 'bırakılmaz.'],
      scrollCue: 'Keşfetmek için kaydırın',
      note: 'HER ŞEY BİR DURUŞLA BAŞLAR.',
    },
    manifesto: {
      eyebrow: '01 / AŞKIN HUKUK',
      heading: ['Bugünün hukuki kararları,', 'yarının sonuçlarını belirler.'],
      paragraphs: [
        'Av. Ömer Faruk Aşkın, Bursa ilinde doğmuş olup ilköğretimini burada tamamlamıştır. Lise eğitimini Bilecik Anadolu Lisesi’nde tamamladıktan sonra Kırıkkale Üniversitesi Hukuk Fakültesi’nde başladığı hukuk eğitimini başarıyla tamamlayarak 2023 yılında mezun olmuştur.',
        'Avukatlık stajını Eskişehir’de tamamlamıştır. Stajının ardından kurduğu hukuk bürosuyla 2024 yılından beri Eskişehir’de serbest avukatlık yapmaktadır.',
      ],
    },
    expertise: {
      eyebrow: '02 / ÇALIŞMA ALANLARIMIZ',
      heading: ['Farklı meseleler.', 'Tek bir titizlik.'],
      intro:
        'İhtiyacınızı anlıyor, her alanda aynı özeni ve stratejik bakışı sunuyoruz.',
      areas: [
        {
          title: 'Miras Hukuku',
          description:
            'Veraset İlamı, Vasiyetname, Mirastan Feragat, Reddi Miras, Ortaklığın Giderilmesi (İzale-i Şüyu) Davası ve benzeri konularda hukuki destek.',
        },
        {
          title: 'Kamulaştırma Hukuku',
          description:
            'Kamulaştırma Bedelinin Tespiti ve Tescili, Kamulaştırma İşleminin İptali, Kamulaştırmasız El Atma ve Acele Kamulaştırma Davası gibi süreçlerde hukuki temsil.',
        },
        {
          title: 'Yabancılar Hukuku',
          description:
            'Vatandaşlık Başvuruları, İkamet-Çalışma İzni, Sınırdışı Kararları, Uluslararası ve Geçici Koruma gibi işlemlerde danışmanlık.',
        },
        {
          title: 'Gayrimenkul Hukuku',
          description:
            'Taşınmaz işlemleri, kira ilişkileri ve gayrimenkul projelerinde sözleşme ve uyuşmazlık yönetimi.',
        },
        {
          title: 'Ceza Hukuku',
          description:
            'Soruşturma ve kovuşturma süreçlerinin her aşamasında titiz dosya incelemesi ve savunma hazırlığı.',
        },
        {
          title: 'Aile Hukuku',
          description:
            'Boşanma, Nafaka, Mal Rejimi Tasfiyesi, Velayet ve Soybağı gibi davalarda hukuki destek.',
        },
        {
          title: 'Ticaret Hukuku ve Şirketler Hukuku',
          description:
            'Ticari ilişkilerin kuruluşundan uyuşmazlıkların çözümüne kadar, işinizin dinamiklerini gözeten hukuki destek. Şirket kuruluşu, kurumsal yönetim, ortaklık ilişkileri ve sözleşme süreçlerinde bütüncül danışmanlık.',
        },
        {
          title: 'İş Hukuku',
          description:
            'İşveren ve çalışan ilişkileri, iş sözleşmeleri ve iş uyuşmazlıklarında önleyici hukuki yaklaşım.',
        },
      ],
    },
    approach: {
      eyebrow: '03 / YAKLAŞIMIMIZ',
      heading: ['Doğru sorular.', 'Sağlam bir yol haritası.'],
      intro: 'Birlikte atılan her adımda açıklık, özen ve kararlılık.',
      steps: [
        {
          n: '01',
          title: 'Analiz',
          quote:
            'Her hukuki süreç, detaylı bir inceleme ve doğru teşhisle başlar.',
          body: 'Uyuşmazlığın tüm boyutlarını, risklerini ve sunduğu fırsatları somut veriler ve güncel emsal kararlar ışığında titizlikle inceliyoruz.',
        },
        {
          n: '02',
          title: 'Strateji',
          quote: 'Doğru adımlar, hedefe ulaştıran bir planla atılır.',
          body: 'Analiz aşamasında elde ettiğimiz veriler doğrultusunda, müvekkillerimizin hedeflerine en hızlı ve en güvenli yoldan ulaşmasını sağlayacak özel hukuki yol haritaları çiziyoruz.',
        },
        {
          n: '03',
          title: 'Temsil',
          quote:
            'Müvekkillerimizin haklarını, kararlılık ve etik ilkelere bağlılıkla savunuyoruz.',
          body: 'Belirlediğimiz stratejiyi müzakere masasında ve yargı mercileri önünde yetkinlikle uygulayarak haklarınızı en üst düzeyde koruyoruz.',
        },
      ],
    },
    team: {
      eyebrow: '04 / EKİBİMİZ',
      heading: ['Ortak bir ilke.', 'Birbirini tamamlayan bakışlar.'],
      brandMark: 'AŞKIN / HUKUK BÜROSU',
      cta: 'Hakkımda',
      members: [
        {
          photo: '/team/omer-faruk-askin.jpg',
          name: 'Av. Ömer Faruk Aşkın',
          role: 'Kurucu Ortak',
          bar: 'Eskişehir Barosu - 3313',
          intro:
            'Bursa doğumlu olup 2023 yılında hukuk eğitimini tamamlamış, 2024 yılından beri Eskişehir’de serbest avukatlık yapmaktadır.',
          paragraphs: [
            'Av. Ömer Faruk Aşkın, Bursa ilinde doğmuş olup ilköğretimini burada tamamlamıştır. Lise eğitimini Bilecik Anadolu Lisesi’nde tamamladıktan sonra Kırıkkale Üniversitesi Hukuk Fakültesi’nde başladığı hukuk eğitimini başarıyla tamamlayarak 2023 yılında mezun olmuştur.',
            'Avukatlık stajını Eskişehir’de tamamlamıştır. Stajının ardından kurduğu hukuk bürosuyla 2024 yılından beri Eskişehir’de serbest avukatlık yapmaktadır.',
          ],
        },
        {
          photo: '/team/gulsum-burcu-ugur.jpg',
          name: 'Av. Gülsüm Burcu Uğur',
          role: 'Kurucu Ortak',
          bar: 'Eskişehir Barosu - 3352',
          intro:
            'Eskişehir Barosu’na kayıtlı olarak serbest avukatlık faaliyetini sürdürmekte olup, 2025 yılından bu yana kendi hukuk ofisinde müvekkillerine hizmet vermektedir.',
          paragraphs: [
            'Avukat Gülsüm Burcu Uğur, Eskişehir Barosu’na kayıtlı olarak serbest avukatlık faaliyetini sürdürmekte olup, 2025 yılından bu yana kendi hukuk ofisinde müvekkillerine hizmet vermektedir. Çalışmalarını; stratejik yaklaşım, titiz analiz ve sonuç odaklılık ilkeleri doğrultusunda, her dosyanın özgün yapısına uygun şekilde yürütmektedir.',
            'Lisans eğitimini %30 İngilizce eğitim dilinde Çağ Üniversitesi Hukuk Fakültesi’nde burslu olarak tamamlayan Gülsüm Burcu Uğur, akademik yolculuğunun bir bölümünü Orta Doğu Teknik Üniversitesi Eğitim Fakültesi’nde geçirmiş; üç yıllık bu sürecin ardından hukuk alanında uzmanlaşma yönünde bilinçli bir tercih yaparak eğitimine hukuk fakültesinde devam etmiştir. Bununla birlikte Ankara Üniversitesi Adalet programını; Anadolu Üniversitesi bünyesinde ise Bankacılık ve Sigortacılık ile İş Sağlığı ve Güvenliği ön lisans programlarını tamamlayarak çok disiplinli bir altyapı edinmiştir. İş Sağlığı ve Güvenliği alanında C sınıfı uzmanlık belgesine sahiptir.',
            'Meslek hayatı öncesinde, 2019–2025 yılları arasında İçişleri Bakanlığı bünyesinde, Eskişehir Valiliği’nde görev almış; bu süreçte idari yapı, kamu işleyişi ve mevzuat uygulamalarına ilişkin derinlikli bir deneyim kazanmıştır. Bu birikim, özellikle idare hukuku alanındaki çalışmalarına güçlü bir perspektif kazandırmaktadır.',
            'Faaliyet alanları; gayrimenkul hukuku, ceza hukuku, idare hukuku (özellikle kamu görevlilerine ilişkin uyuşmazlıklar), ticaret hukuku, borçlar hukuku, vergi hukuku, sosyal güvenlik hukuku ile aile ve çocuk hukukunu kapsamaktadır. Sosyal güvenlik hukuku alanında bilirkişilik temel eğitimini tamamlamış olup, nitelikli hesaplamalara dayalı teknik uzmanlık geliştirmiştir.',
            'Mesleki yaklaşımında detaycılık ve analitik derinlik esastır. Her bir uyuşmazlık, yalnızca mevzuat düzleminde değil; yargı içtihatları ve doktrinel gelişmeler ışığında bütüncül olarak ele alınmaktadır. Hukukun sürekli gelişen bir alan olduğu bilinciyle hareket edilmekte; güncel bilgiye dayalı, öngörülü ve etkili çözümler üretilmektedir.',
            'Çalışma anlayışı yalnızca sonuç odaklı bir yaklaşım ile sınırlı olmayıp; gerektiğinde dengeleyici ve uzlaşmacı yöntemleri de içeren çok katmanlı bir stratejiye dayanmaktadır. Müvekkil ilişkilerinde şeffaflık, dürüstlük ve güven temel ilkeler arasında yer almakta; süreçlere ilişkin gerçekçi değerlendirmelerle güven ilişkisi titizlikle korunmaktadır.',
            'Ulaşılabilirlik ve açık iletişim, mesleki yaklaşımın ayrılmaz bir parçasıdır. Müvekkillerin sürecin her aşamasında kendilerini güvende ve doğru şekilde yönlendirilmiş hissetmeleri hedeflenmekte; hukuki temsilin yanı sıra güvenilir bir danışmanlık anlayışı sunulmaktadır.',
            'İleri düzeyde İngilizce bilmekte olup, Almanca çalışmalarına devam etmektedir. Mesleki gelişim kapsamında; icra ve iflas hukuku, tüketici hukuku, kira hukuku, göç hukuku, iş hukuku uygulamaları, iş kazalarından doğan uyuşmazlıklar, tüketici temsil davaları, sosyal güvenlik hukuku, tapu iptal ve tescil davaları, etkili iletişim ve hukuk-bilişim alanlarında çeşitli eğitim ve sertifika programlarını tamamlamıştır.',
          ],
        },
      ],
    },
    publications: {
      eyebrow: '05 / YAYINLAR',
      heading: 'Hukuka dair.',
      intro: 'Hukuk dünyasına dair yazılar & bilgiler',
      note: 'Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; somut bir olaya ilişkin hukuki değerlendirme veya hukuki danışmanlık niteliği taşımaz.',
      back: 'Tüm yayınlar',
      articles: [
        {
          slug: 'miras-hukuku-nedir',
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
          slug: 'kamulastirma-hukuku-nedir',
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
          slug: 'yabancilar-hukuku-nedir',
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
          slug: 'gayrimenkul-hukuku-nedir',
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
          slug: 'aile-hukuku-nedir',
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
          slug: 'ceza-hukuku-nedir',
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
          slug: 'aihm-basvurulari-ve-yeniden-yargilama',
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
      ],
    },
    contact: {
      eyebrow: '06 / İLETİŞİM',
      heading: ['Bir konuşmayla', 'başlayalım.'],
      linkText: 'Hukuki sürecinizi birlikte değerlendirelim',
      officeName: 'AŞKIN HUKUK BÜROSU',
      officeTagline: 'Hukuki danışmanlık & temsil',
      persons: [
        {
          name: 'Av. Ömer Faruk Aşkın',
          email: 'omerfarukaskn@gmail.com',
          phone: '0 546 622 98 45',
        },
        {
          name: 'Av. Gülsüm Burcu Uğur',
          email: 'avgulsumburcu@gmail.com',
          phone: '0 536 270 01 50',
        },
      ],
      addressLines: [
        'Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76/3',
        'Odunpazarı / ESKİŞEHİR',
      ],
      mapQuery:
        'Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76 Odunpazarı Eskişehir',
      mapTitle: 'Büro konumu — Google Haritalar',
      mapOpen: 'Google Haritalar’da aç',
      kvkkLabel: 'KVKK Aydınlatma Metni',
      kvkkHref: 'https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-',
    },
    footer: {
      homeAria: 'Başa dön',
      logoAlt: 'Avukat Ömer Faruk Aşkın',
      nav: [
        { label: 'Hakkımızda', href: '/#hakkimizda' },
        { label: 'Çalışma Alanlarımız', href: '/#uzmanlik' },
        { label: 'İletişim', href: '/#iletisim' },
        { label: 'Başa dön ↑', href: '#' },
      ],
      copyright: '© 2026 Aşkın Hukuk.',
      tagline: 'Hukuk · Strateji · Güven',
    },
    common: { close: 'Kapat ×' },
  },
  en: {
    meta: {
      title: 'Aşkın Law Office | Attorneys in Eskişehir',
      description:
        'Legal counsel and representation in Eskişehir, Türkiye: inheritance, expropriation, foreigners’ law, real estate, criminal, family and labor law. Aşkın Law Office.',
      skipLink: 'Skip to content',
    },
    header: {
      homeAria: 'Aşkın Law homepage',
      nav: [
        { label: 'Practice Areas', id: 'uzmanlik' },
        { label: 'Our Approach', id: 'yaklasim' },
        { label: 'Our Team', id: 'ekip' },
        { label: 'Insights', id: 'yayinlar' },
      ],
      menuOpen: 'Close −',
      menuClosed: 'Menu +',
      mainMenuAria: 'Main menu',
      contact: 'Contact',
      langLabel: 'Language selection',
    },
    hero: {
      ariaLabel: 'Aşkın Law Office',
      eyebrow: 'LAW · STRATEGY · TRUST',
      heading: ['Justice is never', 'left to chance.'],
      scrollCue: 'Scroll to explore',
      note: 'IT ALL STARTS WITH TAKING A STAND.',
    },
    manifesto: {
      eyebrow: '01 / AŞKIN LAW',
      heading: ['Today’s legal decisions', 'shape tomorrow’s outcomes.'],
      paragraphs: [
        'Att. Ömer Faruk Aşkın was born in Bursa, where he completed his primary education. After finishing high school at Bilecik Anadolu High School, he pursued his legal education at Kırıkkale University Faculty of Law, graduating successfully in 2023.',
        'He completed his legal internship in Eskişehir. Since founding his own law office following his internship, he has been practicing independently in Eskişehir since 2024.',
      ],
    },
    expertise: {
      eyebrow: '02 / PRACTICE AREAS',
      heading: ['Different matters.', 'One standard of care.'],
      intro:
        'We understand your needs and bring the same care and strategic perspective to every field.',
      areas: [
        {
          title: 'Inheritance Law',
          description:
            'Legal support on certificates of inheritance, wills, waiver of inheritance, disclaimer of inheritance, partition (izale-i şüyu) actions and related matters.',
        },
        {
          title: 'Expropriation Law',
          description:
            'Legal representation in proceedings such as determination and registration of expropriation compensation, annulment of expropriation, de facto seizure, and urgent expropriation actions.',
        },
        {
          title: 'Foreigners’ Law',
          description:
            'Advisory services on citizenship applications, residence and work permits, deportation decisions, and international and temporary protection matters.',
        },
        {
          title: 'Real Estate Law',
          description:
            'Contract and dispute management in real property transactions, lease relationships, and real estate projects.',
        },
        {
          title: 'Criminal Law',
          description:
            'Meticulous case review and defense preparation at every stage of the investigation and prosecution process.',
        },
        {
          title: 'Family Law',
          description:
            'Legal support in divorce, alimony, division of marital property, custody, and parentage cases.',
        },
        {
          title: 'Commercial and Corporate Law',
          description:
            'Legal support attuned to your business dynamics, from the formation of commercial relationships through to dispute resolution. Comprehensive advisory on company formation, corporate governance, partnership relations, and contract processes.',
        },
        {
          title: 'Labor Law',
          description:
            'A preventive legal approach to employer-employee relations, employment contracts, and labor disputes.',
        },
      ],
    },
    approach: {
      eyebrow: '03 / OUR APPROACH',
      heading: ['The right questions.', 'A solid roadmap.'],
      intro: 'Clarity, care, and resolve in every step we take together.',
      steps: [
        {
          n: '01',
          title: 'Analysis',
          quote:
            'Every legal process begins with thorough review and an accurate diagnosis.',
          body: 'We meticulously examine every dimension of the dispute, along with its risks and opportunities, in light of concrete evidence and current case law.',
        },
        {
          n: '02',
          title: 'Strategy',
          quote: 'The right steps are taken with a plan that leads to the goal.',
          body: 'Based on the findings from our analysis, we design bespoke legal roadmaps that lead our clients to their goals by the fastest and safest route.',
        },
        {
          n: '03',
          title: 'Representation',
          quote:
            'We defend our clients’ rights with determination and unwavering commitment to ethical principles.',
          body: 'We competently apply the strategy we have set both at the negotiating table and before the courts, protecting your rights to the fullest extent.',
        },
      ],
    },
    team: {
      eyebrow: '04 / OUR TEAM',
      heading: ['A shared principle.', 'Complementary perspectives.'],
      brandMark: 'AŞKIN / LAW OFFICE',
      cta: 'About me',
      members: [
        {
          photo: '/team/omer-faruk-askin.jpg',
          name: 'Att. Ömer Faruk Aşkın',
          role: 'Founding Partner',
          bar: 'Eskişehir Bar Association - 3313',
          intro:
            'Born in Bursa, he completed his legal education in 2023 and has been practicing independently in Eskişehir since 2024.',
          paragraphs: [
            'Att. Ömer Faruk Aşkın was born in Bursa, where he completed his primary education. After finishing high school at Bilecik Anadolu High School, he pursued his legal education at Kırıkkale University Faculty of Law, graduating successfully in 2023.',
            'He completed his legal internship in Eskişehir. Since founding his own law office following his internship, he has been practicing independently in Eskişehir since 2024.',
          ],
        },
        {
          photo: '/team/gulsum-burcu-ugur.jpg',
          name: 'Att. Gülsüm Burcu Uğur',
          role: 'Founding Partner',
          bar: 'Eskişehir Bar Association - 3352',
          intro:
            'She is registered with the Eskişehir Bar Association and has been serving clients at her own law office since 2025.',
          paragraphs: [
            'Attorney Gülsüm Burcu Uğur is registered with the Eskişehir Bar Association and practices independently, serving clients at her own law office since 2025. She conducts her work in line with the principles of strategic thinking, meticulous analysis, and a results-oriented approach, tailored to the unique structure of each case.',
            'Gülsüm Burcu Uğur completed her undergraduate studies on a scholarship at Çağ University Faculty of Law, a program taught 30% in English. She spent part of her academic journey at the Middle East Technical University Faculty of Education; after three years there, she made a conscious decision to specialize in law and continued her education at the faculty of law. She also built a multidisciplinary foundation by completing the Justice associate degree program at Ankara University, along with associate degree programs in Banking and Insurance, and Occupational Health and Safety at Anadolu University. She holds a Class C specialist certificate in Occupational Health and Safety.',
            'Prior to her legal career, she worked at the Eskişehir Governorship under the Ministry of Interior between 2019 and 2025, gaining in-depth experience in administrative structure, public governance, and the application of legislation. This background brings a strong perspective to her work, particularly in the field of administrative law.',
            'Her practice areas include real estate law, criminal law, administrative law (particularly disputes involving public officials), commercial law, law of obligations, tax law, social security law, and family and child law. She has completed foundational training in expert witnessing in the field of social security law and has developed technical expertise based on qualified calculations.',
            'Attention to detail and analytical depth are central to her professional approach. Every dispute is handled holistically, not only at the level of legislation but also in light of judicial precedent and doctrinal developments. Acting with the awareness that law is a constantly evolving field, she produces forward-looking and effective solutions grounded in current knowledge.',
            'Her working philosophy is not limited to a results-oriented approach alone; it rests on a multi-layered strategy that, where appropriate, also incorporates balancing and conciliatory methods. Transparency, honesty, and trust are among the core principles in her client relationships, and the relationship of trust is carefully preserved through realistic assessments of each process.',
            'Accessibility and open communication are an integral part of her professional approach. The aim is for clients to feel safe and correctly guided at every stage of the process, with a reliable advisory approach offered alongside legal representation.',
            'She has an advanced level of English and continues to study German. As part of her professional development, she has completed various training and certificate programs in enforcement and bankruptcy law, consumer law, tenancy law, migration law, labor law practice, disputes arising from workplace accidents, consumer representation actions, social security law, title deed cancellation and registration actions, effective communication, and law and information technology.',
          ],
        },
      ],
    },
    publications: {
      eyebrow: '05 / INSIGHTS',
      heading: 'On the law.',
      intro: 'Articles & insights from the world of law',
      note: 'This article is provided for general information only; it is not a legal assessment of any specific matter and does not constitute legal advice.',
      back: 'All publications',
      articles: [
        {
          slug: 'miras-hukuku-nedir',
          category: 'INHERITANCE LAW',
          title: 'What Is Inheritance Law?',
          time: '4 min read',
          intro:
            'Inheritance law is the branch of law that governs how a deceased person’s assets, rights, and debts pass to their heirs.',
          paragraphs: [
            'Who inherits and in what proportions, the rights of heirs, wills, the distribution of the estate, and disputes among heirs are among the core subjects of this field.',
            'The certificate of inheritance is an important document for determining heirship status. This document shows who the heirs are and their respective shares. Where there is more than one heir, the estate may be divided among them. During distribution, the legal status of real property, bank accounts, company shares, vehicles, and other assets may need to be assessed separately.',
            'When heirs cannot reach an agreement, legal remedies concerning the distribution of the estate may come into play. The testator’s freedom to dispose of their estate is not unlimited; under conditions set out by law, certain heirs are entitled to a reserved share.',
            'An estate may consist not only of assets but, in certain cases, of debts as well. It is therefore important for heirs to be informed about the deceased’s debts and the overall state of the estate. The law sets out specific time limits and procedures for disclaiming an inheritance. Particularly where an estate may be over-indebted, a legal assessment must be made with careful attention to these deadlines.',
            'Where more than one person jointly holds rights over movable or immovable property, the co-ownership among them cannot always be terminated by agreement. In such cases, one legal remedy available to a co-owner is an action for partition. A partition action aims to terminate the co-ownership of property held in shared or joint ownership and to enable each co-owner to receive the value corresponding to their share.',
            'Partition may first be achieved through an agreement among the co-owners. Where agreement is not possible, recourse may be had to the courts. Depending on the specifics of the case and the nature of the property, the court may order partition either in kind or through sale. During the proceedings, numerous factors are assessed, including the nature of the property, the shares of the co-owners, whether the property can be divided, and whether its economic value can be preserved.',
            'Where the sale of the property is ordered, carrying out the sale and distributing the proceeds among the co-owners in proportion to their shares are key stages of the process.',
          ],
        },
        {
          slug: 'kamulastirma-hukuku-nedir',
          category: 'EXPROPRIATION LAW',
          title: 'What Is Expropriation Law?',
          time: '7 min read',
          intro:
            'Expropriation law is the branch of law that governs the process by which the state or public legal entities acquire ownership of privately owned real property for a public purpose, in exchange for payment of compensation.',
          paragraphs: [
            "Expropriation, frequently encountered in road, hospital, school, energy transmission, urban regeneration, and infrastructure projects, is of great importance as it directly affects individuals' property rights. In Turkey, expropriation proceedings are primarily carried out under Article 46 of the Constitution and Law No. 2942 on Expropriation.",
            'Legal Basis for Expropriation: Under the Constitution, the state may expropriate privately owned real property where required by the public interest. However, exercising this authority requires that certain conditions be fully satisfied. Although expropriation is a unilateral administrative act, it constitutes an interference with the right to property and is therefore subject to strict judicial review.',
            'What Are the Conditions for Expropriation?: For a property to be lawfully expropriated, the following conditions must be met: a public interest decision must have been made, the expropriation must be carried out by the competent administrative authority, the compensation must be determined at the property’s true value, the compensation must be paid to the rightful owner, and the procedures prescribed by law must be followed. If any of these conditions is missing, the expropriation may be subject to annulment. For this reason, it is important that these processes be conducted with professional legal support.',
            "How Does the Expropriation Process Work?: The expropriation process generally consists of the following stages: the relevant administrative authority adopts a public interest decision; the property to be expropriated is identified and its land registry records are examined; the administration determines the value of the property and negotiates a purchase with the owner; if the parties fail to reach an agreement, the administration files an action for determination of compensation and registration before the Civil Court of First Instance; and, upon payment of the compensation determined by the court, the property is registered in the name of the administration.",
            'What Is Urgent Expropriation?: Urgent expropriation is an exceptional method applied where the public interest cannot tolerate delay. It typically arises in energy projects, disaster situations, and major infrastructure investments. Under this method, the administration may take rapid possession of the property by court order. However, urgent expropriation is likewise subject to judicial review, and property owners retain the right to bring legal action.',
            'De Facto Seizure Actions: "De facto (unauthorized) seizure" occurs when the administration physically interferes with a property without carrying out any expropriation procedure. In such cases, the property owner may pursue legal remedies such as a compensation claim, a claim for payment, or an action to prevent the interference. De facto seizure actions are among the most commonly encountered administrative law disputes in practice.',
            'Why Is Legal Support Important in Expropriation Cases?: Expropriation proceedings involve technically and legally complex processes. Having the process followed by an expert lawyer is of great importance for determining the property’s true value, identifying procedural irregularities, and preventing loss of rights. Obtaining professional legal support, particularly in compensation-increase actions, expropriation annulment actions, urgent expropriation proceedings, and de facto seizure actions, ensures the effective protection of property rights.',
            'Conclusion: Expropriation law is an important field that seeks to strike a balance between the public interest and individuals’ property rights. The lawfulness of the actions taken during the expropriation process is of great importance in ensuring that property owners do not suffer a loss of rights. For this reason, every stage of the expropriation process should be carefully assessed, and expert legal support should be obtained where necessary.',
          ],
        },
        {
          slug: 'yabancilar-hukuku-nedir',
          category: 'FOREIGNERS’ LAW',
          title: 'What Is Foreigners’ Law?',
          time: '6 min read',
          intro:
            'Foreigners’ law is the branch of law that governs the rights, obligations, and legal status within a country of persons who are not citizens of that state.',
          paragraphs: [
            "In Turkey, foreigners' law covers many important matters such as residence permits, work permits, deportation procedures, citizenship applications, and international protection processes. The rise in recent years in the number of foreign nationals living in Turkey has significantly increased the need for legal advice in this field. Incomplete or erroneous actions during application processes, in particular, can lead to serious loss of rights.",
            "Scope of Foreigners' Law in Turkey: The core rules governing foreigners' law in Turkey are set out primarily in Law No. 6458 on Foreigners and International Protection, along with various other legislative provisions. Within this framework, foreign nationals' entry into and exit from Turkey, residence permits, work permits, deportation decisions, restriction codes, citizenship applications, and international and temporary protection procedures are all subject to legal oversight.",
            "Work Permit Applications: Foreign nationals wishing to work in Turkey are required to obtain a work permit. Work permit applications are processed by the Ministry of Labor and Social Security. Applications may be rejected due to missing documents, procedural non-compliance, or failure to meet company criteria. For this reason, it is important that work permit processes be conducted with professional legal support.",
            'Deportation Decisions and Restriction Codes: Foreign nationals may be subject to a deportation decision for various reasons. Restriction codes, which amount to an entry ban, may also be applied. Reasons such as visa violations, unauthorized work, grounds of public order, or the use of forged documents can, in particular, lead to deportation proceedings. However, not every deportation decision is lawful; it is possible to bring an annulment action against such administrative acts and to request a stay of execution.',
            "Turkish Citizenship Applications: Foreign nationals meeting certain conditions may apply for Turkish citizenship. Citizenship applications can be made through investment, through marriage, or under exceptional citizenship provisions. The process may be prolonged due to incomplete documentation or security background checks. For this reason, the legal process should be carefully followed with the assistance of a lawyer.",
            'Why Is Legal Support Important in Foreigners’ Law?: Procedural errors in foreigners’ law matters can lead to serious consequences such as the refusal of a residence permit, a deportation decision, or an entry ban. For this reason, having application and litigation processes carried out with the support of a lawyer specialized in this field is of great importance for preventing loss of rights. In particular, preparing administrative applications, conducting litigation, and correctly using objection mechanisms all require professional legal knowledge.',
          ],
        },
        {
          slug: 'gayrimenkul-hukuku-nedir',
          category: 'REAL ESTATE LAW',
          title: 'What Is Real Estate Law?',
          time: '4 min read',
          intro:
            'Real estate assets can give rise to significant legal consequences in terms of purchase, sale, leasing, co-ownership, inheritance, title deed transactions, and disputes.',
          paragraphs: [
            'For this reason, before carrying out any transaction relating to a property, it is of great importance to carefully assess its legal status and the rights of the parties involved. Real estate law is a broad field covering transactions related to the ownership, use, and transfer of real property, as well as disputes arising from such transactions.',
            'In real estate law, matters such as property ownership and title deed records, sale and transfer transactions, lease relationships, co-ownership, condominium ownership, zoning applications, and disputes arising from real property frequently come up. Reviewing the title deed record, identifying encumbrances and restrictions on the property such as mortgages, liens, or usufruct rights, and legally assessing the sale transaction are important for carrying out real estate transactions securely.',
            'Where a property is jointly owned by more than one person, disputes may arise among the co-owners regarding its use, management, or division. In such cases, partition actions, title deed disputes, or other legal proceedings related to ownership may come into play.',
            'Rental and Eviction Disputes: Lease relationships are one of the important areas of real estate law. Rent amounts, the termination of lease agreements, eviction, rent receivables, and the parties’ contractual rights and obligations can all give rise to various disputes.',
            'Eviction of the leased property is one of the most common legal processes relating to the termination of a lease relationship. Eviction proceedings may arise where the tenant fails to pay rent, the term of the lease expires, or other statutory grounds for eviction occur. In the eviction process, it is of great importance to correctly identify the ground for eviction and to comply with the procedures and time limits prescribed by law.',
          ],
        },
        {
          slug: 'aile-hukuku-nedir',
          category: 'FAMILY LAW',
          title: 'What Is Family Law?',
          time: '4 min read',
          intro:
            'Family law is the branch of law that governs marriage, divorce, alimony, custody, division of property, and the legal relationships among family members.',
          paragraphs: [
            'Given the nature of family relationships, disputes in this field must be handled carefully, both from a legal and a personal standpoint.',
            'The Divorce Process: Where the continuation of the marital union is no longer possible, the parties may seek a divorce. Whether the divorce is contested or uncontested can affect how the process unfolds and the steps the parties must take. The divorce process may involve not only the dissolution of the marriage itself but also a range of other matters, such as alimony, custody, personal contact, material and moral compensation, and division of property.',
            'Custody and Children’s Rights: In deciding which parent is granted custody of the children in the event of divorce or separation, the primary criterion is the best interests of the child. The child’s age, needs, the parties’ living conditions, and other concrete circumstances are assessed together. Arrangements may also be made for personal contact between the child and the parent who is not granted custody.',
            'Alimony: In family law, alimony is an important legal institution intended to meet the economic needs of the parties and their children. Interim, child support, poverty, and assistance alimony may arise under different circumstances. In assessing alimony claims, the parties’ economic and social circumstances, together with the specific features of the case, are taken into account.',
            'Division of Property: With the dissolution of the marriage, the liquidation of the matrimonial property regime between the spouses may come into play. Which property regime governs the assets acquired during the marriage, and the spouses’ rights over those assets, are determined according to the circumstances of the specific case. In disputes over division of property, the legal status of real property, vehicles, bank accounts, and other assets may need to be assessed separately.',
          ],
        },
        {
          slug: 'ceza-hukuku-nedir',
          category: 'CRIMINAL LAW',
          title: 'What Is Criminal Law?',
          time: '3 min read',
          intro:
            'Criminal law is a branch of public law that defines acts which disturb public order and constitute offenses, and that regulates the sanctions (penalties and security measures) applicable to those acts.',
          paragraphs: [
            'Its primary purpose is to protect public order, prevent the commission of offenses, and safeguard individuals’ rights and freedoms.',
            'Criminal proceedings consist of two main stages. The Investigation Stage: This begins upon learning of a suspected offense. Under the direction of the public prosecutor, law enforcement (police/gendarmerie) gathers evidence. If the level of suspicion is sufficient, an indictment is prepared; otherwise, a decision of non-prosecution is issued.',
            'The Prosecution Stage: This begins once the indictment is accepted by the court. The suspect then acquires the status of "defendant." The trial is conducted, the evidence is examined, and the court renders a judgment (acquittal, conviction, etc.).',
            'Under Turkish criminal law, sanctions fall into two main categories: imprisonment and judicial fines. Security Measures: These are purpose-oriented sanctions such as deprivation of certain rights, measures specific to minors, or treatment processes specific to persons with mental illness.',
          ],
        },
        {
          slug: 'aihm-basvurulari-ve-yeniden-yargilama',
          category: 'HUMAN RIGHTS LAW',
          title: 'ECtHR Applications and Retrial Following ECtHR Judgments',
          time: '4 min read',
          intro:
            'An individual application to the European Court of Human Rights (ECtHR) is an international human rights review mechanism available where the fundamental rights and freedoms guaranteed by the European Convention on Human Rights (ECHR) cannot be effectively protected under domestic law.',
          paragraphs: [
            'That said, the ECtHR is not an appellate or cassation body sitting above domestic courts. The Court’s core function is to review whether states parties comply with their obligations under the Convention.',
            'For this reason, one of the most important features of the ECtHR application process is that the applicant must first have exhausted domestic remedies. Under Article 35 of the ECHR, the Court may, as a rule, only examine applications made after domestic remedies have been exhausted. The Court’s current admissibility guide likewise states that the exhaustion-of-domestic-remedies rule is intended to afford the national authorities the opportunity to prevent or put right the alleged violation.',
            'As a natural consequence of this system, an ECtHR application must be distinguished from the retrial mechanism that comes into play following an ECtHR judgment. The purpose of the former is to obtain a finding of violation at the international level, whereas the purpose of the latter is to remedy the violation found, within the domestic legal order and for the specific applicant.',
            'In conclusion, an application to the ECtHR should be regarded not merely as a means of obtaining a finding of violation at the international level, but also, where the necessary conditions are met, as the starting point of a process aimed at eliminating the consequences of the violation under domestic law. In criminal proceedings in particular, correctly establishing the link between the reasoning of the ECtHR judgment and Article 311 of the Code of Criminal Procedure (CMK) is one of the most important legal factors directly affecting the likelihood of success of a retrial request.',
          ],
        },
      ],
    },
    contact: {
      eyebrow: '06 / CONTACT',
      heading: ['Let’s start with', 'a conversation.'],
      linkText: 'Let’s assess your legal matter together',
      officeName: 'AŞKIN LAW OFFICE',
      officeTagline: 'Legal counsel & representation',
      persons: [
        {
          name: 'Att. Ömer Faruk Aşkın',
          email: 'omerfarukaskn@gmail.com',
          phone: '0 546 622 98 45',
        },
        {
          name: 'Att. Gülsüm Burcu Uğur',
          email: 'avgulsumburcu@gmail.com',
          phone: '0 536 270 01 50',
        },
      ],
      addressLines: [
        'Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76/3',
        'Odunpazarı / Eskişehir, Türkiye',
      ],
      mapQuery:
        'Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76 Odunpazarı Eskişehir',
      mapTitle: 'Office location — Google Maps',
      mapOpen: 'Open in Google Maps',
      kvkkLabel: 'KVKK Privacy Notice',
      kvkkHref: 'https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-',
    },
    footer: {
      homeAria: 'Back to top',
      logoAlt: 'Attorney Ömer Faruk Aşkın',
      nav: [
        { label: 'About Us', href: '/#hakkimizda' },
        { label: 'Practice Areas', href: '/#uzmanlik' },
        { label: 'Contact', href: '/#iletisim' },
        { label: 'Back to top ↑', href: '#' },
      ],
      copyright: '© 2026 Aşkın Law.',
      tagline: 'Law · Strategy · Trust',
    },
    common: { close: 'Close ×' },
  },
};
