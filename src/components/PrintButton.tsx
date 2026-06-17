"use client";

import { Printer } from "lucide-react";

interface PrintButtonProps {
  label: string;
  documentTitle?: string;
}

export default function PrintButton({ label, documentTitle }: PrintButtonProps) {
  const handlePrint = () => {
    if (documentTitle) {
      const originalTitle = document.title;
      document.title = documentTitle;
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 100);
    } else {
      window.print();
    }
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm print:hidden"
    >
      <Printer className="w-4 h-4" />
      {label}
    </button>
  );
}
