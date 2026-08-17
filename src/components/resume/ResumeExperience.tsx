interface ResumeExperienceProps {
  lang: "es" | "en";
  title: string;
  includeItems?: string[];
}

const experiencesData = [
  {
    id: "freelance-fs-devops",
    title: { en: "DevOps/SRE & Cloud Engineer (Freelance)", es: "DevOps/SRE & Cloud Engineer (Freelance)" },
    date: { en: "Feb 2024 - Present", es: "Feb 2024 - Presente" },
    location: { en: "Remote", es: "Remoto" },
    bullets: {
      en: [
        "Designed and implemented CI/CD pipelines deploying containerized workloads to Kubernetes (K3s) via GitOps workflows using Argo CD and Kustomize.",
        "Automated remote server provisioning with Ansible playbooks, managing infrastructure across AWS, Cloudflare, and Vercel.",
        "Obtained AWS Certified Cloud Practitioner certification; trained toward Solutions Architect Associate, Developer Associate, and CKA certifications."
      ],
      es: [
        "Diseñé e implementé pipelines CI/CD desplegando cargas de trabajo en contenedores sobre Kubernetes (K3s) mediante flujos GitOps con Argo CD y Kustomize.",
        "Automaticé el aprovisionamiento remoto de servidores con playbooks de Ansible, gestionando infraestructura en AWS, Cloudflare y Vercel.",
        "Obtuve la certificación AWS Certified Cloud Practitioner; me formé en las certificaciones Solutions Architect Associate, Developer Associate y CKA."
      ]
    }
  },
  {
    id: "sr-flutter",
    title: { en: "Sr. Flutter Developer", es: "Sr. Flutter Developer" },
    date: { en: "Oct 2022 - Feb 2024", es: "Oct 2022 - Feb 2024" },
    location: { en: "OpenPass | Remote", es: "OpenPass | Remoto" },
    bullets: {
      en: [
        "Developed an internal management and configuration dashboard in Flutter for a white-label Fintech wallet used by multiple companies.",
        "Resolved production bugs and delivered feature enhancements on the existing Flutter-based virtual wallet application."
      ],
      es: [
        "Desarrollé un panel interno de gestión y configuración en Flutter para una billetera Fintech marca blanca utilizada por múltiples empresas.",
        "Resolví bugs de producción y entregué mejoras de funcionalidades en la aplicación existente de billetera virtual construida con Flutter."
      ]
    }
  },
  {
    id: "freelance-flutter",
    title: { en: "Flutter Developer (Freelance)", es: "Desarrollador Flutter Freelance" },
    date: { en: "Nov 2020 - Oct 2022", es: "Nov 2020 - Oct 2022" },
    location: { en: "Remote", es: "Remoto" },
    bullets: {
      en: [
        "Built cross-platform mobile applications with Flutter for clients on Freelancer.com and Workana as an early adopter of the framework.",
        "Integrated backends using Go, TypeScript, GCP, and Firebase, handling authentication, real-time data sync, and push notifications."
      ],
      es: [
        "Construí aplicaciones móviles multiplataforma con Flutter para clientes en Freelancer.com y Workana siendo un early adopter del framework.",
        "Integré backends utilizando Go, TypeScript, GCP y Firebase, manejando autenticación, sincronización de datos en tiempo real y notificaciones push."
      ]
    }
  },
  {
    id: "sysadmin-unam",
    title: { en: "DevOps Engineer", es: "DevOps Engineer" },
    date: { en: "May 2018 - Oct 2020", es: "May 2018 - Oct 2020" },
    location: { en: "Universidad Nacional de Misiones | Misiones, Argentina", es: "Universidad Nacional de Misiones | Misiones, Argentina" },
    bullets: {
      en: [
        "Automated server provisioning and deployment workflows with Ansible playbooks, ensuring reproducible configurations and high availability across all institutional services.",
        "Managed containerized environments on Proxmox with LXC instances, deploying and maintaining critical university systems (student management, accounting, auditing, library) on Apache and Tomcat."
      ],
      es: [
        "Automaticé el aprovisionamiento de servidores y los flujos de despliegue con playbooks de Ansible, asegurando configuraciones reproducibles y alta disponibilidad en todos los servicios institucionales.",
        "Gestioné entornos en contenedores sobre Proxmox con instancias LXC, desplegando y manteniendo sistemas universitarios críticos (gestión de alumnos, contabilidad, auditorías, biblioteca) sobre Apache y Tomcat."
      ]
    }
  },
  {
    id: "fs-eventdoo",
    title: { en: "Full Stack Developer (Part-Time)", es: "Full Stack Developer (Part-Time)" },
    date: { en: "Jun 2013 - Jun 2014", es: "Jun 2013 - Jun 2014" },
    location: { en: "Eventdoo | CABA, Argentina", es: "Eventdoo | CABA, Argentina" },
    bullets: {
      en: [
        "Developed the internal administration panel and data analytics dashboard for an event ticketing startup, using PHP and the Yii framework."
      ],
      es: [
        "Desarrollé el panel de administración interno y el dashboard de analítica de datos para una startup de venta de tickets para eventos, usando PHP y el framework Yii."
      ]
    }
  },
  {
    id: "fs-hostsiete",
    title: { en: "Infrastructure & Automation Engineer", es: "Infrastructure & Automation Engineer" },
    date: { en: "Feb 2009 - Dec 2017", es: "Feb 2009 - Dic 2017" },
    location: { en: "HostSiete (Personal Entrepreneurship)", es: "HostSiete (Emprendimiento Propio)" },
    bullets: {
      en: [
        "Founded and operated a web hosting, VPS, and domain registration business for nearly a decade, managing the complete infrastructure lifecycle.",
        "Built a fully automated account lifecycle system that interfaced directly with cPanel servers to provision, suspend, and terminate accounts without manual intervention.",
        "Acquired deep expertise in Linux server provisioning, security hardening, cPanel configuration, and infrastructure provider management (OVH)."
      ],
      es: [
        "Fundé y operé un negocio de web hosting, VPS y registro de dominios durante casi una década, gestionando el ciclo de vida completo de la infraestructura.",
        "Construí un sistema completamente automatizado para el ciclo de vida de cuentas que se conectaba directamente con servidores cPanel para aprovisionar, suspender y terminar cuentas sin intervención manual.",
        "Adquirí gran experiencia en aprovisionamiento de servidores Linux, hardening de seguridad, configuración de cPanel y gestión de proveedores de infraestructura (OVH)."
      ]
    }
  },
  {
    id: "freelance-web",
    title: { en: "Freelance Web Developer", es: "Desarrollador Web Freelance" },
    date: { en: "Jul 2005 - Feb 2009", es: "Jul 2005 - Feb 2009" },
    location: { en: "Posadas, Misiones, Argentina", es: "Posadas, Misiones, Argentina" },
    bullets: {
      en: [
        "Launched career building websites for local clients, growing organically through word-of-mouth referrals.",
        "Delivered full-stack solutions using PHP, HTML, CSS, jQuery, Bootstrap, and WordPress on shared hosting environments."
      ],
      es: [
        "Comencé mi carrera construyendo sitios web para clientes locales, creciendo orgánicamente a través de recomendaciones de boca en boca.",
        "Entregué soluciones full-stack utilizando PHP, HTML, CSS, jQuery, Bootstrap y WordPress en entornos de alojamiento compartido."
      ]
    }
  }
];

export default function ResumeExperience({ lang, title, includeItems }: ResumeExperienceProps) {
  const visibleExperiences = includeItems
    ? experiencesData.filter(exp => includeItems.includes(exp.id))
    : experiencesData;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="space-y-8 text-slate-600 dark:text-slate-300 print:text-gray-800">

        {visibleExperiences.map((exp) => (
          <div key={exp.id} className="print:break-inside-avoid">
            <div className="flex flex-row justify-between items-baseline mb-2">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 print:text-black">
                {exp.title[lang]}
              </h3>
              <span className="text-sm font-medium text-brand-orange">
                {exp.date[lang]} | {exp.location[lang]}
              </span>
            </div>
            <ul className="list-disc list-outside space-y-1 ml-4 leading-relaxed marker:text-brand-orange">
              {exp.bullets[lang].map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}
