import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCalculator } from 'react-icons/fa6';
// import { MdEmail, MdCall } from "react-icons/md";

const images = {
  bgImg: 'src/assets/images/bgimg.jpg',
  home: 'src/assets/images/home.png',
  brush: 'src/assets/images/brush.png',
  clean: 'src/assets/images/cleaning.png',
};

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="header-bg relative w-full h-full">
        <div className="hidden md:flex pt-4 px-4 md:pt-6 md:px-20 absolute w-full justify-between items-center text-white">
          <div className="flex flex-col md:flex-row space-x-2 md:space-x-4 text-sm md:text-lg">
            <p>+123-456-7890</p>
            <p>info@yourdomain.com</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <ul className='flex space-x-2 md:space-x-4'>
              <li className="list-none"><FaFacebook className="text-xs md:text-lg" /></li>
              <li className="list-none"><FaTwitter className="text-xs md:text-lg" /></li>
              <li className="list-none"><FaInstagram className="text-xs md:text-lg" /></li>
              <li className="list-none"><FaLinkedin className="text-xs md:text-lg" /></li>
            </ul>
            
            <button className="flex items-center gap-1 py-1 px-4 text-xs md:text-md rounded-md bg-sky-600">
              <FaCalculator /> GET A QUOTE
            </button>
          </div>
        </div>
        <img className="w-full h-[300px] md:h-[510px] object-cover" src={images.bgImg} alt="Background" />
      </div>
      <div className="p-4 md:p-6 absolute flex flex-col top-32 md:top-48 left-4 md:left-20 text-white">
        <p className="text-xs md:text-md">RENEW YOUR LOOK</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight">A TRADITION OF <br /> QUALITY CLEANING</h1>
        <button className="w-28 md:w-36 border-2 border-solid border-white/65 mt-4 py-2 px-2 rounded-md text-white/90 hover:bg-white/65 hover:text-black transition">
          Contact Us
        </button>
      </div>
      <div className='relative h-full pt-10 md:pt-40 pb-10 md:pb-20 px-4 md:px-20 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3 text-white bg-sky-500'>
        <div className='hidden lg:grid lg:grid-cols-3 justify-between w-full absolute -top-20 px-14'>
          <div className='bg-white mx-3 container box-border h-auto w-auto flex flex-col justify-center items-center px-4 py-2 gap-2'>
            <div>
              <img className='w-10' src={images.clean} alt="" />
            </div>
            <div className='text-center'>
              <h2 className='font-medium text-black text-lg pb-3'>Professional Cleaning</h2>
              <p className='text-gray-600 font-medium text-base'>Housekeeping is responsible for minor security in hotel Ecosystem for food and cleaner through</p>
            </div>
          </div>

          <div className='bg-white mx-3 container box-border h-auto w-auto flex flex-col justify-center items-center px-8 py-14 gap-2'>
            <div>
              <img className='w-10' src={images.brush} alt="" />
            </div>
            <div className='text-center'>
              <h2 className='font-medium text-black text-lg pb-3'>Professional Cleaning</h2>
              <p className='text-gray-600 font-medium text-base'>Housekeeping is responsible for minor security in hotel Ecosystem for food and cleaner through</p>
            </div>
          </div>

          <div className='bg-white mx-3 container box-border h-auto w-auto flex flex-col justify-center items-center px-8 py-14 gap-2'>
            <div>
              <img className='w-10' src={images.home} alt="" />
            </div>
            <div className='text-center'>
              <h2 className='font-medium text-black text-lg pb-3'>Professional Cleaning</h2>
              <p className='text-gray-600 font-medium text-base'>Housekeeping is responsible for minor security in hotel Ecosystem for food and cleaner through</p>
            </div>
          </div>
        </div>
        <div className='md:-mt-10 lg:mt-14'>
          <h2 className='font-semibold text-black text-sm md:text-lg lg:text-xl'>A CLEAN HOUSE IS A <br /> HAPPY PLACE!</h2>
          <p className="text-xs md:text-base">Washla has met the demands of a growing world</p>
        </div>
        <div className='md:-mt-10 lg:mt-14'>
          <p className="text-xs md:text-base"><span className='text-lg md:text-2xl'>W</span>asha customers have tremendous opportunities to answer the call of logistics needs across the global. Has 26 affiliated state soybean associations representing 30 soybean producing state.</p>
        </div>
        <div className='md:-mt-10 lg:mt-14'>
          <p className="text-xs md:text-base">asha customers have tremendous opportunities to answer the call of logistics needs across the global. Has 26 affiliated state soybean associations representing 30 soybean producing state.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;