import React from 'react';

const images = {
  bgImg: "src/assets/images/service/bgimg1.jpg",
  img1: 'src/assets/images/service/img1.png',
  img2: 'src/assets/images/service/img2.png',
  img3: 'src/assets/images/service/img3.png',
  img4: 'src/assets/images/service/img4.jpg',
  img5: 'src/assets/images/service/img5.png',
  img6: 'src/assets/images/service/img6.png',
  newimg: 'src/assets/images/service/newimg.jpg'
};

const Service = () => {
  return (
    <>
      <div className='container bg-black w-full grid md:grid-cols-2 lg:grid-cols-2'>
        {/* <div className='max-w-screen-md'>
          <img src={images.newimg} alt="" className='w-full' />
        </div>
           */}
        <div className="w-screen grid bg-white px-4 py-4 text-left">
          <p className='text-xs md:text-base text-gray-500 font-medium mb-2'>MAID FOR YOU</p>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2">A Cleaner Place is a Safer Place.</h1>
          <p className="text-xs md:text-base text-gray-500 lg:text-xl mb-8">
            Washla cleaning service. We are a company dedicated to giving our customers back the
            time they deserve to enjoy the things they love.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <img src={images.img5} alt="" className='w-12' />
              <h2 className="text-base lg:text-xl font-semibold mb-2">Professional Cleaning</h2>
              <p className='text-gray-500'>
                Housekeeping is responsible for minor security in hotels.
              </p>
            </div>

            <div className="flex flex-col">
              <img src={images.img6} alt="" className='w-12' />
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