'use client';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'en',
      supportedLngs: ['en', 'np'],
      ns: ['common'],
      defaultNS: 'common',
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      react: { useSuspense: false },
      load: 'languageOnly',
    });
}

export default i18n;
