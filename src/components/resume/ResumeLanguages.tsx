interface ResumeLanguagesProps {
  lang: "es" | "en";
  title: string;
}

export default function ResumeLanguages({ lang, title }: ResumeLanguagesProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300 print:text-gray-800">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">
            {lang === "es" ? "Español:" : "Spanish:"}
          </span>
          <span className="text-sm font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full print:bg-transparent print:px-0">
            {lang === "es" ? "Nativo" : "Native"}
          </span>
        </div>
        <span className="text-slate-300 dark:text-slate-600 print:text-slate-400 inline">|</span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">
            {lang === "es" ? "Inglés:" : "English:"}
          </span>
          <span className="text-sm font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full print:bg-transparent print:px-0">
            {lang === "es" ? "Intermedio - Conversacional" : "Intermediate - Conversational"}
          </span>
        </div>
      </div>
    </section>
  );
}
