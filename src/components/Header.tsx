
import { Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 md:py-10 md:px-20">
      <img
        src="/lovable-uploads/5e2e9f00-b255-44f5-bd70-096253ab93e3.png"
        alt="Gyoza Ventures Logo"
        className="h-7 md:h-10 object-contain brightness-200"
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
  );
};

export default Header;
