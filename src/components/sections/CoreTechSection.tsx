import Image from "next/image";
import { Language, translations } from "@/lib/translations";

export default function CoreTechSection({ lang }: { lang: Language }) {
  const t = translations[lang];

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
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-sm text-brand-orange">{"// 04."}</span>
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
  );
}
