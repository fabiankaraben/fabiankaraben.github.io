interface ResumeCertificationsProps {
  lang: "es" | "en";
  title: string;
}

export default function ResumeCertifications({ lang, title }: ResumeCertificationsProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 print:text-black">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-slate-600 dark:text-slate-300 print:text-gray-800">
        
        <div>
          <a href="https://www.credly.com/badges/93cee039-21f8-4bd2-9352-e0c977897905/public_url" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 dark:text-slate-100 print:text-black hover:text-brand-orange transition-colors">
            AWS Certified Cloud Practitioner
          </a>
          <div className="text-sm mt-0.5">
            Amazon Web Services (AWS) <span className="text-brand-orange mx-1">•</span> Oct 2024
          </div>
        </div>

        <div>
          <a href="https://www.udemy.com/certificate/UC-96b48f71-6433-4750-8172-a3e3f7349f4e/" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 dark:text-slate-100 print:text-black hover:text-brand-orange transition-colors">
            AWS Certified Solutions Architect Associate
          </a>
          <div className="text-sm mt-0.5">
            Udemy <span className="text-brand-orange mx-1">•</span> {lang === "es" ? "Mayo 2024" : "May 2024"}
          </div>
        </div>

        <div>
          <a href="https://www.udemy.com/certificate/UC-ce8d7e79-36d1-43f3-af5f-c448912f6f84/" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 dark:text-slate-100 print:text-black hover:text-brand-orange transition-colors">
            AWS Certified Developer Associate
          </a>
          <div className="text-sm mt-0.5">
            Udemy <span className="text-brand-orange mx-1">•</span> Sep 2024
          </div>
        </div>

        <div>
          <a href="https://www.udemy.com/certificate/UC-a342a993-bd55-45f8-8fbc-77537ee44657/" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 dark:text-slate-100 print:text-black hover:text-brand-orange transition-colors">
            Certified Kubernetes Administrator (CKA)
          </a>
          <div className="text-sm mt-0.5">
            Udemy <span className="text-brand-orange mx-1">•</span> Jul 2024
          </div>
        </div>

      </div>
    </section>
  );
}
