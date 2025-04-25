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
          <h1 className="text-sm md:text-lg font-bold text-white mb-3 leading-tight">
            Partner for Interim Leadership and Growth Execution for Corporates and Start-ups
          </h1>
          <h2 className="text-base md:text-lg text-gray-300 leading-relaxed">
            Where Tactical Execution Meets Strategic Thinking
          </h2>
        </div>

        {/* Selected Projects Heading */}
        <h2 className="text-xl font-semibold text-white mb-6">Selected Projects</h2>

        {/* Service Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">
          <ServiceBox 
            title="Interim CMO"
            company="B2B SaaS Company" 
            description="Led go-to-market strategy and team ramp-up. Established scalable brand and partner ops."
          />
          <ServiceBox 
            title="Interim Director Operations"
            company="IT-Infrastructure Provider"
            description="Restructured operations team and processes. Implemented new KPI framework and reporting."
          />
          <ServiceBox 
            title="Post-Merger Integration Consultant"
            company="Healthcare Provider"
            description="Managed integration of two teams post acquisition. Optimized workflows and communication channels."
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
          href="https://www.gyozaventures.com/data"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-gray-200"
        >
          Data Privacy
        </a>
      </footer>
    </div>
  );
};

export default Index;
