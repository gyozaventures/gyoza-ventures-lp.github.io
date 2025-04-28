
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { Rocket, Building, ShoppingCart, Heart, Briefcase } from "lucide-react";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 mb-2 md:mb-3">
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-24 md:w-36 h-24 md:h-36 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <h2 className="text-[12px] md:text-[14px] font-semibold text-white mb-1 md:mb-1.5">{t.title}</h2>
          <div className="space-y-1 md:space-y-1.5 text-[10px] md:text-[11px] text-gray-400 leading-relaxed">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>
          </div>
        </div>

        {/* Category Badges with reduced size and new layout */}
        <div className="mt-1.5">
          {/* All badges in a single row with smaller size */}
          <div className="flex flex-wrap gap-1">
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Pre-Seed
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Seed
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Series A
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              Corporate
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Building className="mr-1 h-2.5 w-2.5" />
              B2C
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              B2B
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              B2B2C
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              SaaS
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              E-Commerce
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              DTC
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Heart className="mr-1 h-2.5 w-2.5" />
              Healthcare
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Heart className="mr-1 h-2.5 w-2.5" />
              Wellness
            </Button>
            <Button variant="outline" size="sm" className="h-6 px-1.5 text-[9px] md:text-[10px] text-blue-800 hover:text-blue-700">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              Web3.0
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
