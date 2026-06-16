interface ResumeExperienceProps {
  lang: "es" | "en";
  title: string;
}

export default function ResumeExperience({ lang, title }: ResumeExperienceProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="space-y-8 text-slate-600 dark:text-slate-300 print:text-gray-800">
        
        <div className="print:break-inside-avoid">
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

        <div className="print:break-inside-avoid">
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

        <div className="print:break-inside-avoid">
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

        <div className="print:break-inside-avoid">
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
  );
}
