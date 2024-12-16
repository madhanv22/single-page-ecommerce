import React from 'react';

const images = {
  bgImg: "src/assets/images/service/bgimg.jpg",
  img1: 'src/assets/images/service/img1.png',
  img2: 'src/assets/images/service/img2.png',
  img3: 'src/assets/images/service/img3.png',
  img4: 'src/assets/images/service/img4.jpg',
};

const Service = () => {
  return (
    <>
      <div className='container w-full grid relative grid-cols-2'>
      
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