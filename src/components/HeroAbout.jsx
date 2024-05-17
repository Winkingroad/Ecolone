import React from 'react';

const HeroAbout = () => {
  return (
    <div className="bg-orange-100 py-12">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">About Ecoyaan</h2>
        <div className="flex flex-col md:flex-row-reverse md:space-x-8">
          <div className="flex justify-center items-center mb-8 md:mb-0">
            <img
              src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
              alt="Sustainable Lifestyle"
              className="w-3/4 md:w-3/4 h-auto rounded-3xl shadow-xl transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="text-justify">
            <p className="text-gray-800 text-base md:text-lg mb-6">
              At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-6">
              We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
            </p>
            <ul className="list-disc ml-6 md:ml-12 text-gray-800 text-base md:text-lg mb-6">
              <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
              <li>Videos, posts, and quizzes on climate change and sustainability</li>
              <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
