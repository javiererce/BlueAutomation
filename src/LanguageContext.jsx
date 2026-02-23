import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Intentar obtener el idioma del navegador o usar español por defecto
    const getInitialLanguage = () => {
        const saved = localStorage.getItem('language');
        if (saved && translations[saved]) return saved;

        const browserLang = navigator.language.split('-')[0];
        return translations[browserLang] ? browserLang : 'es';
    };

    const [language, setLanguage] = useState(getInitialLanguage());

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
