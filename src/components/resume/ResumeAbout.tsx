import React from "react";
import { Globe } from "lucide-react";

interface ResumeAboutProps {
  lang: "es" | "en";
  title: string;
  aboutText: React.ReactNode;
  portfolioUrl: string;
  portfolioDisplayUrl: string;
}

export default function ResumeAbout({ lang, title, aboutText, portfolioUrl, portfolioDisplayUrl }: ResumeAboutProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="space-y-5 text-slate-600 dark:text-slate-300 print:text-gray-800 leading-relaxed">
        {typeof aboutText === "string" ? <p>{aboutText}</p> : aboutText}
        
        <div className="p-4 rounded-lg bg-brand-orange/5 border border-brand-orange/20 print:bg-transparent print:border-brand-orange/40 print:p-3.5">
          <p className="font-medium text-slate-800 dark:text-slate-200 print:text-slate-900 flex flex-row items-center gap-2">
            <span className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-orange shrink-0" />
              <span>
                {lang === "es" 
                  ? "Explora mis proyectos y trayectoria en mi portfolio:"
                  : "Explore my projects and background on my portfolio:"}
              </span>
            </span>
            <a 
              href={portfolioUrl} 
              className="text-brand-orange hover:underline font-bold" 
              target="_blank" 
              rel="noreferrer"
            >
              {portfolioDisplayUrl}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
