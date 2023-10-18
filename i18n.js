import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './public/assets/locale/en/translations.json';
import RO from './public/assets/locale/ro/translations.json';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'ro',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        ro: {translation: RO},
        en: {translation: EN},
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;