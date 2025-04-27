
import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16 max-w-6xl">
      <div className="flex-shrink-0">
        <img
          src="/lovable-uploads/77a88ba2-5ef3-4367-8a47-de069e01c842.png"
          alt="Profile"
          className="w-48 h-48 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-[15px] font-semibold text-white mb-4">About Me</h2>
        <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
          <p>
            I support corporates and start-ups as an Interim GM, C-Level Executive, and Venture Advisor, with a focus on Marketing, Operations, Finance and Business Development.
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
