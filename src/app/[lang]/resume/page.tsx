import { translations } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";
import Link from "next/link";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeAbout from "@/components/resume/ResumeAbout";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeCoreTech from "@/components/resume/ResumeCoreTech";
import ResumeCertifications from "@/components/resume/ResumeCertifications";
import ResumeLanguages from "@/components/resume/ResumeLanguages";

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
          <div className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-16 print:shadow-none print:border-none print-container print:bg-white print:dark:bg-white">
          
          <ResumeHeader 
            title="Fabián Karaben"
            subtitle={t.fullStackTitle}
            portfolioUrl="https://fabiankaraben.github.io"
          />

          <ResumeAbout 
            lang={lang}
            title={t.aboutTitle}
            aboutText={lang === "es" 
              ? "Desarrollador Full Stack con una sólida formación en infraestructura (DevOps), Node.js, Go y Java con Spring Boot. Certificado por AWS, especializado en automatización de sistemas de alto rendimiento. Busco unirme a un equipo como desarrollador Full Stack donde pueda aportar mi experiencia en arquitectura y mi capacidad para implementar sistemas robustos y eficientes."
              : "Full Stack Developer with a strong background in infrastructure (DevOps), Node.js, Go, and Java with Spring Boot. AWS certified, specializing in the automation of high-performance systems. Looking to join a team as a Full Stack Developer where I can contribute my architectural expertise and ability to implement robust and efficient systems."}
            portfolioUrl={`https://fabiankaraben.github.io/${lang}`}
            portfolioDisplayUrl="fabiankaraben.github.io"
          />

          <ResumeExperience 
            lang={lang} 
            title={t.experienceTitle || "Experience"} 
          />

          <ResumeCoreTech 
            lang={lang}
            title={t.coreTechTitle} 
          />

          <ResumeCertifications 
            lang={lang} 
            title={t.certificationsTitle} 
          />

          <ResumeLanguages 
            lang={lang} 
            title={lang === "es" ? "Idiomas" : "Languages"} 
          />

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
