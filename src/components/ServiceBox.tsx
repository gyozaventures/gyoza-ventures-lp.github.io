
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceBoxProps {
  title: string;
  company?: string;
  description?: string;
  isCtaBox?: boolean;
  onClick?: () => void;
  className?: string;
}

const ServiceBox = ({ title, company, description, isCtaBox, onClick, className }: ServiceBoxProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer",
        isCtaBox 
          ? "bg-gradient-to-br from-blue-950 to-blue-700 text-white" 
          : "bg-gradient-to-br from-blue-200 to-blue-50 hover:shadow-xl",
        className
      )}
      onClick={onClick}
    >
      <h3 className={cn(
        "text-[15px] font-semibold mb-1",
        isCtaBox ? "text-white" : "text-gray-800"
      )}>
        {title}
      </h3>
      
      {company && !isCtaBox && (
        <p className="text-gray-600 text-[15px] font-medium mb-2">
          {company}
        </p>
      )}
      
      {description && !isCtaBox && (
        <p className="text-gray-600 text-[10px] leading-relaxed">
          {description}
        </p>
      )}
      
      {isCtaBox && (
        <button className="mt-4 px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Let's Talk
        </button>
      )}
    </div>
  );
};

export default ServiceBox;
