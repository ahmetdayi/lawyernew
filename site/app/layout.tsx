import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider, SkipLink } from '@/lib/i18n';
import { content } from '@/lib/content';
export const metadata: Metadata = {
  title: content.tr.meta.title,
  description: content.tr.meta.description,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
