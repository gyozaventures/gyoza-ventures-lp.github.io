
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
          className="w-20 md:w-32 h-20 md:h-32 object-cover rounded-xl shadow-lg"
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

        <div className="mt-1.5 space-y-1">
          {/* First row with funding stages and B2B/B2C buttons */}
          <div className="flex flex-wrap gap-1">
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Pre-Seed
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Seed
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700">
              <Rocket className="mr-1 h-2.5 w-2.5" />
              Series A
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              Corporate
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <Building className="mr-1 h-2.5 w-2.5" />
              B2C
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              B2B
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <Briefcase className="mr-1 h-2.5 w-2.5" />
              B2B2C
            </Button>
          </div>
          
          {/* Second row with industry-specific buttons */}
          <div className="flex flex-wrap gap-1">
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              SaaS
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              E-Commerce
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <ShoppingCart className="mr-1 h-2.5 w-2.5" />
              DTC
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <Heart className="mr-1 h-2.5 w-2.5" />
              Healthcare
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
              <Heart className="mr-1 h-2.5 w-2.5" />
              Wellness
            </Button>
            <Button variant="outline" size="sm" className="h-5 px-1.5 text-[8px] md:text-[9px] text-blue-800 hover:text-blue-700 font-secondary">
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
