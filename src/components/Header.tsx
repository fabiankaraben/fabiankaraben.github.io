"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface HeaderProps {
  lang?: "en" | "es";
}

export default function Header({ lang = "en" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const getLinkHref = (hash: string) => {
    if (pathname.includes("/blog")) {
      return `/${lang}${hash}`;
    }
    if (pathname.includes("/backend") || pathname.includes("/devops-sysadmin") || pathname.includes("/flutter")) {
      return `${pathname}${hash}`;
    }
    return `/${lang}${hash}`;
  };

  const getNavLabel = (key: string) => {
    const labels: Record<string, { en: string; es: string }> = {
      about: { en: "About", es: "Sobre Mí" },
      certifications: { en: "Certifications", es: "Certificaciones" },
      skills: { en: "Skills", es: "Habilidades" },
      projects: { en: "Projects", es: "Proyectos" },
      blog: { en: "Blog", es: "Blog" },
      contact: { en: "Contact", es: "Contacto" },
      hireMe: { en: "Contact Me", es: "Contáctame" },
    };
    return labels[key]?.[lang] || key;
  };

  const navLinks = [
    { name: getNavLabel("about"), href: getLinkHref("#about") },
    { name: getNavLabel("projects"), href: getLinkHref("#projects") },
    { name: getNavLabel("certifications"), href: getLinkHref("#certifications") },
    { name: getNavLabel("skills"), href: getLinkHref("#skills") },
    { name: getNavLabel("blog"), href: `/${lang}/blog` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-900/60 py-3 shadow-md shadow-slate-200/10 dark:shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${lang}`}
              className="group flex items-center gap-1.5 font-mono text-xl font-bold tracking-wider text-slate-900 dark:text-slate-100"
            >
              <Terminal className="w-5 h-5 text-brand-orange group-hover:rotate-6 transition-transform" />
              <span>FK<span className="text-brand-orange">.</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={getLinkHref("#contact")}
              className="inline-flex items-center justify-center px-4 py-2 border border-brand-orange/40 text-sm font-medium rounded-lg text-brand-orange bg-brand-orange/5 hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md shadow-brand-orange/10 hover:shadow-brand-orange/20"
            >
              {getNavLabel("hireMe")}
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-orange hover:bg-slate-200/50 dark:hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/80 dark:border-slate-900/60 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 visible h-auto py-6"
            : "-translate-y-2 opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-brand-orange hover:bg-slate-200/30 dark:hover:bg-slate-900/30 px-3 py-2 rounded-md transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={getLinkHref("#contact")}
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-5 py-3 mt-4 text-base font-medium text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg shadow-lg shadow-brand-orange/20 transition-all duration-300"
          >
            {getNavLabel("hireMe")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
