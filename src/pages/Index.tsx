import { Linkedin } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";
import Header from "@/components/Header";

const Index = () => {
  const handleCTAClick = () => {
    window.location.href = "mailto:info@gyozaventures.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 md:px-20">
        {/* Headlines */}
        <div className="mb-12 max-w-4xl">
          <h1 className="font-inter font-bold text-xl text-white mb-3 leading-tight">
            Operating Partner for Corporates, Start-Ups and VC Funds
          </h1>
          <h2 className="font-inter font-light text-[15px] text-gray-400 leading-relaxed">
            Where Tactical Execution Meets Strategic Thinking
          </h2>
        </div>

        {/* Selected Projects Heading */}
        <h2 className="text-[15px] font-semibold text-white mb-6">Selected Projects</h2>

        {/* Service Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">
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
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-400">
        <a
          href="/imprint"
          className="mx-3 hover:text-gray-200"
        >
          Imprint
        </a>
        <a
          href="/data"
          className="mx-3 hover:text-gray-200"
        >
          Data Privacy
        </a>
      </footer>
    </div>
  );
};

export default Index;
