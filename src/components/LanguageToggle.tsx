"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  // Derive current language directly from URL to guarantee synchronization
  const currentLang = pathname?.startsWith("/es") ? "es" : "en";

  const handleToggle = () => {
    const nextLang = currentLang === "en" ? "es" : "en";
    
    // Update local storage and HTML lang attribute
    localStorage.setItem("lang", nextLang);
    document.documentElement.setAttribute("lang", nextLang);

    if (pathname) {
      const parts = pathname.split('/');
      if (parts[1] === 'en' || parts[1] === 'es') {
        parts[1] = nextLang;
        router.push(parts.join('/'));
      } else {
        router.push(`/${nextLang}`);
      }
    } else {
      router.push(`/${nextLang}`);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-slate-500 hover:text-brand-orange bg-slate-100 hover:bg-slate-200/50 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 transition-all focus:outline-none text-xs font-mono font-semibold cursor-pointer"
      aria-label={currentLang === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span className="leading-4">{currentLang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
