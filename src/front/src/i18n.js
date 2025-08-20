import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Outras traduções do seu site
      "about_title": "ABOUT ME",
      "about_text": "This is the 'ABOUT ME' section in English, if you have any doubt or advice don't hesitate to contact us!"
    }
  },
  pt: {
    translation: {
      // Outras traduções do seu site
      "about_title": "SOBRE MIM",
      "about_text": "Essa é a seção 'Sobre mim' em portugues, aqui é galo"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;