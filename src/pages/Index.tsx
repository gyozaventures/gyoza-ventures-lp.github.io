
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import ServiceBox from "@/components/ServiceBox";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import { motion } from "framer-motion";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCTAClick = () => {
    window.location.href = "mailto:info@gyozaventures.com";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 8
      }
    })
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 md:px-14 overflow-y-auto md:overflow-hidden">
        <div className="h-full flex flex-col md:justify-between py-1.5 md:py-3 max-w-6xl mx-auto w-full">
          {/* Headlines */}
          <motion.div 
            className="mb-1 md:mb-1.5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-inter font-bold text-lg md:text-xl text-white mb-1 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200">
              {t.headline}
            </h1>
            <h2 className="font-inter font-light text-[12px] md:text-[14px] text-gray-400 leading-relaxed">
              {t.subheadline}
            </h2>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AboutMe />
          </motion.div>

          {/* Selected Projects Section */}
          <motion.div 
            className="flex-shrink-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-[12px] md:text-[14px] font-semibold text-white mb-1.5"
              variants={itemVariants}
            >
              {t.projects.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-1.5">
              {[0, 1, 2].map((index) => {
                const projectKey = `project${index + 1}`;
                return (
                  <motion.div
                    key={projectKey}
                    custom={index}
                    variants={projectVariants}
                  >
                    <ServiceBox 
                      title={t.projects[projectKey].title}
                      company={t.projects[projectKey].company} 
                      description={t.projects[projectKey].description}
                      labels={t.projects[projectKey].labels}
                    />
                  </motion.div>
                );
              })}
              <motion.div
                custom={3}
                variants={projectVariants}
              >
                <ServiceBox
                  title={t.projects.cta.title}
                  isCtaBox
                  onClick={handleCTAClick}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="flex-shrink-0 p-1.5 md:p-2 text-center text-xs text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <a href="/imprint" className="mx-2 hover:text-gray-200 transition-colors hover:underline">{t.footer.imprint}</a>
        <a href="/data" className="mx-2 hover:text-gray-200 transition-colors hover:underline">{t.footer.dataPrivacy}</a>
      </motion.footer>
    </div>
  );
};

export default Index;
