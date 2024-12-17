import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import Sidebar from './Sidebar';

const images = {
  logo: 'src/assets/images/logo.png',
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-30 mb-4 mt-2 md:mb-6 absolute top-2 md:top-20 left-0 right-0 grid grid-cols-2 lg:grid-cols-2 items-center bg-white/50 rounded-md px-4 py-2 md:px-6 md:py-4 mx-2 md:mx-20">
      <div className="lg:flex w-16 md:w-20 lg:w-24">
        <img src={images.logo} alt="Logo" className="w-full rounded-full object-contain" />
      </div>
      <div className="lg:hidden flex justify-end">
        <button onClick={toggleMenu}>
          <MdMenu className='size-8' />
        </button>
      </div>
      <ul className="hidden lg:flex flex-1 flex-wrap justify-between gap-2 text-xs md:text-sm lg:text-base font-medium">
        <li className="list-none hover:text-sky-600 cursor-pointer">HOME</li>
        <li className="list-none hover:text-sky-600 cursor-pointer">ABOUT</li>
        <li className="list-none hover:text-sky-600 cursor-pointer">PAGES</li>
        <li className="list-none hover:text-sky-600 cursor-pointer">GALLERY</li>
        <li className="list-none hover:text-sky-600 cursor-pointer">BLOG</li>
        <li className="list-none hover:text-sky-600 cursor-pointer">CONTACT</li>
      </ul>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;