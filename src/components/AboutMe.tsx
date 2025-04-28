
import React from 'react';

const AboutMe = () => {
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
        <h2 className="text-[13px] md:text-[15px] font-semibold text-white mb-2 md:mb-3">About Me</h2>
        <div className="space-y-2 md:space-y-3 text-[11px] md:text-[12px] text-gray-400 leading-relaxed">
          <p>
            Hi, I'm Moritz. I can support you as an Interim GM, C-Level Executive, and Venture Advisor, with a focus on Marketing, Operations, Finance and Business Development.
          </p>
          <p>
            I began my career at Deutsche Lufthansa AG, gained hands-on scaling experience at Rocket Internet SE, and went on to found, grow and exit two companies of my own. With over 10 years of experience, I've raised €7M+ in venture capital, led teams of up to 150 employees, and scaled two ventures from zero to seven-figure annual revenue.
          </p>
          <p>
            Execution-driven, I own strategy and operations end-to-end and can leverage my vast network of domain experts across every critical business function for fast and measurable impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
