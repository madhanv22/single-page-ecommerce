import React from 'react';

const Team = () => {
  const images = {
    img1: 'public/assets/images/team/img1.jpg',
    img2: 'public/assets/images/team/img2.jpg',
    img3: 'public/assets/images/team/img3.jpg'
  };

  return (
    <div className="mx-10 my-10 overflow-hidden">
      <div className="flex flex-col text-center gap-2">
        <p className="font-medium text-gray-500 text-xs md:text-base">MEET OUR</p>
        <h2 className="font-bold text-2xl md:text-4xl">Our Team</h2>
        <p className="font-medium text-gray-500 text-xs md:text-base">
          The member of our highly experienced team is decided to providing you with only the services we can possibly provide.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-between my-10 gap-10'>
        {/* card1 */}
        <div className="flex flex-col items-center">
          <div className="">
            <img className="w-[280px]" src={images.img1} alt="" />
          </div>
          <div className="container text-center w-[250px] max-w-auto h-fit box-border shadow bg-white p-4 -mt-10">
            <p className="font-medium text-gray-800 text-lg">Monica Gordon</p>
            <p className="text-gray-500 text-sm">House Cleaning</p>
          </div>
        </div>
        {/* card2 */}
        <div className="flex flex-col items-center">
          <div className="">
            <img className="w-[280px]" src={images.img2} alt="" />
          </div>
          <div className="container text-center w-[250px] max-w-auto h-fit box-border shadow bg-white p-4 -mt-10">
            <p className="font-medium text-gray-800 text-lg">Monica Gordon</p>
            <p className="text-gray-500 text-sm">Cleaner</p>
          </div>
        </div>
        {/* card3 */}
        <div className="flex flex-col items-center">
          <div className="">
            <img className="w-[280px]" src={images.img1} alt="" />
          </div>
          <div className="container text-center w-[250px] max-w-auto h-fit box-border shadow bg-white p-4 -mt-10">
            <p className="font-medium text-gray-800 text-lg">Sara Ryan</p>
            <p className="text-gray-500 text-sm">House Cleaner</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Team;