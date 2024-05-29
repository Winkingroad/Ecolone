import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-10 shadow-2xl">
      <div className="logo text-green-500 text-2xl sm:text-3xl font-semibold ml-4 sm:ml-6 cursor-pointer hover:transform hover:scale-110 transition duration-300">
        <Link to="/">Ecoyaan</Link>
      </div>
      <div className="lg:hidden mr-4 sm:mr-6" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg className="w-6 h-6 text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>  
        )}
      </div>
      <ul onClick={toggleMenu} className={`lg:flex ${isMenuOpen ? 'flex flex-col' : 'hidden'} lg:flex-row space-y-2 lg:space-y-0 text-green-600 text-lg sm:text-xl font-medium`}>
        <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Home</Link></li>
        <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">About Us</Link></li>
        <li><Link to="/sellon" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Sell on Ecoyaan</Link></li>
        <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Careers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
