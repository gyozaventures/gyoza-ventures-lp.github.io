
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceBoxProps {
  title: string;
  description?: string;
  isCtaBox?: boolean;
  onClick?: () => void;
  className?: string;
}

const ServiceBox = ({ title, description, isCtaBox, onClick, className }: ServiceBoxProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-[1.02] cursor-pointer",
        isCtaBox ? "bg-blue-900 text-white" : "hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <h3 className={cn(
        "text-lg font-semibold mb-2",
        isCtaBox ? "text-white" : "text-gray-800"
      )}>
        {title}
      </h3>
      
      {description && !isCtaBox && (
        <p className="text-gray-600 text-sm leading-relaxed">
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
