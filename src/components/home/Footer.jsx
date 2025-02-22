import React from 'react';

const images = {
  img1: './assets/images/logo.png'
}

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 md:m-4 lg:m-4">
          {/* Logo and Tagline */}
          <div className='flex flex-col gap-4'>
            <img src={images.img1} alt="" className="w-16 md:w-20 lg:w-20 rounded-full object-contain" />
            <p className="text-gray-500">Washia customers have a tremendous opportunity to answer the call of logistic.</p>
          </div>

          {/* Get In Touch */}
          <div className='flex flex-col gap-2'>
            <div>
              <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
              <p className='text-gray-500'>8273 NW 56th St Miami, Florida 33195, United States</p>
            </div>
            <div>
              <p className='text-gray-500'>info@amiso.com</p>
              <p className='text-gray-500'>052 5401 3322</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className='grid grid-cols-2'>
            <ul className='text-gray-500'>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Team</a></li>
            </ul>
            <ul className='text-gray-500'>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Blogs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Gallery</a></li>
            </ul>
           </div>
          </div>

          {/* Newsletter */}
          <div className=''>
            <h4 className="text-lg font-bold mb-4">Our Newsletter</h4>
            <p className='text-gray-500'>Subscribe to our newsletter to receive the latest news about our services.</p>
            <form>
              <div className="flex mt-4">
                <input type="email" placeholder="Your email address" className="w-40 border bg-gray-200 text-gray-500 font-medium border-gray-300 px-2 py-2" />
                <button type="submit" className="text-xs bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-r-md">SIGN UP</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 flex justify-between items-center">
          <p className="text-gray-600">© 2023 amiso. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <button className="text-gray-600 hover:text-blue-500"><i className="fas fa-chevron-up"></i></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;