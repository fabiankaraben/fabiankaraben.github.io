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
  const lang = (langParam || "en") as "en" | "es";
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
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="CineFlow"
                  description={lang === "es"
                    ? "Una aplicación inmersiva para explorar películas que incluye soporte offline, animaciones dinámicas y gestión de estado compleja con Riverpod."
                    : "A visually immersive movie explorer app featuring offline support, dynamic animations, and complex state management using Riverpod."}
                  image={cineflow}
                  tags={["Flutter", "Riverpod", "TMDB API", "Hive"]}
                  links={[
                    { label: "Website", href: "https://cineflow.fabka.workers.dev" },
                    { label: "GitHub", href: "https://github.com/fabiankaraben/cineflow-app" }
                  ]}
                />
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
        <FeaturedArticlesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer role={t.flutterTitle} lang={lang} />
    </div>
  );
}
