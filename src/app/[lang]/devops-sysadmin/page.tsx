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
import TrajectorySection from "@/components/sections/TrajectorySection";
import FeaturedArticlesSection from "@/components/sections/FeaturedArticlesSection";
import ContactSection from "@/components/sections/ContactSection";
import { GithubIcon } from "@/components/Icons";

import { translations } from "@/lib/translations";

// Static image imports
import fkPortrait from "@/assets/fk.jpg";

export const metadata = {
  title: "Fabián Karaben | DevOps & SysAdmin",
  description: "Portfolio of Fabián Karaben, a DevOps & SysAdmin specializing in CI/CD, Kubernetes, Docker, and Linux Administration.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function DevOpsHome({ params }: { params: Promise<{ lang: string }> }) {
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
          status={t.statusDevops}
          title={t.devopsTitle}
          description={t.devopsDesc}
          resumeLink={`/${lang}/resume/devops-sysadmin`}
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
              <p>{t.aboutDevopsP1}</p>
              <p>{t.aboutDevopsP2}</p>
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
            
            {/* Wordsus Showcase */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-mono font-semibold">
                      Featured Cloud Infrastructure
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Wordsus Platform
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "Plataforma multi-capa construida con arquitectura Modular Monolith en Go, aprovisionada remotamente con Ansible y desplegada continuamente a Kubernetes (K3s) mediante flujos de trabajo GitOps con Argo CD."
                        : "Multi-layer platform built with a Modular Monolith architecture in Go, provisioned remotely with Ansible, and continuously deployed to Kubernetes (K3s) via GitOps workflows using Argo CD."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Ansible", "Kubernetes", "Argo CD", "Kustomize", "Sealed Secrets", "Go", "Tilt"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        href="https://github.com/wordsus/wordsus-infra"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Infra
                      </Link>
                      <Link
                        href="https://github.com/wordsus/wordsus-gitops"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitOps
                      </Link>
                      <Link
                        href="https://github.com/wordsus/wordsus-backend"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20"
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Backend
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Feature cards */}
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Ansible Automation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Aprovisionamiento automatizado de servidores remotos con instancias de K3s y Argo CD."
                          : "Automated provisioning of remote servers with K3s and Argo CD instances."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">GitOps CD Workflow</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Despliegue continuo declarativo gestionado por Argo CD sincronizando directamente con Git."
                          : "Declarative continuous delivery managed by Argo CD syncing directly from Git."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Kustomize Overlays</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Gestión de manifiestos y entornos (local, staging, prod) y seguridad con Sealed Secrets."
                          : "Manifest and environment management (local, staging, prod) and security with Sealed Secrets."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Modular Monolith</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "Backend Go escalable, con Tilt para desarrollo local ágil sobre Kubernetes."
                          : "Scalable Go backend, featuring Tilt for agile local development on Kubernetes."}
                      </p>
                    </div>
                  </div>
                </div>
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

      <Footer role={t.devopsTitle} lang={lang} />
    </div>
  );
}
