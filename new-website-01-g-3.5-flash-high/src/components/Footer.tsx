import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface FooterProps {
  role?: string;
}

export default function Footer({ role = "Java Backend Developer" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-900 bg-slate-100/40 dark:bg-slate-950/40 py-8 mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
    </footer>
  );
}
