"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../dictionaries/en.json";
import az from "../dictionaries/az.json";
import ru from "../dictionaries/ru.json";

type Language = "AZ" | "EN" | "RU";

type Dictionary = typeof en;

interface LanguageContextType {
  activeLang: Language;
  setActiveLang: (lang: Language) => void;
  t: (key: string) => string;
}

const dictionaries: Record<Language, Dictionary> = {
  EN: en,
  AZ: az as Dictionary,
  RU: ru as Dictionary,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [activeLang, setActiveLangState] = useState<Language>("AZ");

  useEffect(() => {
    const storedLang = localStorage.getItem("codfy_lang") as Language;
    if (storedLang && ["AZ", "EN", "RU"].includes(storedLang)) {
      setActiveLangState(storedLang);
    }
  }, []);

  const setActiveLang = (lang: Language) => {
    setActiveLangState(lang);
    localStorage.setItem("codfy_lang", lang);
  };

  const t = (keyString: string) => {
    const keys = keyString.split(".");
    let current: any = dictionaries[activeLang];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${keyString}`);
        return keyString;
      }
      current = current[key];
    }
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ activeLang, setActiveLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
