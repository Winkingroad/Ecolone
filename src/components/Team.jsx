import React from 'react';

// Define an array of team members
const teamMembers = [
  {
    name: 'SHRUTHI',
    designation: 'SOCIAL MEDIA',
    image: 'https://ecoyaan.com/images/about-us-social-media-team-01.png',
    alt: 'SOCIAL MEDIA',
    description: 'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business here.',
  },
  {
    name: 'URMIL',
    designation: 'SOCIAL MEDIA',
    image: 'https://ecoyaan.com/images/about-us-social-media-team-02.png',
    alt: 'SOCIAL MEDIA',
    description: 'Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business here.',
  },
  {
    name: 'DIVYA',
    designation: 'UX DESIGN',
    image: 'https://ecoyaan.com/images/about-us-product-team-01.png',
    alt: 'Divya',
    description: 'Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance.',
  },
  {
    name: 'PRASHANITH',
    designation: 'ENGINEERING',
    image: 'https://ecoyaan.com/images/about-us-product-team-02.png',
    alt: 'Prashanith',
    description: 'Prashanith is our front-end engineer, who brings the UX designs to life.',
  },
  {
    name: 'SAI ABHILASH',
    designation: 'ENGINEERING',
    image: 'https://ecoyaan.com/images/about-us-product-team-03.png',
    alt: 'Sai Abhilash',
    description: 'Sai Abhilash is our back-end engineer, who manages and optimizes the infrastructure and logic of our platform.',
  },
  {
    name: 'TEAM ECOYAAN',
    designation: 'TEAM ECOYAAN',
    image: 'https://ecoyaan.com/images/favicon.png',
    alt: 'Team Ecoyaan',
    description: 'This spot awaits you. Check out our open positions.',
  },
];

const Team = () => {
  return (
    <div className="bg-white-100 py-12">
      <div className="max-w-8xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12">
          {/* Map over the teamMembers array to generate team member cards */}
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.alt}
                className="w-28 h-26 mb-4 rounded-full hover:transform hover:scale-125 transition duration-300"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg font-normal mb-4 text-orange-300">{member.designation}</p>
                <p className="text-base font-normal text-justify max-w-80">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
