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
  title: "Fabián Karaben | Resume - Backend Developer",
  description: "Resume / CV of Fabián Karaben, Backend Developer",
  robots: { index: false, follow: true },
};

export default async function BackendResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam === "es" ? "es" : "en";
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-slate-900 dark:selection:text-white print:bg-white print:text-black">
      <div className="print:hidden">
        <Header lang={lang} />
      </div>

      <main className="relative z-10 grow w-full overflow-x-auto py-12 md:py-20 print:py-0 print:overflow-visible">
        <div className="mx-auto w-[850px] px-4 print:w-auto print:px-0">
          
          <div className="flex justify-between items-center mb-8 print:hidden">
            <Link href={`/${lang}/backend`} className="text-sm font-medium text-slate-500 hover:text-brand-orange transition-colors">
              ← {t.backToHome || "Back to Home"}
            </Link>
            <PrintButton label={t.printResume} />
          </div>

          <div className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-16 print:shadow-none print:border-none print-container print:bg-white print:dark:bg-white">
          
            <ResumeHeader 
              title="Fabián Karaben"
              subtitle={t.backendTitle}
              portfolioUrl={`https://fabiankaraben.github.io/${lang}/backend`}
            />

            <ResumeAbout 
              lang={lang}
              title={t.aboutTitle}
              aboutText={
                <>
                  <p>{t.aboutBeP1}</p>
                  <p className="mt-4">{t.aboutBeP2}</p>
                </>
              }
              portfolioUrl={`https://fabiankaraben.github.io/${lang}/backend`}
              portfolioDisplayUrl="fabiankaraben.github.io"
            />

            <ResumeExperience 
              lang={lang} 
              title={t.experienceTitle || "Experience"} 
              includeItems={["freelance-fs-devops", "sysadmin-unam", "fs-eventdoo", "fs-hostsiete"]}
            />
            <ResumeCoreTech lang={lang} title={t.coreTechTitle} />
            <ResumeCertifications lang={lang} title={t.certificationsTitle} />
            <ResumeLanguages lang={lang} title={lang === "es" ? "Idiomas" : "Languages"} />

          </div>
        </div>
      </main>

      <div className="print:hidden mt-auto">
        <Footer />
      </div>
    </div>
  );
}
