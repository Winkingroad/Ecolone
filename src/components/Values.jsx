import React from 'react';

// Define an array of core values
const coreValues = [
  {
    title: 'Trust',
    image: 'https://ecoyaan.com/images/Trust.png',
    alt: 'Trust',
    description: 'We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.',
  },
  {
    title: 'Impact',
    image: 'https://ecoyaan.com/images/Impact.png',
    alt: 'Impact',
    description: 'We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.',
  },
  {
    title: 'Authenticity',
    image: 'https://ecoyaan.com/images/Authenticity.png',
    alt: 'Authenticity',
    description: 'We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.',
  },
  {
    title: 'Fun & Engaging',
    image: 'https://ecoyaan.com/images/FunAndEngaging.png',
    alt: 'Fun & Engaging',
    description: 'Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.',
  },
];

const Values = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <img
                src={value.image}
                alt={value.alt}
                className="w-full md:w-40 h-50 mb-4 md:mb-0 md:mr-4 transform hover:scale-125 transition duration-300"
              />
              <div className="text-justify">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="font-normal">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
