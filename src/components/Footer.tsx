import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface FooterProps {
  role?: string;
  lang?: "en" | "es";
}

export default function Footer({ role = "Java Backend Developer", lang = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-900 bg-slate-100/40 dark:bg-slate-950/40 pt-12 pb-8 mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono tracking-wider uppercase">
              Specialized Roles
            </span>
            <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
              <Link href={`/${lang}`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                Full Stack Developer
              </Link>
              <span className="text-slate-300 dark:text-slate-700 text-sm">|</span>
              <Link href={`/${lang}/backend`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                Backend Developer
              </Link>
              <span className="text-slate-300 dark:text-slate-700 text-sm">|</span>
              <Link href={`/${lang}/devops-sysadmin`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                DevOps & SysAdmin
              </Link>
              <span className="text-slate-300 dark:text-slate-700 text-sm">|</span>
              <Link href={`/${lang}/flutter`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                Flutter Developer
              </Link>
            </nav>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200/80 dark:bg-slate-800/80" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500 dark:text-slate-500 font-mono">
            &copy; {currentYear} Fabián Karaben <span className="text-brand-orange">|</span> {role}
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/fabiankaraben"
              target="_blank"
              className="text-slate-400 dark:text-slate-500 hover:text-brand-orange transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/fabiankaraben"
              target="_blank"
              className="text-slate-400 dark:text-slate-500 hover:text-brand-orange transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
