import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 md:p-20 mx-auto max-w-8xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-10 md:mb-20 w-full">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 md:mr-10 mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Join our community in creating a more sustainable future for everyone</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
          <p className="text-sm sm:text-base md:text-lg mb-4">Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies, and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://ecoyaan.com/images/Impact.png" alt="Zoomable Image" className="w-full h-auto md:max-h-96 transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-10 md:mb-20 w-full">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Carefully curated Eco-friendly products</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">We believe that every purchase you make can have a positive impact on the planet and the future.</p>
          <p className="text-sm sm:text-base md:text-lg mb-4">Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
        </div>
        <div className="w-full md:w-1/2">
          <video autoPlay loop muted className="rounded-3xl w-full h-auto md:max-h-96 transition-transform duration-300 hover:scale-110 shadow-xl" controls={false}>
            <source src="https://ecoyaan.com/images/ProductCuration.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8 sm:mb-10 md:mb-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">For businesses that care deeply about sustainability</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">Do you run a business that is committed to sustainability in every aspect of your work?</p>
          <p className="text-sm sm:text-base md:text-lg mb-4">Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
          <p className="text-sm sm:text-base md:text-lg mb-4">If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Contact Us</button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://ecoyaan.com/images/OurStory4.png" alt="Zoomable Image" className="w-full h-auto md:max-h-96 transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
