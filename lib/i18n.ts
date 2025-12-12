import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from '../locales/en/common.json';
import homeEn from '../locales/en/home.json';
import pagesEn from '../locales/en/pages.json';

import commonHi from '../locales/hi/common.json';
import homeHi from '../locales/hi/home.json';
import pagesHi from '../locales/hi/pages.json';

// Placeholder imports for future languages
import commonFr from '../locales/fr/common.json';
import homeFr from '../locales/fr/home.json';
import pagesFr from '../locales/fr/pages.json';

const resources = {
  en: {
    common: commonEn,
    home: homeEn,
    pages: pagesEn,
  },
  hi: {
    common: commonHi,
    home: homeHi,
    pages: pagesHi,
  },
  fr: {
    common: commonFr,
    home: homeFr,
    pages: pagesFr,
  } 
};

// Check if running on server or client
const isClient = typeof window !== 'undefined';

// Initialize i18n with different configs for server vs client
const initI18n = () => {
  if (isClient) {
    // CLIENT SIDE: Initialize with language detection
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en', // Start with English to match server
        fallbackLng: 'en',
        debug: false,
        
        interpolation: {
          escapeValue: false,
        },

        detection: {
          order: ['localStorage', 'navigator', 'htmlTag'],
          caches: ['localStorage'],
          // Don't immediately change language on init
          convertDetectedLanguage: (lng) => lng ? lng.split('-')[0] : 'en',
        },

        react: {
          useSuspense: false,
          bindI18n: 'languageChanged', // Only react to language changes
          bindI18nStore: '',
        },
      });
      
    // After initialization, check for stored language preference
    // but don't change immediately to avoid hydration issues
    setTimeout(() => {
      const storedLang = localStorage.getItem('i18nextLng');
      const browserLang = navigator.language.split('-')[0];
      const supportedLangs = ['en', 'hi', 'fr'];
      
      let langToUse = 'en';
      if (storedLang && supportedLangs.includes(storedLang)) {
        langToUse = storedLang;
      } else if (browserLang && supportedLangs.includes(browserLang)) {
        langToUse = browserLang;
      }
      
      // Only change language if it's different from current
      if (langToUse !== i18n.language) {
        i18n.changeLanguage(langToUse);
      }
    }, 0);
    
  } else {
    // SERVER SIDE: Initialize without language detection
    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en', // Always English on server
        fallbackLng: 'en',
        debug: false,
        
        interpolation: {
          escapeValue: false,
        },

        react: {
          useSuspense: false,
        },
      });
  }
};

initI18n();

export default i18n;