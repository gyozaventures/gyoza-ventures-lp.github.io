
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import ServiceBox from "@/components/ServiceBox";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

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
      <main className="flex-1 flex flex-col px-4 md:px-14 overflow-y-auto md:overflow-hidden">
        <div className="h-full flex flex-col md:justify-between py-1.5 md:py-3 max-w-6xl mx-auto w-full">
          {/* Headlines */}
          <div className="mb-1 md:mb-1.5">
            <h1 className="font-inter font-bold text-lg md:text-xl text-white mb-1 leading-tight">
              {t.headline}
            </h1>
            <h2 className="font-inter font-light text-[12px] md:text-[14px] text-gray-400 leading-relaxed">
              {t.subheadline}
            </h2>
          </div>

          {/* About Me Section */}
          <AboutMe />

          {/* Selected Projects Section */}
          <div className="flex-shrink-0">
            <h2 className="text-[12px] md:text-[14px] font-semibold text-white mb-1.5">{t.projects.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-1.5">
              <ServiceBox 
                title={t.projects.project1.title}
                company={t.projects.project1.company} 
                description={t.projects.project1.description}
                labels={t.projects.project1.labels}
              />
              <ServiceBox 
                title={t.projects.project2.title}
                company={t.projects.project2.company}
                description={t.projects.project2.description}
                labels={t.projects.project2.labels}
              />
              <ServiceBox 
                title={t.projects.project3.title}
                company={t.projects.project3.company}
                description={t.projects.project3.description}
                labels={t.projects.project3.labels}
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
      <footer className="flex-shrink-0 p-1.5 md:p-2 text-center text-xs text-gray-400">
        <a href="/imprint" className="mx-2 hover:text-gray-200">{t.footer.imprint}</a>
        <a href="/data" className="mx-2 hover:text-gray-200">{t.footer.dataPrivacy}</a>
      </footer>
    </div>
  );
};

export default Index;
