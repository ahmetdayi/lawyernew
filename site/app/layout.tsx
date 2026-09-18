import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider, SkipLink } from '@/lib/i18n';
import { content } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

const { meta, contact, team, expertise } = content.tr;

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
    siteName: 'Aşkın Hukuk Bürosu',
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
  name: 'Aşkın Hukuk Bürosu',
  url: SITE_URL + '/',
  logo: SITE_URL + '/brand/askin-hukuk-logo.png',
  image: SITE_URL + '/og-image.jpg',
  description: meta.description,
  telephone: intlPhone(contact.persons[0].phone),
  email: contact.persons[0].email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kurtuluş Mahallesi Cumhuriyet Bulvarı No:76/3',
    addressLocality: 'Odunpazarı',
    addressRegion: 'Eskişehir',
    postalCode: '26090',
    addressCountry: 'TR',
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(contact.mapQuery),
  areaServed: { '@type': 'City', name: 'Eskişehir' },
  knowsAbout: expertise.areas.map((a) => a.title),
  employee: team.members.map((m, i) => ({
    '@type': 'Person',
    name: m.name.replace(/^Av\.\s*/, ''),
    honorificPrefix: 'Av.',
    jobTitle: 'Avukat',
    telephone: intlPhone(contact.persons[i].phone),
    email: contact.persons[i].email,
    memberOf: {
      '@type': 'Organization',
      name: 'Eskişehir Barosu',
      identifier: m.bar.split(' - ')[1],
    },
  })),
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
