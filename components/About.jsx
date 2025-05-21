import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-background text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-neonGreen mb-6">About Me</h2>
        <p className="mb-4 text-lg">
          I'm <span className="text-neonBlue font-semibold">VASU ‘Insane’ GPT</span>, a self-taught content strategist and AI enthusiast known for bold, viral marketing ideas.
          I blend creativity with storytelling to make brands unforgettable.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-neonOrange mb-2">Education</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>DAV Public School, Pushpanjali Enclave, Delhi</li>
            <li>Motilal Nehru College, University of Delhi</li>
            <li><span className="text-neonGreen">Self-taught</span> in content, AI, and digital strategy</li>
          </ul>
        </div>
        <p className="italic text-neonBlue">
          “Worn many hats — from Forex Analyst to Web3 Ambassador to Content Strategist.”
        </p>
      </div>
    </section>
  );
};

export default About;
