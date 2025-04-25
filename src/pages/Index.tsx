
import { Linkedin } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";

const Index = () => {
  const handleCTAClick = () => {
    window.location.href = "mailto:info@gyozaventures.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:py-10 md:px-20">
        <img
          src="/lovable-uploads/5e2e9f00-b255-44f5-bd70-096253ab93e3.png"
          alt="Gyoza Ventures Logo"
          className="h-14 md:h-20 object-contain brightness-200" // Increased size and brightness for better visibility
        />
        <a
          href="https://www.linkedin.com/in/moritzlienert/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors hover:underline"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 md:px-20">
        {/* Headlines */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
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
            title="Interim CMO – B2B SaaS Company" 
            description="Led go-to-market strategy and team ramp-up. Established scalable brand and partner ops."
          />
          <ServiceBox 
            title="Interim Director Operations – IT-Infrastructure Provider"
            description="Restructured operations team and processes. Implemented new KPI framework and reporting."
          />
          <ServiceBox 
            title="Post-Merger Integration Consultant – Healthcare Provider"
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
          href="https://www.gyozaventures.com/imprint"
          target="_blank"
          rel="noopener noreferrer"
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
