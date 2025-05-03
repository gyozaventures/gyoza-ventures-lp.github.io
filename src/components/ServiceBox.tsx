
import React from 'react';
import { cn } from "@/lib/utils";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ServiceBoxProps {
  title: string;
  company?: string;
  description?: string;
  labels?: string[];
  isCtaBox?: boolean;
  onClick?: () => void;
  className?: string;
}

const ServiceBox = ({ title, company, description, labels, isCtaBox, onClick, className }: ServiceBoxProps) => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <motion.div 
      className={cn(
        "p-4 md:p-6 rounded-xl shadow-lg transition-all h-full flex flex-col relative",
        isCtaBox 
          ? "bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden" 
          : "bg-gradient-to-br from-blue-100/90 via-blue-50/80 to-white/70 hover:shadow-xl backdrop-blur-sm border border-white/20",
        className
      )}
      onClick={onClick}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 15
      }}
    >
      {isCtaBox && (
        <motion.div 
          className="absolute right-0 bottom-0 w-24 h-24 rounded-full bg-blue-600/50 blur-xl"
          animate={{ 
            x: [10, -10, 10],
            y: [5, -5, 5],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6
          }}
        />
      )}
      
      <h3 className={cn(
        "text-[13px] md:text-[15px] font-semibold mb-1 relative z-10",
        isCtaBox ? "text-white" : "text-gray-800"
      )}>
        {title}
      </h3>
      
      {company && !isCtaBox && (
        <p className="text-gray-600 text-[13px] md:text-[15px] font-medium mb-2 relative z-10">
          {company}
        </p>
      )}

      {labels && labels.length > 0 && !isCtaBox && (
        <div className="flex flex-wrap gap-1.5 mb-2 relative z-10">
          {labels.map((label, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="bg-blue-100/80 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px] backdrop-blur-sm"
            >
              {label}
            </Badge>
          ))}
        </div>
      )}
      
      {description && !isCtaBox && (
        <p className="text-gray-600 text-[11px] md:text-[12px] leading-relaxed mt-auto relative z-10">
          {description}
        </p>
      )}
      
      {isCtaBox && (
        <motion.button 
          className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-900 rounded-full font-medium transition-colors text-[11px] md:text-sm relative z-10 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{t.cta.button}</span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default ServiceBox;
