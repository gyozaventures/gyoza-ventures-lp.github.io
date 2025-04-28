
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { Rocket, Building, ShoppingCart, Heart, Briefcase } from "lucide-react";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-28 md:w-40 h-28 md:h-40 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-1.5 md:mb-2">{t.title}</h2>
          <div className="space-y-1.5 md:space-y-2 text-[11px] md:text-[12px] text-gray-400 leading-relaxed">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>
          </div>
        </div>

        {/* Category Badges with reduced size and new layout */}
        <div className="mt-2 space-y-1.5">
          {/* First row: Funding Stage + Business Model */}
          <div className="flex flex-wrap gap-1.5">
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Rocket className="mr-1 h-3 w-3" />
              Pre-Seed
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Rocket className="mr-1 h-3 w-3" />
              Seed
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Rocket className="mr-1 h-3 w-3" />
              Series A
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Briefcase className="mr-1 h-3 w-3" />
              Corporate
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Building className="mr-1 h-3 w-3" />
              B2C
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Briefcase className="mr-1 h-3 w-3" />
              B2B
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Briefcase className="mr-1 h-3 w-3" />
              B2B2C
            </Button>
          </div>

          {/* Second row: Industry */}
          <div className="flex flex-wrap gap-1.5">
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <ShoppingCart className="mr-1 h-3 w-3" />
              SaaS
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <ShoppingCart className="mr-1 h-3 w-3" />
              E-Commerce
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <ShoppingCart className="mr-1 h-3 w-3" />
              DTC
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Heart className="mr-1 h-3 w-3" />
              Healthcare
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Heart className="mr-1 h-3 w-3" />
              Wellness
            </Button>
            <Button variant="outline" size="sm" className="h-7 px-2 text-[10px] md:text-[11px] text-blue-300 hover:text-blue-200">
              <Briefcase className="mr-1 h-3 w-3" />
              Web3.0
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
