import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '@/components/article-view';
import { content } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

const articles = content.tr.publications.articles;
type Props = { params: Promise<{ slug: string }> };

const clip = (s: string, max: number) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  const title = a.title + ' | Aşkın Hukuk Bürosu';
  const description = clip(a.intro, 160);
  const path = '/yayinlar/' + slug;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: 'tr_TR',
      url: path,
      siteName: 'Aşkın Hukuk Bürosu',
      title,
      description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const publisher = {
    '@type': 'Organization',
    name: 'Aşkın Hukuk Bürosu',
    url: SITE_URL + '/',
    logo: {
      '@type': 'ImageObject',
      url: SITE_URL + '/brand/askin-hukuk-logo.png',
    },
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.intro,
    inLanguage: 'tr',
    image: SITE_URL + '/og-image.jpg',
    mainEntityOfPage: SITE_URL + '/yayinlar/' + slug,
    author: publisher,
    publisher,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ArticleView slug={slug} />
    </>
  );
}
