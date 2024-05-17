import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4 rounded-t-3xl relative">
      <div onClick={scrollToTop} className="text-gray-900 hover:text-slate-600 fixed bottom-4 right-4 bg-white rounded-full p-2 cursor-pointer">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-300 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#sell" className="hover:text-gray-300 transition duration-300">
                  Sell on Ecoyaan
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-300 transition duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href='https://instagram.com/ecoyaan' className="hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#facebook" className="hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#linkedin" className="hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:text-gray-300 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-300 transition duration-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Subscribe</h2>
            <form>
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 w-full mb-2 rounded-md bg-gray-700 text-white"
              />
              <p className="text-sm text-gray-300 mb-2">By subscribing, you agree to receive notifications</p>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Legal Business Name:</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Kindkarma E-Retail Private Limited</li>
              <li>CIN: U47912KA2023PTC182592</li>
              <li>Telephone: +91 9980490777</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Registered Address:</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>1-N-12T-781/1</li>
              <li>Sri Krishna Vilasa,</li>
              <li>Urvastores,</li>
              <li>Ashoknagar(MR),</li>
              <li>Mangalore,</li>
              <li>Dakshina Kannada- 575006,</li>
              <li>Karnataka, India</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;