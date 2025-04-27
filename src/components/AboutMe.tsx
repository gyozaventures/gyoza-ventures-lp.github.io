
import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-32 md:w-48 h-32 md:h-48 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-3 md:mb-4">About Me</h2>
        <div className="space-y-3 md:space-y-4 text-[11px] md:text-[12px] text-gray-400 leading-relaxed">
          <p>
            Hi, I'm Moritz. I support corporates and start-ups as an Interim GM, C-Level Executive, and Venture Advisor, with a focus on Marketing, Operations, Finance and Business Development.
          </p>
          <p>
            I began my career at Deutsche Lufthansa AG, gained hands-on scaling experience at Rocket Internet SE, and went on to found and grow two companies of my own.
          </p>
          <p>
            With over 10 years of experience, I've raised €7M+ in venture capital, led teams of up to 150 employees, and scaled two ventures from zero to seven-figure annual revenue. As a generalist with a strong execution mindset, I take full ownership across strategic and operational functions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
