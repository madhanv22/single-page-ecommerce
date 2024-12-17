import React from 'react'

const images = {
  img1: 'src/assets/images/about/img1.png',
  img2: 'src/assets/images/about/img2.png',
  img3: 'src/assets/images/about/img3.png' 
}

const About = () => {
  return (
    <div className='mx-20 my-10 overflow-hidden'>
      <div className="flex flex-col text-center gap-2 mb-2">
        <p className="font-medium text-gray-500 text-xs md:text-base">WHY CHOOSE US</p>
        <h2 className="font-bold text-lg md:text-4xl">Tradition Of Trust</h2>
        <p className="font-medium text-gray-500 text-xs md:text-base">
          We specialise in intelligent & effective Search and believes in the power pf partnerships to grow business.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-2 lg:gap-2'>
        <div className="container flex flex-col items-center w-auto box-border bg-white py-4">
          <div className='m-2'>
            <img className='w-16' src={images.img1} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-gray-800 text-base md:text-lg lg:text-xl">Profesional Team</p>
            <p className="text-center text-gray-500 text-xs md:text-md lg:text-lg">Our team uses a sanitizing solutions to wipe down ligth switches doorknobs</p>
          </div>
        </div>

        <div className="container flex flex-col items-center w-auto box-border bg-white py-4">
          <div className='m-2'>
            <img className='w-16' src={images.img2} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-gray-800 text-base md:text-lg lg:text-xl">Profesional Team</p>
            <p className="text-center text-gray-500 text-xs md:text-md lg:text-lg">Our team uses a sanitizing solutions to wipe down ligth switches doorknobs</p>
          </div>
        </div>

        <div className="container flex flex-col items-center w-auto box-border bg-white py-4">
          <div className='m-2'>
            <img className='w-16' src={images.img3} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-gray-800 text-base md:text-lg lg:text-xl">Profesional Team</p>
            <p className="text-center text-gray-500 text-xs md:text-md lg:text-lg">Our team uses a sanitizing solutions to wipe down ligth switches doorknobs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About