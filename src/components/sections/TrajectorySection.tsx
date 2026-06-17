"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { translations } from "@/lib/translations";
import { Cloud, Smartphone, MonitorSmartphone, Server, Terminal, HardDrive, Monitor, X, FileText } from "lucide-react";

interface TrajectorySectionProps {
  lang: "en" | "es";
}

const trajectoryData = [
  {
    id: "fs-devops-2024",
    year: "2024 – Present",
    title: {
      en: "Full Stack Developer & DevOps Freelance",
      es: "Full Stack Developer & DevOps Freelance",
    },
    summary: {
      en: "Building full-stack apps and backend services as a remote freelancer. AWS certified, deploying across cloud platforms.",
      es: "Desarrollo de aplicaciones full-stack y servicios backend como freelancer remoto. Certificado AWS, desplegando en múltiples plataformas cloud.",
    },
    fullDescription: {
      en: "I decided to focus on my favorite layers of software development: backend and cloud platforms. I obtained my first official AWS certification (AWS Certified Cloud Practitioner) and pivoted toward backend and DevOps projects as a remote freelancer. Market demand led me back to full-stack development, this time with TypeScript, Next.js, and Tailwind CSS, deploying primarily on Cloudflare and Vercel. In parallel, I have developed backend systems with Go, Java (Spring Boot), and Node.js, deploying on AWS and Kubernetes. With over 20 years of experience, my profile allows me to tackle a wide variety of projects, and my most up-to-date knowledge centers on Full Stack development with modern technologies like Next.js, as well as the implementation of DevOps deployment pipelines on AWS, Cloudflare, and Vercel.",
      es: "Decidí enfocarme en mis capas favoritas del desarrollo de software: backend y plataforma cloud. Obtuve mi primera certificación oficial de AWS (AWS Certified Cloud Practitioner) y me orienté hacia proyectos de backend y DevOps en modalidad freelance remota. La demanda del mercado me llevó nuevamente al desarrollo full stack, esta vez con TypeScript, Next.js y Tailwind CSS, desplegando principalmente en Cloudflare y Vercel. En paralelo, he desarrollado sistemas backend con Go, Java (Spring Boot) y Node.js, desplegando en AWS y Kubernetes. Con más de 20 años de experiencia, mi perfil me permite abordar una gran variedad de proyectos, y mi conocimiento más actualizado se centra en el desarrollo Full Stack con tecnologías modernas como Next.js, así como en la implementación de pipelines de despliegue DevOps en AWS, Cloudflare y Vercel.",
    },
    tags: ["TypeScript", "Next.js", "Go", "Java", "Spring Boot", "Node.js", "AWS", "Kubernetes", "CI/CD"],
    icon: Cloud,
  },
  {
    id: "openpass-2022",
    year: "2022 – 2024",
    title: {
      en: "Sr. Flutter Developer — OpenPass",
      es: "Sr. Flutter Developer — OpenPass",
    },
    summary: {
      en: "Developed an internal management dashboard and maintained a white-label Fintech virtual wallet used by multiple companies.",
      es: "Desarrollé un panel interno de gestión y mantuve una billetera virtual Fintech marca blanca utilizada por múltiples empresas.",
    },
    fullDescription: {
      en: "I worked remotely for OpenPass, an Argentine company that develops a white-label virtual wallet used by other companies. My role encompassed both the development in Flutter of an internal management and configuration panel and the resolution of bugs and evolution of the virtual wallet that already existed at the time I joined.",
      es: "Trabajé en modalidad remota para OpenPass, una empresa argentina que desarrolla una billetera virtual de marca blanca utilizada por otras compañías. Mi rol abarcó tanto el desarrollo en Flutter de un panel interno de gestión y configuración como la resolución de bugs y la evolución de la billetera virtual que ya existía al momento de mi incorporación.",
    },
    tags: ["Flutter", "Dart", "Fintech", "REST API"],
    icon: Smartphone,
  },
  {
    id: "flutter-freelance-2020",
    year: "2020 – 2022",
    title: {
      en: "Flutter Developer Freelance",
      es: "Desarrollador Flutter Freelance",
    },
    summary: {
      en: "Early adopter of Flutter, building cross-platform mobile apps for clients on Freelancer.com and Workana.",
      es: "Early adopter de Flutter, construyendo aplicaciones móviles multiplataforma para clientes en Freelancer.com y Workana.",
    },
    fullDescription: {
      en: "I entered the world of mobile development with Flutter, being an early adopter of the technology. During this period, I completed various projects for clients through platforms like Freelancer.com and Workana, consolidating my experience in cross-platform application development.",
      es: "Me introduje en el mundo del desarrollo mobile con Flutter, siendo un early adopter de la tecnología. Durante este período realicé diversos proyectos para clientes a través de plataformas como Freelancer.com y Workana, consolidando mi experiencia en desarrollo de aplicaciones multiplataforma.",
    },
    tags: ["Flutter", "Dart", "Go", "Firebase", "GCP"],
    icon: MonitorSmartphone,
  },
  {
    id: "sysadmin-unam-2018",
    year: "2018 – 2020",
    title: {
      en: "SysAdmin / DevOps — Universidad Nacional de Misiones",
      es: "SysAdmin / DevOps — Universidad Nacional de Misiones",
    },
    summary: {
      en: "Managed all internal university systems with Proxmox/LXC containers, automating infrastructure with Ansible.",
      es: "Gestioné todos los sistemas internos de la universidad con contenedores Proxmox/LXC, automatizando infraestructura con Ansible.",
    },
    fullDescription: {
      en: "Back in Posadas, my previous experience in server configuration opened the doors for me to work as a SysAdmin at the public university of my province. My task consisted of configuring and maintaining all internal systems of the institution (student management, accounting, audits, library, among others), using Proxmox servers with LXC instances, deploying services on Apache and Tomcat, and automating infrastructure using Ansible playbooks.",
      es: "De regreso en Posadas, mi experiencia previa en configuración de servidores me abrió las puertas para trabajar como SysAdmin en la universidad pública de mi provincia. Mi tarea consistió en configurar y mantener todos los sistemas internos de la institución (gestión de alumnos, contabilidad, auditorías, biblioteca, entre otros), utilizando servidores Proxmox con instancias LXC, desplegando servicios sobre Apache y Tomcat, y automatizando la infraestructura mediante playbooks de Ansible.",
    },
    tags: ["Proxmox", "LXC", "Ansible", "Apache", "Tomcat", "Linux"],
    icon: Server,
  },
  {
    id: "eventdoo-2013",
    year: "2013 – 2014",
    title: {
      en: "Full Stack Developer — Eventdoo",
      es: "Full Stack Developer — Eventdoo",
    },
    summary: {
      en: "Built the internal admin panel and data analytics dashboard for an event ticketing startup.",
      es: "Construí el panel de administración interno y el dashboard de analítica de datos para una startup de venta de tickets.",
    },
    fullDescription: {
      en: "While living in Buenos Aires and still running my business, I worked part-time at Eventdoo, a startup dedicated to event ticketing. My main responsibility was the development of the internal administration and data analytics panel, using PHP and the Yii framework.",
      es: "Mientras residía en Buenos Aires y aún mantenía mi emprendimiento, trabajé en modalidad part-time en Eventdoo, una startup dedicada a la venta de tickets para eventos. Mi responsabilidad principal fue el desarrollo del panel interno de administración y analítica de datos, utilizando PHP y el framework Yii.",
    },
    tags: ["PHP", "Yii Framework", "Analytics"],
    icon: Terminal,
  },
  {
    id: "hostsiete-2009",
    year: "2009 – 2017",
    title: {
      en: "Full Stack Developer & SysAdmin — HostSiete",
      es: "Full Stack Developer & SysAdmin — HostSiete",
    },
    summary: {
      en: "Founded and operated a web hosting business for nearly a decade. Built a full client portal with automated server provisioning.",
      es: "Fundé y operé un negocio de web hosting durante casi una década. Construí un portal de clientes con aprovisionamiento automatizado de servidores.",
    },
    fullDescription: {
      en: "I founded my own web hosting, VPS, and domain registration business. Throughout this nearly decade-long adventure, I gained extensive experience in cPanel server configuration, security, and infrastructure provider management like OVH. Additionally, I fully developed the client area: a system that managed support tickets, expirations, payments, and renewals, connecting directly with cPanel servers to create, suspend, or cancel accounts automatically without manual intervention. In 2017, I decided to close the business, transferring my client portfolio to a reputable Argentine company with similar services and pricing.",
      es: "Fundé mi propio negocio de venta de servicios de web hosting, VPS y registro de dominios. A lo largo de esta aventura de casi una década, adquirí amplia experiencia en configuración de servidores cPanel, seguridad y gestión de proveedores de infraestructura como OVH. Además, desarrollé íntegramente el área de clientes: un sistema que gestionaba tickets de soporte, vencimientos, pagos y renovaciones, conectándose directamente con los servidores cPanel para dar de alta, suspender o cancelar cuentas de forma automatizada y sin intervención manual. En 2017 decidí cerrar el emprendimiento cediendo mi cartera de clientes a una empresa argentina de buena reputación, con servicios y precios similares a los que ofrecía.",
    },
    tags: ["PHP", "JavaScript", "cPanel", "Linux", "OVH", "Security"],
    icon: HardDrive,
  },
  {
    id: "freelance-web-2005",
    year: "2005 – 2009",
    title: {
      en: "Freelance Web Developer",
      es: "Desarrollador Web Freelance",
    },
    summary: {
      en: "Launched my career building websites for local clients, growing organically through word-of-mouth referrals.",
      es: "Comencé mi carrera construyendo sitios web para clientes locales, creciendo orgánicamente por recomendaciones.",
    },
    fullDescription: {
      en: "I started my career building websites in my hometown. After delivering my first project, word of mouth generated an organic and constant demand for new work. I worked with the predominant technologies of the time: PHP, HTML, CSS, jQuery, Bootstrap, and WordPress, deploying on shared hosting services.",
      es: "Comencé mi carrera desarrollando sitios web en mi ciudad natal. Tras entregar mi primer proyecto, el boca a boca generó una demanda orgánica y constante de nuevos trabajos. Trabajé con las tecnologías predominantes de la época: PHP, HTML, CSS, jQuery, Bootstrap y WordPress, desplegando en servicios de hosting compartido.",
    },
    tags: ["PHP", "HTML", "CSS", "jQuery", "Bootstrap", "WordPress"],
    icon: Monitor,
  },
];

export default function TrajectorySection({ lang }: TrajectorySectionProps) {
  const t = translations[lang];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="trajectory" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-sm text-brand-orange">{"// 05."}</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
            {t.trajectoryTitle}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200/80 dark:bg-slate-800/80 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {trajectoryData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center group">

                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 group-hover:border-brand-orange/20 group-hover:shadow-brand-orange/20 z-10">
                    <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 group-hover:-translate-y-1 text-left">
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold text-brand-orange bg-brand-orange/10 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {item.title[lang]}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4">
                        {item.summary[lang]}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Read More Button */}
          <div className="mt-20 text-center relative z-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FileText className="w-4 h-4" />
              {t.readFullTrajectory}
            </button>
          </div>
        </div>
      </section>

      {/* Modal rendered via Portal to break out of stacking context */}
      {mounted && isModalOpen && createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {t.trajectoryTitle}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                aria-label={t.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-10">
              {trajectoryData.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={`modal-${item.id}`} className="relative pl-6 md:pl-8 border-l border-brand-orange/20">
                    <div className="absolute left-0 top-1 transform -translate-x-1/2 bg-white dark:bg-slate-900 rounded-full border-4 border-white dark:border-slate-900">
                      <div className="w-3 h-3 bg-brand-orange rounded-full" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-brand-orange" />
                      <span className="text-xs font-mono font-bold text-brand-orange">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                      {item.title[lang]}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-[15px]">
                      {item.fullDescription[lang]}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
