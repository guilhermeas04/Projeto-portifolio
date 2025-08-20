import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { translations } from "../translations";
import type { Translations } from "../translations";

interface LanguageContextType {
  language: string;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("pt");

  useEffect(() => {
    // Detecta o idioma do navegador
    const browserLanguage = navigator.language.split("-")[0];

    // Se o navegador estiver em inglês, usa inglês, senão usa português
    const detectedLanguage = browserLanguage === "en" ? "en" : "pt";
    setLanguage(detectedLanguage);

    // Salva no localStorage para persistir a escolha do usuário
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = translations[language as keyof typeof translations];

  const value: LanguageContextType = {
    language,
    t,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
