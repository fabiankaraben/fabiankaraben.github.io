import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { FileBadge } from "lucide-react";

interface HeroSectionProps {
  status: string;
  title: string;
  description: string;
  resumeLink?: string;
}

export default function HeroSection({ status, title, description, resumeLink }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-900 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{status}</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        Fabián Karaben
        <span className="block mt-3 bg-linear-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent pb-2">
          {title}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
        {description}
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="https://github.com/fabiankaraben"
          target="_blank"
          className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-6 h-6" />
          <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
            GitHub
          </span>
        </Link>
        <Link
          href="https://linkedin.com/in/fabiankaraben"
          target="_blank"
          className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-6 h-6" />
          <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
            LinkedIn
          </span>
        </Link>
        {resumeLink && (
          <Link
            href={resumeLink}
            className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
            aria-label="Resume / CV"
          >
            <FileBadge className="w-6 h-6" />
            <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              View Resume
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
