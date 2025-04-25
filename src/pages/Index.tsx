
import { Linkedin } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";

const Index = () => {
  const handleCTAClick = () => {
    window.location.href = "mailto:info@gyozaventures.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <img
          src="/lovable-uploads/5e2e9f00-b255-44f5-bd70-096253ab93e3.png"
          alt="Gyoza Ventures Logo"
          className="h-8 md:h-10"
        />
        <a
          href="https://www.linkedin.com/in/moritzlienert/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8">
        {/* Headlines */}
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner for Interim Leadership and Growth Execution for Corporates and Start-ups
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600">
            Where Tactical Execution Meets Strategic Thinking
          </h2>
        </div>

        {/* Service Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <ServiceBox title="Interim CMO – B2B SaaS Company" />
          <ServiceBox title="Interim Director Operations – IT-Infrastructure Provider" />
          <ServiceBox title="Post-Merger Integration Consultant – Healthcare Provider" />
          <ServiceBox
            title="Interested in working together?"
            isCtaBox
            onClick={handleCTAClick}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500">
        <a
          href="https://www.gyozaventures.com/imprint"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-gray-700"
        >
          Imprint
        </a>
        <a
          href="https://www.gyozaventures.com/data"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-gray-700"
        >
          Data Privacy
        </a>
      </footer>
    </div>
  );
};

export default Index;
