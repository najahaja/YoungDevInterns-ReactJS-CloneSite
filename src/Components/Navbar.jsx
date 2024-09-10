import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/logo1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-blue shadow-sm z-10 px-8 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl text-gray-800 flex items-center">
              <img className='w-28 -mt-1 shadow-sm' src={image1} alt="Young Dev Interns Logo" />
              <span className="text-4xl pl-6 mt-2">Young Dev Interns</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
          <div className="hidden md:flex space-x-8 text-xl pr-20">
            <Link to="/" className="text-black hover:text-violet-800">Home</Link>
            <Link to="/about" className="text-black hover:text-violet-800">About</Link>
            <Link to="/internship" className="text-black hover:text-violet-800">Internship</Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-center shadow-lg absolute w-full left-0 top-full">
          <Link 
            to="/" 
            className="block px-4 py-2 text-xl text-black hover:text-violet-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-2 text-xl text-black hover:text-violet-800"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/internship" 
            className="block px-4 py-2 text-xl text-black hover:text-violet-800"
            onClick={toggleMenu}
          >
            Internship
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
