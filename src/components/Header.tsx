
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:moritz@gyozaventures.com";
  };

  return (
    <header className="flex justify-between items-center p-6 md:py-10 md:px-20">
      <a
        href="https://www.gyozaventures.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/lovable-uploads/5e2e9f00-b255-44f5-bd70-096253ab93e3.png"
          alt="Gyoza Ventures Logo"
          className="h-5 md:h-7 object-contain brightness-200" // Reduced from h-7 md:h-10 to h-5 md:h-7
        />
      </a>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={handleContactClick}
          className="text-white border-white hover:bg-white/10 bg-transparent"
        >
          Contact
        </Button>
        <a
          href="https://www.linkedin.com/in/moritzlienert/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors hover:underline"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;
