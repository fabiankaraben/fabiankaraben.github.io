import { Mail, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ResumeHeaderProps {
  title: string;
  subtitle: string;
  portfolioUrl: string;
}

export default function ResumeHeader({ title, subtitle, portfolioUrl }: ResumeHeaderProps) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8 print:border-slate-300">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 print:text-black">
        {title}
      </h1>
      <p className="mt-2 text-xl font-medium text-brand-orange print:text-brand-orange">
        {subtitle}
      </p>
      
      <div className="mt-6 flex flex-wrap gap-y-3 gap-x-6 text-sm text-slate-600 dark:text-slate-400 print:text-gray-700 font-medium">
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Argentina
        </span>
        <a href="mailto:fabiankaraben@gmail.com" className="flex items-center gap-2 hover:text-brand-orange">
          <Mail className="w-4 h-4" />
          fabiankaraben@gmail.com
        </a>
        <a href="https://linkedin.com/in/fabiankaraben" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
          <LinkedinIcon className="w-4 h-4" />
          linkedin.com/in/fabiankaraben
        </a>
        <a href="https://github.com/fabiankaraben" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
          <GithubIcon className="w-4 h-4" />
          github.com/fabiankaraben
        </a>
        <a href={portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
          <Globe className="w-4 h-4" />
          {portfolioUrl.replace(/^https?:\/\//, '')}
        </a>
      </div>
    </header>
  );
}
