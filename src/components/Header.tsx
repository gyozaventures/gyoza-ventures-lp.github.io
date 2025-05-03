
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { motion } from "framer-motion";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleContactClick = () => {
    window.location.href = "mailto:moritz@gyozaventures.com";
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.header 
      className="flex justify-between items-center p-6 md:py-10 md:px-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="https://www.gyozaventures.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src="/lovable-uploads/5e2e9f00-b255-44f5-bd70-096253ab93e3.png"
          alt="Gyoza Ventures Logo"
          className="h-5 md:h-7 object-contain brightness-200"
        />
      </motion.a>
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost"
          onClick={toggleLanguage}
          className="text-white hover:bg-white/10 bg-transparent px-2 min-w-[40px] backdrop-blur-sm border border-white/10"
        >
          {language === 'en' ? 'DE' : 'EN'}
        </Button>
        <Button
          variant="outline"
          onClick={handleContactClick}
          className="text-white border-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
        >
          {t.header.contact}
        </Button>
        <motion.a
          href="https://www.linkedin.com/in/moritzlienert/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
