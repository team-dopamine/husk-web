import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ko from '../locales/ko/common.json';
import en from '../locales/en/common.json';
import zh from '../locales/zh/common.json';

const resources = {
  ko: { translation: ko },
  en: { translation: en },
  zh: { translation: zh },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
  });

export default i18n;
