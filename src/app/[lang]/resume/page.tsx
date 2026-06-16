import { translations } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";
import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const metadata = {
  title: "Fabián Karaben | Resume",
  description: "Resume / CV of Fabián Karaben, Full Stack Developer",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam === "es" ? "es" : "en";
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-slate-900 dark:selection:text-white print:bg-white print:text-black">
      {/* Navigation (Hidden on print) */}
      <div className="print:hidden">
        <Header lang={lang} />
      </div>

      <main className="relative z-10 grow w-full overflow-x-auto py-12 md:py-20 print:py-0 print:overflow-visible">
        <div className="mx-auto w-[850px] px-4 print:w-auto print:px-0">
          
          {/* Action Bar (Hidden on print) */}
          <div className="flex justify-between items-center mb-8 print:hidden">
            <Link href={`/${lang}`} className="text-sm font-medium text-slate-500 hover:text-brand-orange transition-colors">
              ← {t.backToHome || "Back to Home"}
            </Link>
            <PrintButton label={t.printResume} />
          </div>

          {/* Paper/Document Container */}
          <div className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-16 print:shadow-none print:border-none print:p-12 print:bg-white print:dark:bg-white">
          
          {/* Header section of CV */}
          <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8 print:border-slate-300">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 print:text-black">
              Fabián Karaben
            </h1>
            <p className="mt-2 text-xl font-medium text-brand-orange print:text-brand-orange">
              {t.fullStackTitle}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-y-3 gap-x-6 text-sm text-slate-600 dark:text-slate-400 print:text-gray-700 font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Argentina
              </span>
              <a href="mailto:fabiankaraben@gmail.com" className="flex items-center gap-2 hover:text-brand-orange">
                <Mail className="w-4 h-4" />
                fabiankaraben@gmail.com
              </a>
              <a href="https://linkedin.com/in/fabiankaraben" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
                <LinkedinIcon className="w-4 h-4" />
                linkedin.com/in/fabiankaraben
              </a>
              <a href="https://github.com/fabiankaraben" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
                <GithubIcon className="w-4 h-4" />
                github.com/fabiankaraben
              </a>
              <a href="https://fabiankaraben.github.io" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange">
                <Globe className="w-4 h-4" />
                fabiankaraben.github.io
              </a>
            </div>
          </header>

          {/* About / Profile */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
              {t.aboutTitle}
            </h2>
            <div className="space-y-5 text-slate-600 dark:text-slate-300 print:text-gray-800 leading-relaxed">
              <p>
                {lang === "es" 
                  ? "Desarrollador Full Stack con una sólida formación en infraestructura (DevOps), Node.js, Go y Java con Spring Boot. Certificado por AWS, especializado en automatización de sistemas de alto rendimiento. Busco unirme a un equipo como desarrollador Full Stack donde pueda aportar mi experiencia en arquitectura y mi capacidad para implementar sistemas robustos y eficientes."
                  : "Full Stack Developer with a strong background in infrastructure (DevOps), Node.js, Go, and Java with Spring Boot. AWS certified, specializing in the automation of high-performance systems. Looking to join a team as a Full Stack Developer where I can contribute my architectural expertise and ability to implement robust and efficient systems."}
              </p>
              
              <div className="p-4 rounded-lg bg-brand-orange/5 border border-brand-orange/20 print:bg-transparent print:border-brand-orange/40 print:p-3.5">
                <p className="font-medium text-slate-800 dark:text-slate-200 print:text-slate-900 flex flex-row items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>
                      {lang === "es" 
                        ? "Explora mis proyectos y trayectoria en mi portfolio:"
                        : "Explore my projects and background on my portfolio:"}
                    </span>
                  </span>
                  <a 
                    href={`https://fabiankaraben.github.io/${lang}`} 
                    className="text-brand-orange hover:underline font-bold" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    fabiankaraben.github.io
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
              {t.experienceTitle || "Experience"}
            </h2>
            <div className="space-y-8 text-slate-600 dark:text-slate-300 print:text-gray-800">
              
              <div>
                <div className="flex flex-row justify-between items-baseline mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 print:text-black">Freelance Full Stack Developer</h3>
                  <span className="text-sm font-medium text-brand-orange">Feb 2024 - {lang === "es" ? "Presente" : "Present"} | Remote</span>
                </div>
                <ul className="list-disc list-outside space-y-1 ml-4 leading-relaxed marker:text-brand-orange">
                  {lang === "es" ? (
                    <>
                      <li>Desarrollé servicios backend con Spring Boot, Node.js y Go, creando APIs robustas, eficientes y seguras.</li>
                      <li>Desarrollé aplicaciones full-stack con integración frontend con Flutter, React y Next.js.</li>
                    </>
                  ) : (
                    <>
                      <li>Developed backend services with Spring Boot, Node.js, and Go, creating robust, efficient, and secure APIs.</li>
                      <li>Developed full-stack applications with frontend integration using Flutter, React, and Next.js.</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <div className="flex flex-row justify-between items-baseline mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 print:text-black">SysAdmin / DevOps</h3>
                  <span className="text-sm font-medium text-brand-orange">May 2018 - Oct 2020 | Universidad Nacional de Misiones, Arg.</span>
                </div>
                <ul className="list-disc list-outside space-y-1 ml-4 leading-relaxed marker:text-brand-orange">
                  {lang === "es" ? (
                    <li>Configuré software web para el funcionamiento de la universidad, utilizando Proxmox, LXC, Docker, Ansible y Apache, en el Datacenter propio de la universidad.</li>
                  ) : (
                    <li>Configured web software for the university's operations, utilizing Proxmox, LXC, Docker, Ansible, and Apache in the university's own Datacenter.</li>
                  )}
                </ul>
              </div>

              <div>
                <div className="flex flex-row justify-between items-baseline mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 print:text-black">Full Stack Developer</h3>
                  <span className="text-sm font-medium text-brand-orange">Jun 2013 - Jun 2014 | Eventdoo (CABA, Arg.)</span>
                </div>
                <ul className="list-disc list-outside space-y-1 ml-4 leading-relaxed marker:text-brand-orange">
                  {lang === "es" ? (
                    <li>Desarrollé funcionalidades para la plataforma utilizando PHP, HTML y JavaScript.</li>
                  ) : (
                    <li>Developed platform features using PHP, HTML, and JavaScript.</li>
                  )}
                </ul>
              </div>

              <div>
                <div className="flex flex-row justify-between items-baseline mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 print:text-black">Full Stack Developer & SysAdmin</h3>
                  <span className="text-sm font-medium text-brand-orange">Feb 2009 - Dec 2017 | HostSiete (Personal Entrepreneurship)</span>
                </div>
                <ul className="list-disc list-outside space-y-1 ml-4 leading-relaxed marker:text-brand-orange">
                  {lang === "es" ? (
                    <>
                      <li>Emprendimiento enfocado a la venta de servicios de alojamiento web.</li>
                      <li>Trabajé desarrollando el área de clientes con PHP y JavaScript y configurando servidores con Linux y cPanel.</li>
                    </>
                  ) : (
                    <>
                      <li>Entrepreneurship focused on selling web hosting services.</li>
                      <li>Worked developing the client area with PHP and JavaScript and configuring servers with Linux and cPanel.</li>
                    </>
                  )}
                </ul>
              </div>

            </div>
          </section>

          {/* Core Tech & Skills */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
              {t.coreTechTitle}
            </h2>
            <div className="grid grid-cols-4 gap-6 text-sm text-slate-600 dark:text-slate-300 print:text-gray-800">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 print:text-black mb-2 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">Backend & Cloud</h3>
                <ul className="space-y-1">
                  <li>Java / Spring Boot</li>
                  <li>Go (Golang)</li>
                  <li>Node.js / Express</li>
                  <li>AWS / Cloudflare</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 print:text-black mb-2 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">Frontend</h3>
                <ul className="space-y-1">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 print:text-black mb-2 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">Data & Storage</h3>
                <ul className="space-y-1">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Prisma ORM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 print:text-black mb-2 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">DevOps & Tooling</h3>
                <ul className="space-y-1">
                  <li>Docker / Kubernetes</li>
                  <li>Linux Admin</li>
                  <li>CI/CD Pipelines</li>
                  <li>Git / GitHub Actions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
              {t.certificationsTitle}
            </h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 print:text-gray-800 list-disc list-inside marker:text-brand-orange">
              <li>AWS Certified Cloud Practitioner</li>
              <li>{lang === "es" ? "Adicionales en progreso" : "Additional certifications in progress"}</li>
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
              {lang === "es" ? "Idiomas" : "Languages"}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300 print:text-gray-800">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">
                  {lang === "es" ? "Español:" : "Spanish:"}
                </span>
                <span className="text-sm font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full print:bg-transparent print:px-0">
                  {lang === "es" ? "Nativo" : "Native"}
                </span>
              </div>
              <span className="text-slate-300 dark:text-slate-600 print:text-slate-400 inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">
                  {lang === "es" ? "Inglés:" : "English:"}
                </span>
                <span className="text-sm font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full print:bg-transparent print:px-0">
                  {lang === "es" ? "Intermedio - Conversacional" : "Intermediate - Conversational"}
                </span>
              </div>
            </div>
          </section>

        </div>
        </div>
      </main>

      {/* Footer (Hidden on print) */}
      <div className="print:hidden mt-auto">
        <Footer />
      </div>
    </div>
  );
}
