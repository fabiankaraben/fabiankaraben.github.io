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

      <div className="grid md:grid-cols-2 gap-8">
        <CertificationCard
          title="AWS Certified Cloud Practitioner"
          issuer="Amazon Web Services"
          dateInfo={lang === "es" ? "Emitido Oct 2024 · Expira Oct 2027" : "Issued Oct 2024 · Expires Oct 2027"}
          iconName="aws"
          verifyUrl="https://www.credly.com/badges/93cee039-21f8-4bd2-9352-e0c977897905/public_url"
        />
        <CertificationCard
          title="AWS Certified Solutions Architect Associate"
          issuer="Udemy"
          dateInfo={lang === "es" ? "Emitido May 2024" : "Issued May 2024"}
          iconName="udemy"
          verifyUrl="https://www.udemy.com/certificate/UC-96b48f71-6433-4750-8172-a3e3f7349f4e/"
        />
        <CertificationCard
          title="AWS Certified Developer Associate"
          issuer="Udemy"
          dateInfo={lang === "es" ? "Emitido Sep 2024" : "Issued Sep 2024"}
          iconName="udemy"
          verifyUrl="https://www.udemy.com/certificate/UC-ce8d7e79-36d1-43f3-af5f-c448912f6f84/"
        />
        <CertificationCard
          title="Certified Kubernetes Administrator (CKA)"
          issuer="Udemy"
          dateInfo={lang === "es" ? "Emitido Jul 2024" : "Issued Jul 2024"}
          iconName="udemy"
          verifyUrl="https://www.udemy.com/certificate/UC-a342a993-bd55-45f8-8fbc-77537ee44657/"
        />
      </div>
    </section>
  );
}
