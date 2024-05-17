import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Story = () => {
  return (
    <div className="bg-orange-100 py-12">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our Story</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex flex-col gap-4 mb-6">
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                alt="Image 1"
                className="w-full md:w-60 h-40 transform hover:scale-125 transition duration-300"
              />
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                alt="Image 2"
                className="w-full md:w-60 h-40 transform hover:scale-125 transition duration-300"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-800 text-base md:text-lg mb-6">
              We started Ecoyaan after watching an episode of "Our Planet II", where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-6">
              Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-6">
              We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-6">
              As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we'll make a difference.
            </p>
            <p className="text-center md:text-left text-gray-700 text-base md:text-lg">
              Connect with the founders on LinkedIn:
              <a
                href="https://www.linkedin.com/in/abhishekrao/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-600 ml-3"
              >
                Abhishek Rao <FontAwesomeIcon icon={faLinkedin} />
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/sarwan-singh-2297b2190/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-600 ml-3"
              >
                Sarwan Singh <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
