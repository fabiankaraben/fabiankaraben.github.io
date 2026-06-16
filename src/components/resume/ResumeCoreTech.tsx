interface ResumeCoreTechProps {
  lang: "es" | "en";
  title: string;
}

export default function ResumeCoreTech({ lang, title }: ResumeCoreTechProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-6 text-sm text-slate-600 dark:text-slate-300 print:text-gray-800 mb-6">
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

      <div className="text-sm text-slate-600 dark:text-slate-300 print:text-gray-800 mt-4 border-t border-slate-100 dark:border-slate-800/50 print:border-slate-200 pt-4">
        <span className="font-semibold text-slate-900 dark:text-slate-100 print:text-black mr-2">
          {lang === "es" ? "Metodologías y Habilidades Blandas:" : "Methodologies & Soft Skills:"}
        </span>
        {lang === "es" 
          ? "Agile / Scrum, Liderazgo Técnico, Trabajo en Equipo, Resolución de Problemas, Comunicación Asertiva, Arquitectura de Software."
          : "Agile / Scrum, Technical Leadership, Team Collaboration, Problem Solving, Assertive Communication, Software Architecture."}
      </div>
    </section>
  );
}
