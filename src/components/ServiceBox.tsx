
import React from 'react';
import { cn } from "@/lib/utils";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Badge } from "@/components/ui/badge";

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
    <div 
      className={cn(
        "p-4 md:p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer h-full flex flex-col",
        isCtaBox 
          ? "bg-gradient-to-br from-blue-950 to-blue-700 text-white" 
          : "bg-gradient-to-br from-blue-200 to-blue-50 hover:shadow-xl",
        className
      )}
      onClick={onClick}
    >
      <h3 className={cn(
        "text-[13px] md:text-[15px] font-semibold mb-1",
        isCtaBox ? "text-white" : "text-gray-800"
      )}>
        {title}
      </h3>
      
      {company && !isCtaBox && (
        <p className="text-gray-600 text-[13px] md:text-[15px] font-medium mb-2">
          {company}
        </p>
      )}

      {labels && !isCtaBox && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {labels.map((label, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-[10px] md:text-[11px]"
            >
              {label}
            </Badge>
          ))}
        </div>
      )}
      
      {description && !isCtaBox && (
        <p className="text-gray-600 text-[11px] md:text-[12px] leading-relaxed mt-auto">
          {description}
        </p>
      )}
      
      {isCtaBox && (
        <button className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-[11px] md:text-sm">
          {t.cta.button}
        </button>
      )}
    </div>
  );
};

export default ServiceBox;
