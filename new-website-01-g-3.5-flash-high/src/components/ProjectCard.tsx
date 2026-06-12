import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: any; // static import or string path
  tags: string[];
  links: { label: string; href: string }[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <div className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/80 dark:border-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-orange/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5 flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/80 dark:border-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors font-sans mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-grow font-sans">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 justify-end mt-auto pt-4 border-t border-slate-200/80 dark:border-slate-900/50">
          {links.map((link) => {
            const isGithub = link.label.toLowerCase() === "github";
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-colors"
              >
                {isGithub ? <GithubIcon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
