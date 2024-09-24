
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LuFigma } from "react-icons/lu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
  
          <div className="flex-shrink-0">
            <Link to="/" className="text-[35px] font-bold text-gray-900">
              <LuFigma />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/products" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Products
            </Link>
            <Link to="/solutions" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Solutions
            </Link>
            <Link to="/community" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Community
            </Link>
            <Link to="/resources" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Resources
            </Link>
            <Link to="/pricing" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
              Contact
            </Link>

         
            <button className="text-gray-900 bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded-md">
              Sign In
            </button>
            <button className="text-gray-200 border border-gray-600 bg-gray-900 hover:bg-gray-700 hover:text-white px-4 py-1 rounded-md">
              Register
            </button>
          </div>

        
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-2">
          <Link to="/products" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Products
          </Link>
          <Link to="/solutions" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Solutions
          </Link>
          <Link to="/community" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Community
          </Link>
          <Link to="/resources" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Resources
          </Link>
          <Link to="/pricing" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Pricing
          </Link>
          <Link to="/contact" className="block text-gray-900 text-[18px] px-2 py-1 rounded-md hover:bg-gray-100">
            Contact
          </Link>
          <button className="block text-gray-900 bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded-md w-full">
            Sign In
          </button>
          <button className="block text-gray-200 border border-gray-600 bg-gray-900 hover:bg-gray-700 hover:text-white px-4 py-1 rounded-md w-full">
            Register
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
