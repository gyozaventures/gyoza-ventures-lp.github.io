
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { Rocket, Building, ShoppingCart, Heart, Briefcase } from "lucide-react";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-32 md:w-48 h-32 md:h-48 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-2 md:mb-3">{t.title}</h2>
          <div className="space-y-2 md:space-y-3 text-[11px] md:text-[12px] text-gray-400 leading-relaxed">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>
          </div>
        </div>

        {/* Category Badges moved below text */}
        <div className="mt-3 space-y-2">
          {/* Funding Stage */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Rocket className="mr-1 h-4 w-4" />
              Pre-Seed
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Rocket className="mr-1 h-4 w-4" />
              Seed
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Rocket className="mr-1 h-4 w-4" />
              Series A
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Briefcase className="mr-1 h-4 w-4" />
              Corporate
            </Button>
          </div>

          {/* Business Model */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Building className="mr-1 h-4 w-4" />
              B2C
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Briefcase className="mr-1 h-4 w-4" />
              B2B
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Briefcase className="mr-1 h-4 w-4" />
              B2B2C
            </Button>
          </div>

          {/* Industry */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <ShoppingCart className="mr-1 h-4 w-4" />
              SaaS
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <ShoppingCart className="mr-1 h-4 w-4" />
              E-Commerce
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <ShoppingCart className="mr-1 h-4 w-4" />
              DTC
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Heart className="mr-1 h-4 w-4" />
              Healthcare
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Heart className="mr-1 h-4 w-4" />
              Wellness
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 hover:text-white">
              <Briefcase className="mr-1 h-4 w-4" />
              Web3.0
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
