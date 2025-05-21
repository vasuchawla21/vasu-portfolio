import React from 'react';

const campaigns = [
  {
    title: 'Teleworld Techbox',
    result: '30K → 60K subscribers',
    color: 'text-neonBlue',
  },
  {
    title: 'Brands of Tomorrow',
    result: '20K → 60K followers',
    color: 'text-neonGreen',
  },
  {
    title: 'VasuGPT',
    result: '2.1K → 35K followers',
    color: 'text-neonOrange',
  },
];

const brands = [
  'Brand A',
  'Brand B',
  'Brand C',
  'Brand D',
  'Brand E',
  'Brand F',
  'Brand G',
  'Brand H',
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-background text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-neonGreen mb-10 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {campaigns.map((item, index) => (
            <div
              key={index}
              className="border border-neonBlue rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={`font-semibold ${item.color}`}>{item.result}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2 text-neonBlue">Brands Collaborated With</h3>
          <p className="text-sm text-gray-300">+8 other brand activations</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {brands.map((brand, i) => (
              <span key={i} className="px-4 py-2 bg-black/40 border border-neonGreen rounded-md text-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center italic text-neonBlue text-lg">
          Story Coordinator & Assistant Director for <span className="text-neonOrange font-semibold">Brands of Tomorrow S3</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
