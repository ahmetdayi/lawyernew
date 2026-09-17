'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { content, type Lang } from './content';
export type { Lang };
const STORAGE_KEY = 'askin-hukuk-lang';
const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: 'tr', setLang: () => {} });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr');
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'tr') setLangState(stored);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
export function useContent() {
  const { lang } = useLanguage();
  return content[lang];
}
export function SkipLink() {
  const t = useContent();
  return (
    <a className="skip-link" href="#hakkimizda">
      {t.meta.skipLink}
    </a>
  );
}
