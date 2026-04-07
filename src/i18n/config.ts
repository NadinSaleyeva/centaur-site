import { ru, type TranslationKey } from './ru';

export const defaultLang = 'ru' as const;

export const translations = { ru } as const;

export type Lang = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang = defaultLang): string {
  return translations[lang]?.[key] ?? ru[key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}
