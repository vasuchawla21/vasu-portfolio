import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-white px-4">
      <h1 className="text-4xl md:text-6xl font-heading text-neonBlue mb-4">
        VASU ‘Insane’ GPT
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        I'm a creator and strategist who helps brands and individuals dominate social media using AI, storytelling, and unconventional marketing.
      </p>
      <div className="flex gap-4">
        <a href="#portfolio" className="px-6 py-2 bg-neonOrange text-black rounded hover:opacity-80 transition">View Work</a>
        <a href="#contact" className="px-6 py-2 border border-neonBlue text-neonBlue rounded hover:bg-neonBlue hover:text-black transition">Let’s Collaborate</a>
      </div>
    </section>
  );
};

export default Hero;
