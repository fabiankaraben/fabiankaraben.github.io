import Link from "next/link";
import { LinkedinIcon } from "@/components/Icons";
import { Language, translations } from "@/lib/translations";

export default function ContactSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60 text-center max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-3 mb-6">
        <span className="font-mono text-sm text-brand-orange">{"// 06."}</span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
          {t.getInTouch}
        </h2>
      </div>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-10">
        {t.contactFsDesc}
      </p>

      <Link
        href="https://linkedin.com/in/fabiankaraben"
        target="_blank"
        className="inline-flex items-center gap-2 px-6 py-4.5 border border-brand-orange/40 text-base font-semibold rounded-xl text-white bg-brand-orange hover:bg-brand-orange-hover transition-all duration-300 shadow-lg shadow-brand-orange/20"
      >
        <LinkedinIcon className="w-5 h-5" />
        {t.connectLinkedin}
      </Link>
    </section>
  );
}
