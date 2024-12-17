import React from 'react';

const images = {
  bgImg: "src/assets/images/service/bgimg.jpg",
  img1: 'src/assets/images/service/img1.png',
  img2: 'src/assets/images/service/img2.png',
  img3: 'src/assets/images/service/img3.png',
  img4: 'src/assets/images/service/img4.jpg',
  newimg: 'src/assets/images/service/newimg.jpg'
};

const Service = () => {
  return (
    <>
      <div className='container bg-black w-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='w-full'>
          <img src={images.newimg} alt="" className='w-full' />
        </div>
          
        <div className="container w-full grid bg-white px-4 py-4 shadow text-left">
          <p className='text-xs md:text-base text-gray-500 font-medium mb-2'>MAID FOR YOU</p>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2">A Cleaner Place is a Safer Place.</h1>
          <p className="text-xs md:text-base text-gray-500 lg:text-xl mb-8">
            Washla cleaning service. We are a company dedicated to giving our customers back the
            time they deserve to enjoy the things they love.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h2 className="text-base lg:text-xl font-semibold mb-2">Professional Cleaning</h2>
              <p className='text-gray-500'>
                Housekeeping is responsible for minor security in hotels.
              </p>
            </div>

            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012 2h2a2 2 0 012-2m-6 9l2 2 4-4"
                />
              </svg>
              <h2 className="text-base lg:text-xl font-semibold mb-2">Fast and efficient</h2>
              <p className='text-gray-500'>Both of us take a lot of time in getting cleaned Clean Home.</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.bgImg})` }}>
        <div className="container mx-auto py-16">
          <div className="flex flex-col text-center gap-2 mb-10">
            <p className="font-medium text-white text-xs md:text-base">WHY CHOOSE US</p>
            <h2 className="font-bold text-lg md:text-4xl">Our Great Service</h2>
            <p className="font-medium text-white text-xs md:text-base line-clamp-3">
              Restoring the beauty and freshness of all your upholstered fabrics and take the work out of housework for you.
            </p>
          </div>

          <div className="grid grid-cols-1 mx-2 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-sky-400 shadow-md p-6 w-fit">
              <img src={images.img1} alt="img" className="w-20 h-20 object-cover" />
              <p className="text-white font-medium text-lg mt-4">Home Cleaning</p>
              <p className="text-white line-clamp-3">Homes and throughly launder them between usage.We give our teams the accusantium doloremque faudantium.</p>
            </div>

            <div className="bg-sky-400 shadow-md p-6 w-fit">
              <img src={images.img2} alt="img" className="w-20 h-20 object-cover" />
              <p className="text-white font-medium text-lg mt-4">Home Cleaning</p>
              <p className="text-white line-clamp-3">Homes and throughly launder them between usage.We give our teams the accusantium doloremque faudantium.</p>
            </div>

            <div className="bg-sky-400 shadow-md p-6 w-fit">
              <img src={images.img3} alt="img" className="w-20 h-20 object-cover" />
              <p className="text-white font-medium text-lg mt-4">Home Cleaning</p>
              <p className="text-white line-clamp-3">Homes and throughly launder them between usage.We give our teams the accusantium doloremque faudantium.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;