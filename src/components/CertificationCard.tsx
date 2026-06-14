import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { AwsIcon, UdemyIcon } from "./Icons";

interface CertificationCardProps {
  title: string;
  issuer: string;
  dateInfo: string;
  iconName: string; // "aws" or "udemy"
  verifyUrl: string;
}

export default function CertificationCard({
  title,
  issuer,
  dateInfo,
  iconName,
  verifyUrl,
}: CertificationCardProps) {
  return (
    <div className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/80 dark:border-slate-900 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-orange/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5">
      {/* Icon Area */}
      <div className="h-16 flex items-center justify-center mb-6 relative">
        <div className="absolute inset-0 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/10 transition-colors" />
        {iconName === "aws" ? (
          <AwsIcon className="relative z-10 transition-transform duration-300 group-hover:scale-110 h-10 w-auto text-slate-800 dark:text-slate-100" />
        ) : iconName === "udemy" ? (
          <UdemyIcon className="relative z-10 transition-transform duration-300 group-hover:scale-110 h-10 w-auto text-slate-800 dark:text-slate-100" />
        ) : (
          <Image
            src={`/icons/${iconName}.svg`}
            alt={`${issuer} logo`}
            width={80}
            height={40}
            className="relative z-10 transition-transform duration-300 group-hover:scale-110 h-10 w-auto object-contain"
          />
        )}
      </div>

      {/* Details */}
      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">{issuer}</p>
      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-mono">{dateInfo}</p>

      {/* Link */}
      <Link
        href={verifyUrl}
        target="_blank"
        className="inline-flex items-center gap-1.5 text-brand-orange hover:text-white transition-colors font-semibold mt-5 text-sm"
      >
        <Award className="w-4 h-4" />
        Verify Certification &rarr;
      </Link>
    </div>
  );
}
