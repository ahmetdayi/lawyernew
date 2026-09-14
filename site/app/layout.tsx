import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Aşkın Hukuk — Adalet için duruş.',
  description:
    'Doğru zamanda, doğru adım doğru hukuk. Aşkın Hukuk Bürosu.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#hakkimizda">
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
