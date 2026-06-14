import Image from "next/image";
import Link from "next/link";
import { Terminal, Cpu, Layers, Server, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/sections/HeroSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CoreTechSection from "@/components/sections/CoreTechSection";
import FeaturedArticlesSection from "@/components/sections/FeaturedArticlesSection";
import ContactSection from "@/components/sections/ContactSection";
import { GithubIcon } from "@/components/Icons";

import { translations } from "@/lib/translations";

// Static image imports
import fkPortrait from "@/assets/fk.jpg";
import coreBankingApi from "@/assets/projects/core-banking-api.webp";
import coreBankingPlatform from "@/assets/projects/core-banking-platform.webp";
import xeoContext from "@/assets/projects/xeocontext.webp";
import wordsus from "@/assets/projects/wordsus.webp";
import xeoCast from "@/assets/projects/xeocast.jpg";
import goMiniProject from "@/assets/mini-projects/go.jpg";

export const metadata = {
  title: "Fabián Karaben | Full Stack Developer",
  description: "Portfolio of Fabián Karaben, a Full Stack Developer specializing in Next.js, React, TypeScript, Go, Java, and AWS cloud solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function FullStackHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (langParam || "en") as "en" | "es";
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />
      <Header lang={lang} />

      <main className="relative z-10 grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <HeroSection
          status={t.statusFullStack}
          title={t.fullStackTitle}
          description={t.fullStackDesc}
        />

        {/* About Section */}
        <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">{"// 01."}</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.aboutTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative p-1 border border-slate-200/80 dark:border-slate-900 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={fkPortrait}
                  alt="Fabián Karaben"
                  width={220}
                  height={220}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-4 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>{t.aboutFsP1}</p>
              <p>{t.aboutFsP2}</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">{"// 02."}</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.featuredProjects}
            </h2>
          </div>

          <div className="space-y-16">
            {/* VeoBible Showcase */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-mono font-semibold">
                      Featured Full-Stack Project
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      VeoBible
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Una Aplicación Web Progresiva (PWA) moderna para leer la Biblia. Generada estáticamente, completamente funcional sin conexión y desplegada en el edge."
                        : "A modern Progressive Web App for reading the Bible. Statically generated, fully offline-capable, and deployable to the edge."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js 14", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Hono", "D1 (SQLite)", "Supabase Auth", "PWA"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href="https://veobible.com"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-hover transition-colors shadow-lg shadow-brand-orange/20"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {lang === "es" ? "Visitar Web" : "Visit Website"}
                      </Link>
                      <Link
                        href="https://github.com/xeost/veobible-app"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-brand-orange/40 hover:text-brand-orange transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Feature cards */}
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Frontend PWA</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "UI bilingüe, marcadores de texto, sesiones de lectura optimistas y ~2,400 páginas pre-renderizadas por SSG."
                          : "Bilingual UI, text bookmarks, optimistic reading sessions, and ~2,400 SSG pre-rendered pages."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Edge Backend</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "API REST para sincronización construida en Cloudflare Workers con Hono y D1 (SQLite en el edge)."
                          : "REST API for sync built on Cloudflare Workers with Hono and D1 (SQLite at the edge)."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Offline-First</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Service Worker con Cache API. Soporte completo sin conexión para leer versiones descargadas."
                          : "Service Worker with Cache API. Full offline support for reading downloaded versions."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Supabase Auth</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Autenticación segura con verificación de JWTs para acceder a los datos sincronizados en la nube."
                          : "Secure authentication with JWT verification to access cloud-synced user data."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wordsus Showcase */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row-reverse gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
                      Featured Full-Stack Project
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Wordsus
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Plataforma de lectura online gratuita para libros y cursos educativos. Construida con Next.js exportado estáticamente y una API REST sincronizada en la nube."
                        : "Free online reading platform for educational books and courses. Built with statically exported Next.js and a cloud-synced REST API."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js 16", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "Cloudflare Workers", "Hono", "D1 (SQLite)", "Supabase Auth"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href="https://wordsus.com"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {lang === "es" ? "Visitar Web" : "Visit Website"}
                      </Link>
                      <Link
                        href="https://github.com/wordsus/wordsus-static-site"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-brand-orange/40 hover:text-brand-orange transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Feature cards */}
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-indigo-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Static Frontend</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Aplicación Next.js 16 con App Router exportada estáticamente hacia Cloudflare Pages para máximo rendimiento."
                          : "Next.js 16 App Router application statically exported to Cloudflare Pages for maximum performance."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-sky-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Workers Backend</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "API REST ultrarrápida usando Hono desplegada en V8 isolates en el edge a través de Cloudflare Workers."
                          : "Lightning-fast REST API using Hono deployed on V8 isolates at the edge via Cloudflare Workers."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Cloud Sync & D1</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Sincronización multi-dispositivo del progreso y favoritos usando base de datos D1 (SQLite en el edge)."
                          : "Cross-device synchronization of progress and favorites using D1 database (SQLite at the edge)."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-orange-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Rich Features</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Soporte i18n, búsqueda full-text, temas claros/oscuros, seguimiento de lectura y soporte para audio/video."
                          : "i18n support, full-text search, dark/light themes, reading tracking, and audio/video support."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staticl10n Showcase */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                      Featured Full-Stack Project
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Staticl10n CLI
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Herramienta CLI para la traducción automática de sitios web estáticos. Captura, procesa y traduce sitios web completos de extremo a extremo utilizando LLMs locales (Ollama)."
                        : "CLI tool for automated static website translation. Captures, processes, and translates complete websites end-to-end using local LLMs (Ollama)."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Node.js", "TypeScript", "SQLite", "Playwright", "Cheerio", "Ollama", "Next.js Support"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href="https://github.com/xeost/staticl10n-cli"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Feature cards */}
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Interactive CLI</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Interfaz CLI interactiva construida con Inquirer y Chalk para gestionar flujos de trabajo multi-etapa y configuración."
                          : "Interactive CLI interface built with Inquirer and Chalk to manage multi-stage workflows and configuration."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Playwright Crawler</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Descubrimiento profundo de URLs, rastreo y exportación estática de sitios modernos con un crawler headless."
                          : "Deep URL discovery, crawling, and static export of modern websites using a headless Playwright crawler."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Local LLM AI</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Traducciones semánticas de HTML que mantienen intacta la estructura del DOM utilizando modelos locales vía Ollama."
                          : "Semantic HTML translations that preserve DOM structure perfectly using local LLM models via Ollama."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">SQLite State DB</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Rastreo robusto de estado con better-sqlite3 y sistema de caché de memoria de traducción."
                          : "Robust state tracking with better-sqlite3 and a translation memory cache system."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini-Projects Series */}
            <div>
              <h3 className="text-lg font-mono text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-orange" />
                <span>{t.miniProjectsSeries}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="150 Go mini-projects"
                  description={lang === "es"
                    ? "Explora 150 mini-proyectos de Go, desde servidores HTTP básicos hasta microservicios avanzados con Docker, mejorando las habilidades backend de manera práctica."
                    : "Explore 150 Go mini-projects, from basic HTTP servers to advanced microservices, with Docker, enhancing backend skills in a hands-on way."}
                  image={goMiniProject}
                  tags={["Go", "Backend", "Microservices", "REST API", "JWT", "PostgreSQL", "Redis", "GraphQL", "MongoDB", "WebSocket", "RabbitMQ", "gRPC", "Elasticsearch", "Jaeger", "Security"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/golang-mini-projects" }]}
                />
                <ProjectCard
                  title="150 Spring mini-projects"
                  description={lang === "es"
                    ? "Explora 150 mini-proyectos de Spring, desde la configuración básica hasta microservicios avanzados, dominando el ecosistema de Spring mediante la práctica."
                    : "Explore 150 Spring mini-projects, from basic configuration to advanced microservices, mastering the Spring ecosystem through hands-on practice."}
                  image="/mini-projects/imgs/spring.webp"
                  tags={["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Cloud", "REST API", "Microservices", "Testing"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/spring-mini-projects" }]}
                />
                <ProjectCard
                  title="150 Java mini-projects"
                  description={lang === "es"
                    ? "Explora 150 mini-proyectos de Java, desde aplicaciones básicas hasta soluciones empresariales avanzadas, mejorando las habilidades backend de forma práctica."
                    : "Explore 150 Java mini-projects, from basic applications to advanced enterprise solutions backend skills in a hands-on way."}
                  image="/mini-projects/imgs/java.webp"
                  tags={["Java", "Backend", "Spring Boot", "REST API", "Microservices", "JPA", "Hibernate", "PostgreSQL", "Docker", "JWT", "Security", "Redis", "GraphQL", "MongoDB"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/java-mini-projects" }]}
                />
              </div>
            </div>
          </div>
        </section>

        <CertificationsSection lang={lang} />
        <CoreTechSection lang={lang} />
        <FeaturedArticlesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer role={t.fullStackTitle} lang={lang} />
    </div>
  );
}
