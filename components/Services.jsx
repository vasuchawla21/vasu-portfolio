import React from 'react';

const services = [
  {
    title: 'AI Consultancy',
    icon: '🤖',
    color: 'text-neonBlue',
  },
  {
    title: 'Video Editing & Reels Creation',
    icon: '🎞️',
    color: 'text-neonGreen',
  },
  {
    title: 'Social Media Management',
    icon: '📱',
    color: 'text-neonOrange',
  },
  {
    title: 'Brand Building',
    icon: '🚀',
    color: 'text-neonBlue',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-neonGreen mb-10">Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 border border-neonBlue rounded-lg p-6 hover:scale-105 hover:shadow-neonBlue transition transform duration-300"
            >
              <div className={`text-4xl mb-4 ${service.color}`}>{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
