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
  title: "Fabián Karaben | Backend Engineer",
  description: "Portfolio of Fabián Karaben, a Backend Engineer specializing in Java, Spring Boot, Go, Node.js, AWS, and distributed backend architectures.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function BackendHome({ params }: { params: Promise<{ lang: string }> }) {
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
          status={t.statusBackend}
          title={t.backendTitle}
          description={t.backendDesc}
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
              <p>{t.aboutBeP1}</p>
              <p>{t.aboutBeP2}</p>
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
            {/* VeoBible Showcase (Backend Focus) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-mono font-semibold">
                      Featured Backend Architecture
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      VeoBible API
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Arquitectura Edge sin servidor para sincronización en tiempo real y almacenamiento distribuido globalmente."
                        : "Serverless Edge architecture for real-time synchronization and globally distributed storage."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Cloudflare Workers", "Hono", "TypeScript", "D1 (SQLite)", "Supabase Auth", "REST API"].map((tech) => (
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
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Edge REST API</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "API ultrarrápida construida con Hono y desplegada en V8 Isolates vía Cloudflare Workers."
                          : "Lightning-fast API built with Hono and deployed on V8 Isolates via Cloudflare Workers."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Cloud Database D1</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Base de datos SQLite distribuida globalmente (D1) para persistencia centralizada."
                          : "Globally distributed SQLite database (D1) for centralized persistence."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Service Worker Sync</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Lógica de sincronización offline-first con Background Sync y resolución de conflictos de estado."
                          : "Offline-first synchronization logic with Background Sync and state conflict resolution."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Supabase Auth</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Autenticación segura en la API mediante verificación JWT y políticas RLS estrictas."
                          : "Secure API authentication through JWT verification and strict RLS policies."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wordsus Showcase (Backend Focus) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row-reverse gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
                      Featured Backend Architecture
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Wordsus API
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Plataforma educativa potenciada por un backend Cloudflare Workers que sincroniza el progreso y datos del usuario de manera eficiente."
                        : "Educational platform powered by a Cloudflare Workers backend that efficiently synchronizes user progress and data."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Cloudflare Workers", "Hono", "TypeScript", "D1 (SQLite)", "Supabase Auth", "REST API"].map((tech) => (
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
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-blue-500/40 hover:text-blue-500 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-indigo-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Serverless API</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "API REST sin servidor desplegada en V8 isolates para máximo rendimiento."
                          : "Serverless REST API deployed on V8 isolates for maximum performance."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-sky-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Edge Compute</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Procesamiento de datos y lógica de negocio ejecutándose cerca del usuario con Cloudflare."
                          : "Data processing and business logic executing close to the user with Cloudflare."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">D1 Sync Storage</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Almacenamiento del progreso de lectura sincronizado entre dispositivos usando SQLite en el edge."
                          : "Reading progress storage synced across devices using SQLite at the edge."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-orange-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">JWT Sessions</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Gestión de sesiones e identidades validando tokens JWT en el middleware de Hono."
                          : "Session and identity management validating JWT tokens in the Hono middleware."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staticl10n Showcase (Backend Focus) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                      Featured Backend Tooling
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Staticl10n Engine
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Un motor backend impulsado por IA para procesamiento intensivo de sitios estáticos, abstracción de crawling y orquestación de LLMs."
                        : "An AI-powered backend engine for intensive processing of static sites, crawling abstraction, and LLM orchestration."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Node.js", "TypeScript", "SQLite", "Playwright", "Cheerio", "Ollama API"].map((tech) => (
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
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">CLI Architecture</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Arquitectura modular en Node.js para flujos de trabajo en pipeline y procesamiento intensivo."
                          : "Modular Node.js architecture for pipeline workflows and intensive processing."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Playwright Crawler</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Automatización profunda para rastreo headless, abstracción de DOM y manipulación de AST."
                          : "Deep automation for headless crawling, DOM abstraction, and AST manipulation."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Local LLM Orchestration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Integración de API de Ollama para procesamiento semántico conservando perfectamente el DOM."
                          : "Ollama API integration for semantic processing perfectly preserving the DOM."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">SQLite Persistance</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Capa de datos con better-sqlite3 para estado persistente y sistema de caché de memoria transaccional."
                          : "Data layer with better-sqlite3 for persistent state and transactional memory cache system."}
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

      <Footer role={t.backendTitle} lang={lang} />
    </div>
  );
}
