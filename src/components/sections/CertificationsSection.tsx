import CertificationCard from "@/components/CertificationCard";
import { Language, translations } from "@/lib/translations";

export default function CertificationsSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-sm text-brand-orange">{"// 03."}</span>
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
  );
}
