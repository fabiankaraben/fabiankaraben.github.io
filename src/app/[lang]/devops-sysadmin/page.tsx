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

export const metadata = {
  title: "Fabián Karaben | DevOps Engineer & SysAdmin",
  description: "Portfolio of Fabián Karaben, a DevOps Engineer & SysAdmin specializing in CI/CD, Kubernetes, Docker, and Linux Administration.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function DevOpsHome({ params }: { params: Promise<{ lang: string }> }) {
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
          status={t.statusDevops}
          title={t.devopsTitle}
          description={t.devopsDesc}
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
            {/* Kubernetes Showcase (Placeholder) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/5">
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-mono font-semibold">
                      Featured Infrastructure
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Kubernetes Orchestration
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "[Placerholder] Orquestación de contenedores a gran escala con alta disponibilidad."
                        : "[Placeholder] Large-scale container orchestration with high availability."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Kubernetes", "Helm", "Istio", "Prometheus", "Grafana"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Cluster Management</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Gestión de múltiples clusters en entornos híbridos."
                          : "[Placeholder] Multi-cluster management in hybrid environments."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Service Mesh</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Implementación de Istio para seguridad y observabilidad."
                          : "[Placeholder] Istio implementation for security and observability."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CI/CD Showcase (Placeholder) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row-reverse gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
                      Featured Pipeline
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      CI/CD Automation
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "[Placeholder] Pipelines de integración y despliegue continuo altamente optimizados."
                        : "[Placeholder] Highly optimized continuous integration and deployment pipelines."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-indigo-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Automated Testing</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Pruebas unitarias y de integración automatizadas."
                          : "[Placeholder] Automated unit and integration testing."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                        <Server className="w-5 h-5 text-sky-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">GitOps</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Gestión de despliegues basados en Git con ArgoCD."
                          : "[Placeholder] Git-based deployment management with ArgoCD."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure as Code (Placeholder) */}
            <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                      Featured Tooling
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                      Infrastructure as Code
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {lang === "es"
                        ? "[Placeholder] Definición y provisión de infraestructura a través de código."
                        : "[Placeholder] Infrastructure definition and provisioning through code."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Terraform", "Ansible", "AWS", "Linux"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-teal-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Terraform Modules</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Módulos reutilizables para aprovisionamiento AWS."
                          : "[Placeholder] Reusable modules for AWS provisioning."}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Ansible Roles</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {lang === "es"
                          ? "[Placeholder] Automatización de configuración de servidores Linux."
                          : "[Placeholder] Linux server configuration automation."}
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
        <FeaturedArticlesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer role={t.devopsTitle} lang={lang} />
    </div>
  );
}
