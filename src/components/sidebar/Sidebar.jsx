import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`fixed top-2 left-2 w-auto right-2 bg-sky-800 z-50 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu}>
          <MdClose className='size-6 ' />
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center pb-8 gap-4 text-white text-lg font-medium">
        <li className="list-none hover:text-sky-600 cursor-pointer">
          HOME
          <hr className="w-full border-t border-gray-300 my-2" />
        </li>
        <li className="list-none hover:text-sky-600 cursor-pointer">
          ABOUT
          <hr className="w-full border-t border-gray-300 my-2" />
        </li>
        <li className="list-none hover:text-sky-600 cursor-pointer">
          PAGES
          <hr className="w-full border-t border-gray-300 my-2" />
        </li>
        <li className="list-none hover:text-sky-600 cursor-pointer">
          GALLERY
          <hr className="w-full border-t border-gray-300 my-2" />
        </li>
        <li className="list-none hover:text-sky-600 cursor-pointer">
          BLOG
          <hr className="w-full border-t border-gray-300 my-2" />
        </li>
        <li className="list-none hover:text-sky-600 cursor-pointer">
          CONTACT
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;