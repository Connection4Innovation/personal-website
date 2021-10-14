import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

const backend = new Backend({
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
});

const detector = new LanguageDetector()

i18n
    .use(backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        ns: ['footer', 'header', 'team', 'contacts', 'chisiamo', 'timeline', 'progetti'],
        lng: 'it',
        fallbackLng: 'it',
        debug: false,
        react: {
            useSuspense: false
        }
    });

export default i18n;