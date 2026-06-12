import Image from "next/image";
import Link from "next/link";
import { Terminal, Cpu, Layers, Server, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { getAllPosts } from "@/lib/blog";
import { cookies } from "next/headers";
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
  title: "Fabián Karaben | Full Stack Engineer",
  description: "Portfolio of Fabián Karaben, a Full Stack Engineer specializing in Next.js, React, TypeScript, Go, Java, and AWS cloud solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function FullStackHome() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "es";
  const t = translations[lang];

  const allPosts = getAllPosts(lang);
  const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);

  const skills = [
    { name: "TypeScript", desc: "Next.js, React, Tailwind CSS", icon: "typescript" },
    { name: "Go", desc: lang === "es" ? "Gin, Echo, WebSockets, Chi" : "Gin, Echo, WebSockets, Chi", icon: "golang" },
    { name: "Java", desc: lang === "es" ? "Empresarial, Robustez, POO" : "Enterprise, Robustness, OOP", icon: "java" },
    { name: "Spring Boot", desc: lang === "es" ? "Framework, Inyección de Dependencias" : "Framework, Dependency Injection", icon: "spring" },
    { name: "AWS", desc: "EC2, S3, CloudFront, Lambda", icon: "aws" },
    { name: "Cloudflare", desc: "Workers, KV, D1, R2", icon: "cloudflare" },
    { name: "Docker", desc: lang === "es" ? "Portabilidad, Contenedores" : "Portability, Containerization", icon: "docker" },
    { name: "Kubernetes", desc: lang === "es" ? "Orquestación, Escalabilidad" : "Orchestration, Scalability", icon: "kubernetes" },
    { name: "PostgreSQL", desc: lang === "es" ? "Extensibilidad, BD Relacional" : "Extensibility, Relational DB", icon: "postgresql" },
    { name: "MongoDB", desc: lang === "es" ? "Escalabilidad, Almacén de Documentos NoSQL" : "Scalability, NoSQL Document Store", icon: "mongodb" },
    { name: "Redis", desc: lang === "es" ? "Caché en Memoria, Rendimiento" : "In-Memory Caching, Performance", icon: "redis" },
    { name: "SQLite", desc: lang === "es" ? "Base de Datos sin Servidor, D1, Turso" : "Serverless DB, D1, Turso", icon: "sqlite" },
    { name: "Python", desc: "FastAPI, Django, Flask", icon: "python" },
    { name: "Hibernate", desc: lang === "es" ? "ORM JPA, Vinculación de Datos" : "JPA ORM, Data Binding", icon: "hibernate" },
    { name: "Maven", desc: lang === "es" ? "Gestión de Construcción y Dependencias" : "Build & Dependency Management", icon: "maven" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />
      <Header lang={lang} />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-900 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.statusFullStack}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Fabián Karaben
            <span className="block mt-3 bg-gradient-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent">
              {t.fullStackTitle}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            {t.fullStackDesc}
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="https://github.com/fabiankaraben"
              target="_blank"
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/fabiankaraben"
              target="_blank"
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:border-brand-orange/50 text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 01.</span>
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

        {/* Certifications Section */}
        <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 02.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.certificationsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              dateInfo={lang === "es" ? "Emitido Oct 2024 · Expora Oct 2027" : "Issued Oct 2024 · Expires Oct 2027"}
              iconName="aws"
              verifyUrl="https://www.credly.com/badges/93cee039-21f8-4bd2-9352-e0c977897905/public_url"
            />
            <CertificationCard
              title="Oracle Java SE 21 Developer Professional: 1Z0-830"
              issuer="Udemy"
              dateInfo={lang === "es" ? "Emitido Feb 2026" : "Issued Feb 2026"}
              iconName="udemy"
              verifyUrl="https://www.udemy.com/certificate/UC-a0a247a5-02c1-4ef2-ac9b-d74c751f5eff/"
            />
            <CertificationCard
              title="Spring Certified Professional"
              issuer="Udemy"
              dateInfo={lang === "es" ? "Emitido Mar 2026" : "Issued Mar 2026"}
              iconName="udemy"
              verifyUrl="https://www.udemy.com/certificate/UC-5c3103ab-4a9e-4cf0-8ee6-f5c2ad966072/"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 03.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.coreTechTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-slate-900/80 rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-orange/30 hover:bg-slate-200/50 dark:hover:bg-slate-900/40"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 relative">
                  <Image
                    src={`/icons/${skill.icon}.svg`}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{skill.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-sans">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">// 04.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.featuredProjects}
            </h2>
          </div>

          <div className="space-y-16">
            {/* Real World Projects First */}
            <div>
              <h3 className="text-lg font-mono text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-orange" />
                <span>{t.interactivePwas}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Wordsus"
                  description={lang === "es"
                    ? "Tu biblioteca en la nube personal. Un lector en el navegador unificado para PDFs y EPUBs con rendimiento nativo. Interfaz fluida combinada con un backend ligero en Go."
                    : "Your Personal Cloud Library. A unified, browser-based reader for PDFs and EPUBs with native-like performance. High-impact frontend UI meets lightweight Go backend."}
                  image={wordsus}
                  tags={["PWA", "WebSockets", "Canvas", "Go", "PDF Reader", "EPUB Reader"]}
                  links={[
                    { label: "Website", href: "https://wordsus.com" },
                    { label: "GitHub", href: "https://github.com/orgs/wordsus/repositories" },
                  ]}
                />
                <ProjectCard
                  title="XeoContext"
                  description={lang === "es"
                    ? "La fuente de verdad para el diseño de sistemas. Visor unificado para definiciones Markdown, OpenAPI y AsyncAPI. Enrutamiento y componentes optimizados."
                    : "The Source of Truth for System Design. Unified viewer for Markdown, OpenAPI, and AsyncAPI definitions. Optimized frontend routing and components."}
                  image={xeoContext}
                  tags={["Docker", "Markdown", "OpenAPI", "AsyncAPI", "Next.js"]}
                  links={[
                    { label: "Website", href: "https://xeocontext.com" },
                    { label: "GitHub", href: "https://github.com/xeost/xeocontext" },
                  ]}
                />
                <ProjectCard
                  title="XeoCast"
                  description={lang === "es"
                    ? "Un sistema para generar episodios de podcast con IA. Cuenta con una API basada en Cloudflare, configuración interactiva y procesamiento automático de video."
                    : "A system to generate podcast episodes with AI. Features a Cloudflare-based API, interactive configuration, and automated video processing."}
                  image={xeoCast}
                  tags={["TypeScript", "Hono", "Python", "Cloudflare", "Gemini", "FFmpeg"]}
                  links={[
                    { label: "Website", href: "https://xeocast.com" },
                    { label: "GitHub", href: "https://github.com/orgs/xeocast/repositories" },
                  ]}
                />
              </div>
            </div>

            {/* Monolith & EDA Banking Section */}
            <div>
              <h3 className="text-lg font-mono text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-orange" />
                <span>{t.enterpriseBackend}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Core Banking Platform"
                  description={lang === "es"
                    ? "Un sistema empresarial distribuido y altamente escalable que utiliza una Arquitectura Orientada a Eventos (EDA). Implementa transacciones distribuidas y Base de Datos por Servicio."
                    : "A highly scalable, distributed enterprise system using an Event-Driven Architecture (EDA). Implements distributed transactions and Database-per-Service."}
                  image={coreBankingPlatform}
                  tags={["Java 21", "Spring Boot 3.3", "Apache Kafka", "Saga Pattern", "Microservices"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/core-banking-platform" }]}
                />
                <ProjectCard
                  title="Core Banking API"
                  description={lang === "es"
                    ? "Un backend bancario monolítico construido con Java 21, Spring Boot y Arquitectura Hexagonal. Cuenta con transacciones ACID robustas e idempotencia controlada con Redis."
                    : "A monolithic banking backend built with Java 21, Spring Boot, and Hexagonal Architecture. Features robust ACID transactions and idempotency controlled with Redis."}
                  image={coreBankingApi}
                  tags={["Java 21", "Spring Boot 3", "RabbitMQ", "Hexagonal", "PostgreSQL", "Redis"]}
                  links={[{ label: "GitHub", href: "https://github.com/fabiankaraben/core-banking-api" }]}
                />
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

        {/* Featured Blog Articles Section */}
        {featuredPosts.length > 0 && (
          <section id="blog" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-sm text-brand-orange">// 05.</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
                {t.featuredArticles}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200 dark:border-slate-900 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <span className="font-mono text-xs text-slate-500 mb-2">{post.pubDate}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors duration-300 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
                      {post.description}
                    </p>
                    <span className="mt-auto text-brand-orange group-hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                      {t.readArticle} &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-900 hover:border-brand-orange/40 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
              >
                {t.seeAllArticles} &rarr;
              </Link>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60 text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="font-mono text-sm text-brand-orange">// 06.</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.getInTouch}
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-10">
            {t.contactFsDesc}
          </p>

          <Link
            href="https://linkedin.com/in/fabiankaraben"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-4.5 border border-brand-orange/40 text-base font-semibold rounded-xl text-white bg-brand-orange hover:bg-brand-orange-hover transition-all duration-300 shadow-lg shadow-brand-orange/20"
          >
            <LinkedinIcon className="w-5 h-5" />
            {t.connectLinkedin}
          </Link>
        </section>
      </main>

      <Footer role={t.fullStackTitle} />
    </div>
  );
}
