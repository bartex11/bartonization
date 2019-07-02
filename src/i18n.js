import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import {reactI18nextModule} from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/ger/translation.json';
import translationBg from './locales/bg/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  bg: {
    translation: translationBg,
  },
};

i18n
  .use (detector)
  .use (backend)
  .use (reactI18nextModule) // passes i18n down to react-i18next
  .init ({
    resources,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
