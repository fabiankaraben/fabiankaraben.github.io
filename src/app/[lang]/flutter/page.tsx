import Image from "next/image";
import Link from "next/link";
import { Terminal, Cpu, Layers, Server, Globe, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/sections/HeroSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CoreTechSection from "@/components/sections/CoreTechSection";
import TrajectorySection from "@/components/sections/TrajectorySection";
import FeaturedArticlesSection from "@/components/sections/FeaturedArticlesSection";
import ContactSection from "@/components/sections/ContactSection";
import { GithubIcon } from "@/components/Icons";

import { translations } from "@/lib/translations";

// Static image imports
import fkPortrait from "@/assets/fk.jpg";
import cineflow from "@/assets/projects/cineflow-featured.webp";
import pennyvault from "@/assets/projects/pennyvault-featured.webp";
import streamdesk from "@/assets/projects/streamdesk-featured.webp";

export const metadata = {
  title: "Fabián Karaben | Flutter Developer",
  description: "Portfolio of Fabián Karaben, a Flutter Developer specializing in high-performance, visually engaging mobile applications with Dart.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function FlutterHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam === "es" ? "es" : "en";
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />
      <Header lang={lang} />

      <main className="relative z-10 grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <HeroSection
          status={t.statusFlutter}
          title={t.flutterTitle}
          description={t.flutterDesc}
          resumeLink={`/${lang}/resume/flutter`}
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
              <p>{t.aboutFlutterP1}</p>
              <p>{t.aboutFlutterP2}</p>
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
            
            {/* CineFlow Showcase */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange dark:text-brand-orange text-xs font-mono font-semibold">
                      Featured Flutter Application
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      CineFlow
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Una aplicación inmersiva para explorar películas que incluye soporte offline, animaciones dinámicas y gestión de estado compleja con Riverpod."
                        : "A visually immersive movie explorer app featuring offline support, dynamic animations, and complex state management using Riverpod."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Flutter", "Dart", "Riverpod", "TMDB API", "Hive", "Freezed"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href="https://github.com/fabiankaraben/cineflow-app"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                      <Link
                        href="https://cineflow.fabka.workers.dev"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Feature cards */}
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Riverpod State</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Arquitectura reactiva y segura en tiempo de compilación para manejar estados complejos y dependencias."
                          : "Reactive and compile-safe architecture for handling complex states and dependencies."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">TMDB Integration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Consumo eficiente de API RESTful con modelos generados por Freezed y serialización JSON."
                          : "Efficient RESTful API consumption with Freezed-generated models and JSON serialization."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Hive Local Storage</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Base de datos NoSQL ultrarrápida para caché offline y persistencia de favoritos."
                          : "Lightning-fast NoSQL database for offline caching and favorites persistence."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Sliver UI & Hero</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Transiciones inmersivas, animaciones Hero y scrollbars personalizados usando Slivers."
                          : "Immersive transitions, Hero animations, and custom scrollbars using Slivers."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h3 className="text-lg font-mono text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-orange" />
                <span>{lang === "es" ? "Otras Aplicaciones Móviles" : "Other Mobile Applications"}</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                  title="PennyVault"
                  description={lang === "es"
                    ? "Aplicación de finanzas personales enfocada en privacidad y offline. Rastrea gastos y visualiza hábitos con hermosos gráficos en una interfaz limpia."
                    : "A privacy-first personal finance app with offline support. Tracks expenses and visualizes spending habits with beautiful charts in a clean 'Fintech' interface."}
                  image={pennyvault}
                  tags={["Flutter", "Provider", "Hive", "fl_chart"]}
                  links={[
                    { label: "Website", href: "https://pennyvault.fabka.workers.dev/" },
                    { label: "GitHub", href: "https://github.com/fabiankaraben/pennyvault-app" }
                  ]}
                />
                <ProjectCard
                  title="StreamDesk"
                  description={lang === "es"
                    ? "Un dashboard de atención al cliente optimizado para escritorio. Presenta interfaz dividida, simulación de chat y persistencia de historial."
                    : "A desktop-optimized customer support dashboard. Features a split-view interface, real-time chat simulation, and persistent chat history."}
                  image={streamdesk}
                  tags={["Flutter", "BLoC", "Hydrated BLoC"]}
                  links={[
                    { label: "Website", href: "https://streamdesk.fabka.workers.dev/" },
                    { label: "GitHub", href: "https://github.com/fabiankaraben/streamdesk-app" }
                  ]}
                />
              </div>
            </div>

          </div>
        </section>

        <CertificationsSection lang={lang} />
        <CoreTechSection lang={lang} />
        <TrajectorySection lang={lang} />
        <FeaturedArticlesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer role={t.flutterTitle} lang={lang} />
    </div>
  );
}
