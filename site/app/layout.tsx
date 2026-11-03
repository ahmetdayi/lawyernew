import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider, SkipLink } from '@/lib/i18n';
import { content } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

const { meta, contact, expertise } = content.tr;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Diler Hukuk & Danışmanlık',
    title: meta.title,
    description: meta.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: ['/og-image.jpg'],
  },
};

const intlPhone = (p: string) => '+90' + p.replace(/\s/g, '').slice(1);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': SITE_URL + '/#office',
  name: 'Diler Hukuk & Danışmanlık',
  url: SITE_URL + '/',
  logo: SITE_URL + '/brand/diler-hukuk-logo.png',
  image: SITE_URL + '/og-image.jpg',
  description: meta.description,
  telephone: intlPhone(contact.phone),
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.addressLines[0],
    addressLocality: 'Merkez',
    addressRegion: 'Nevşehir',
    postalCode: '50100',
    addressCountry: 'TR',
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(contact.mapQuery),
  areaServed: { '@type': 'City', name: 'Nevşehir' },
  knowsAbout: expertise.areas.map((a) => a.title),
  founder: {
    '@type': 'Person',
    '@id': SITE_URL + '/#deniz-diler',
    name: 'Deniz Diler',
    honorificPrefix: 'Av.',
    jobTitle: 'Kurucu Avukat',
    url: SITE_URL + '/#hakkimizda',
    image: SITE_URL + '/about/portrait-900.webp',
    worksFor: { '@id': SITE_URL + '/#office' },
    workLocation: { '@type': 'City', name: 'Nevşehir' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Selçuk Üniversitesi Hukuk Fakültesi',
    },
    memberOf: { '@type': 'Organization', name: 'Nevşehir Barosu' },
    knowsAbout: [
      'Ceza Hukuku',
      'Kira Hukuku',
      'Aile Hukuku',
      'Gayrimenkul Uyuşmazlıkları',
      'Şirketler Danışmanlığı',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
