"use client";

import { createContext, useContext, useState } from "react";
import en from "@/app/locales/en.json";
import es from "@/app/locales/es.json";
import fr from "@/app/locales/fr.json";


const languages = { en, es, fr };

const LanguageContext = createContext({
  lang: "en",
  setLang: (lang: string) => {},
  t: (key: string) => ""
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("en");

  const t = (key: string) => {
    const parts = key.split(".");
    let value: any = languages[lang];

    for (const p of parts) {
      value = value?.[p];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
