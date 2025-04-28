
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

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
      <div className="flex-grow">
        <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-2 md:mb-3">{t.title}</h2>
        <div className="space-y-2 md:space-y-3 text-[11px] md:text-[12px] text-gray-400 leading-relaxed">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
          <p>{t.paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
