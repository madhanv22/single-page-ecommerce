import React from 'react';

const images = {
  img1: './assets/images/news/img1.jpg',
  img2: './assets/images/news/img2.jpg',
  img3: './assets/images/news/img3.jpg',
  avatar1: './assets/images/news/avatar1.jpg',
  avatar2: './assets/images/news/avatar2.jpg',
  avatar3: './assets/images/news/avatar3.jpg'
};

const News = () => {
  return (
    <div className="md:mx-10 mb-14 overflow-hidden">
      <div className="flex flex-col text-center gap-2 mb-2 mx-10">
        <p className="font-medium text-gray-500 text-xs md:text-base">WHY CHOOSE US</p>
        <h2 className="font-bold text-lg md:text-4xl">Recent News</h2>
        <p className="font-medium text-gray-500 text-xs md:text-base">
          We specialize in intelligent & effective Search and believes in the power of partnerships to grow business.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center md:gap-2 lg:gap-2 mx-2">
        {/* card1 */}
        <div className="container z-0 flex flex-col w-full box-border bg-white py-4">
          <div className="m-2">
            <img className="w-full h-full " src={images.img1} alt="img" />
          </div>
          <div className="flex flex-col container shadow border-b-4 border-b-blue-600 w-auto bg-white items-start p-5 gap-2 -mt-10 mx-5 z-10">
            <p className='text-gray-500 text-base'>CLEANING</p>
            <h3 className="font-bold text-gray-800 text-base md:text-lg lg:text-xl">Temporary Ruling Issued</h3>
            <p className="text-gray-500 text-xs md:text-md lg:text-lg">
              Washla has met the demands of a growing world cleaning tremendous.
            </p>
            <div className="flex mt-2 items-center gap-2">
              <img className="w-12 rounded-full" src={images.avatar1} alt="avatar" />
              <div className='flex flex-col'>
                <p className="text-md font-medium">Martha Smith</p>
                <p className="text-gray-500 text-xs md:text-sm">Washla CEO</p>
              </div>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="container z-0 flex flex-col w-full box-border bg-white py-4">
          <div className="m-2">
            <img className="w-full h-full " src={images.img2} alt="img" />
          </div>
          <div className="flex flex-col container shadow border-b-4 border-b-blue-600 w-auto bg-white items-start p-5 gap-2 -mt-10 mx-5 z-10">
            <p className='text-gray-500 text-base'>CLEANING</p>
            <h3 className="font-bold text-gray-800 text-base md:text-lg lg:text-xl">The Expands California</h3>
            <p className="text-gray-500 text-xs md:text-md lg:text-lg">
              Welcomed and very sed ut perspiciatis unde omnis iste natus.
            </p>
            <div className="flex mt-2 items-center gap-2">
              <img className="w-12 rounded-full" src={images.avatar2} alt="avatar" />
              <div className='flex flex-col'>
                <p className="text-md font-medium">Laura Jones</p>
                <p className="text-gray-500 text-xs md:text-sm">Accounting</p>
              </div>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="container z-0 flex flex-col w-full box-border bg-white py-4">
          <div className="m-2">
            <img className="w-full h-full" src={images.img3} alt="img" />
          </div>
          <div className="flex flex-col container shadow border-b-4 border-b-blue-600 w-auto bg-white items-start p-5 gap-2 -mt-10 mx-5 z-10">
            <p className='text-gray-500 text-base'>CLEANING</p>
            <h3 className="font-bold text-gray-800 text-base md:text-lg lg:text-xl">Temporary Ruling Issued</h3>
            <p className="text-gray-500 text-xs md:text-md lg:text-lg">
              Washla has met the demands of a growing world cleaning tremendous.
            </p>
            <div className="flex mt-2 items-center gap-2">
              <img className="w-12 rounded-full" src={images.avatar3} alt="avatar" />
              <div className='flex flex-col'>
                <p className="text-md font-medium">Matt Ryan</p>
                <p className="text-gray-500 text-xs md:text-sm">Lawyer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default News;