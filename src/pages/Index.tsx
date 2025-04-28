
import { Linkedin } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCTAClick = () => {
    window.location.href = "mailto:info@gyozaventures.com";
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-gradient-to-br from-black via-gray-800 to-gray-700 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 md:px-20 overflow-y-auto md:overflow-hidden">
        <div className="h-full flex flex-col md:justify-between py-3 md:py-6 max-w-6xl mx-auto w-full">
          {/* Headlines - Reduced vertical spacing from mb-6 md:mb-8 to mb-3 md:mb-4 */}
          <div className="mb-3 md:mb-4">
            <h1 className="font-inter font-bold text-lg md:text-xl text-white mb-2 leading-tight">
              {t.headline}
            </h1>
            <h2 className="font-inter font-light text-[13px] md:text-[15px] text-gray-400 leading-relaxed">
              {t.subheadline}
            </h2>
          </div>

          {/* About Me Section */}
          <AboutMe />

          {/* Selected Projects Section */}
          <div className="flex-shrink-0">
            <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-4">{t.projects.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <ServiceBox 
                title={t.projects.project1.title}
                company={t.projects.project1.company} 
                description={t.projects.project1.description}
              />
              <ServiceBox 
                title={t.projects.project2.title}
                company={t.projects.project2.company}
                description={t.projects.project2.description}
              />
              <ServiceBox 
                title={t.projects.project3.title}
                company={t.projects.project3.company}
                description={t.projects.project3.description}
              />
              <ServiceBox
                title={t.projects.cta.title}
                isCtaBox
                onClick={handleCTAClick}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 p-4 md:p-6 text-center text-sm text-gray-400">
        <a href="/imprint" className="mx-3 hover:text-gray-200">{t.footer.imprint}</a>
        <a href="/data" className="mx-3 hover:text-gray-200">{t.footer.dataPrivacy}</a>
      </footer>
    </div>
  );
};

export default Index;
