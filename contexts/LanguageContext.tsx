'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  availableLanguages: { code: string; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n: i18nextInstance } = useTranslation();

  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    // { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const changeLanguage = async (language: string) => {
    await i18nextInstance.changeLanguage(language);
    // Store the language preference
    localStorage.setItem('codriva-language', language);
    // Update the document language attribute
    document.documentElement.lang = language;
  };

  useEffect(() => {
    // Initialize language from localStorage or browser settings
    const storedLanguage = localStorage.getItem('codriva-language');
    const browserLanguage = navigator.language.split('-')[0];
    
    const languageToUse = storedLanguage || (availableLanguages.find(lang => lang.code === browserLanguage) ? browserLanguage : 'en');
    
    changeLanguage(languageToUse);
  }, []);

  const value = {
    currentLanguage: i18nextInstance.language,
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
