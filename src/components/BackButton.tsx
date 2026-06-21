"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackHref: string;
  children: React.ReactNode;
}

export default function BackButton({ fallbackHref, children }: BackButtonProps) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // Check if the previous page was within our own site
    if (typeof document !== "undefined" && document.referrer.includes(window.location.host)) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-1.5 text-sm font-mono text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
