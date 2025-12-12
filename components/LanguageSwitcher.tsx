'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { availableLanguages, currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = async (languageCode: string) => {
    await changeLanguage(languageCode);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
        aria-label="Select language"
      >
        <span>🌐</span>
        <span>Language</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 z-40"
      onClick={() => setIsOpen(false)}
    />
    
    {/* Dropdown */}
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
      <div className="py-1">
        {availableLanguages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 ${
              currentLanguage === language.code
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-900 bg-white dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span >{language.name}</span>
            {currentLanguage === language.code && (
              <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  </>
)}
    </div>
  );
};

export default LanguageSwitcher;
