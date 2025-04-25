
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceBoxProps {
  title: string;
  isCtaBox?: boolean;
  onClick?: () => void;
  className?: string;
}

const ServiceBox = ({ title, isCtaBox, onClick, className }: ServiceBoxProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-[1.02] cursor-pointer",
        isCtaBox ? "bg-blue-900 text-white" : "hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <h3 className={cn(
        "text-lg font-medium",
        isCtaBox ? "text-white mb-4" : "text-gray-800"
      )}>
        {title}
      </h3>
      {isCtaBox && (
        <button className="mt-2 px-6 py-2 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Let's Talk
        </button>
      )}
    </div>
  );
};

export default ServiceBox;
