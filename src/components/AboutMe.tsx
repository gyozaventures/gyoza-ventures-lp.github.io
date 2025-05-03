
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Badge } from '@/components/ui/badge';
import { Rocket, Building, ShoppingCart, Heart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 mb-2 md:mb-3">
      <motion.div 
        className="flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-16 md:w-28 h-16 md:h-28 object-cover rounded-xl shadow-lg border-2 border-white/10"
        />
      </motion.div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <motion.h2 
            className="text-[12px] md:text-[14px] font-semibold text-white mb-1 md:mb-1.5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.title}
          </motion.h2>
          <motion.div 
            className="space-y-1 md:space-y-1.5 text-[10px] md:text-[11px] text-gray-400 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants}>{t.paragraph1}</motion.p>
            <motion.p variants={itemVariants}>{t.paragraph2}</motion.p>
            <motion.p variants={itemVariants}>{t.paragraph3}</motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-1.5 space-y-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          {/* First row with funding stages and B2B/B2C buttons */}
          <div className="flex flex-wrap gap-1.5">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Rocket className="mr-1 h-2.5 w-2.5" />
                Pre-Seed
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Rocket className="mr-1 h-2.5 w-2.5" />
                Seed
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Rocket className="mr-1 h-2.5 w-2.5" />
                Series A
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Briefcase className="mr-1 h-2.5 w-2.5" />
                Corporate
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Building className="mr-1 h-2.5 w-2.5" />
                B2C
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Briefcase className="mr-1 h-2.5 w-2.5" />
                B2B
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Briefcase className="mr-1 h-2.5 w-2.5" />
                B2B2C
              </Badge>
            </motion.div>
          </div>
          
          {/* Second row with industry-specific buttons */}
          <div className="flex flex-wrap gap-1.5">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <ShoppingCart className="mr-1 h-2.5 w-2.5" />
                SaaS
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <ShoppingCart className="mr-1 h-2.5 w-2.5" />
                E-Commerce
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <ShoppingCart className="mr-1 h-2.5 w-2.5" />
                DTC
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Heart className="mr-1 h-2.5 w-2.5" />
                Healthcare
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Heart className="mr-1 h-2.5 w-2.5" />
                Wellness
              </Badge>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm flex items-center">
                <Briefcase className="mr-1 h-2.5 w-2.5" />
                Web3.0
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
