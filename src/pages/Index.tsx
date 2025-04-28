
import { Linkedin } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

const Index = () => {
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
              Venture Partner for Corporates, VC Funds and Start-Ups
            </h1>
            <h2 className="font-inter font-light text-[13px] md:text-[15px] text-gray-400 leading-relaxed">
              Where Tactical Execution Meets Strategic Thinking
            </h2>
          </div>

          {/* About Me Section */}
          <AboutMe />

          {/* Selected Projects Section */}
          <div className="flex-shrink-0">
            <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-4">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <ServiceBox 
                title="Interim CMO"
                company="B2B SaaS Provider" 
                description="Restructured marketing operations and managed channels hands-on. Cut CPL by over 50% and doubled lead volume, driving record quarterly sales."
              />
              <ServiceBox 
                title="Interim Director Operations"
                company="IT Infrastructure Provider"
                description="Built scalable ops and project frameworks. Optimized finance workflows and launched an ecosystem incubator."
              />
              <ServiceBox 
                title="Post-Merger Integration Consultant"
                company="Healthcare Provider"
                description="Led integration of HR, finance, and marketing post-acquisition. Streamlined workflows and unified teams using best-practice models."
              />
              <ServiceBox
                title="Interested in working together?"
                isCtaBox
                onClick={handleCTAClick}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 p-4 md:p-6 text-center text-sm text-gray-400">
        <a href="/imprint" className="mx-3 hover:text-gray-200">Imprint</a>
        <a href="/data" className="mx-3 hover:text-gray-200">Data Privacy</a>
      </footer>
    </div>
  );
};

export default Index;
