// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";
// import { strings } from "@/data/strings";

// type Lang = "en" | "np";

// interface LanguageContextType {
//   lang: Lang;
//   t: (key: string) => string;
//   toggleLang: () => void;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [lang, setLang] = useState<Lang>("en");

//   const t = (key: string) => strings[lang][key] || key;
//   const toggleLang = () => setLang((prev) => (prev === "en" ? "np" : "en"));

//   return (
//     <LanguageContext.Provider value={{ lang, t, toggleLang }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const ctx = useContext(LanguageContext);
//   if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
//   return ctx;
// }
