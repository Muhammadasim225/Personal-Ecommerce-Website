import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import qr  from '../assets/images/qr.png';


const Footer = () => {
  return (
    <footer className=" bg-black text-white pt-20  font-custom h-[28rem]">
      <div className="container mx-auto flex flex-wrap justify-between align-middle">
        <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
          <h3 className="font-semibold mb-2 text-xl">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex    ">
            <input
              type="email"
              placeholder=" Enter your email"
              className=" p-1 bg-black text-white outline-none rounded-l-md flex-grow border-2 rounded-md "
            />
            <button className="   text-white  text-s relative right-7">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 lg:px-5 relative left-0">
          <h3 className="font-semibold mb-2 text-xl">Support</h3>
          <p>Chandni Chowk, Islam Nagar, KA 1515, Pakistan.</p>
          <p className="my-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 relative left-14">
          <h3 className="font-semibold text-xl mb-2">Account</h3>
          <p>My Account</p>
          <p className="my-2">Login / Register</p>
          <p>Cart</p>
          <p className="my-2">Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 relative left-12">
          <h3 className="font-semibold text-xl mb-2">Quick Link</h3>
          <p>Privacy Policy</p>
          <p className="my-2">Terms Of Use</p>
          <p>FAQ</p>
          <p className="my-2">Contact</p>
        </div>

        <div className="w-full md:w-1/5 relative left-6 ">
          <h3 className="font-semibold text-xl mb-2">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>



          <div className="flex items-center mb-4">
            <img src={qr} alt="QR image" className="w-20 h-20" />
            <div className="flex flex-col gap-4 ml-4">
              <a href="#" className="flex items-center bg-black text-white border border-white rounded-lg p-2 hover:bg-gray-800 transition">
              <svg className="w-5 mr-1" viewBox="30 336.7 120.9 129.2">
              <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  ></path>
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight">GET IT ON</div>
                  <div className="text-md font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="flex items-center bg-black text-white border border-white rounded-lg p-2 hover:bg-gray-800 transition">
              <svg className="w-5 mr-2" viewBox="0 0 384 512">
              <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-tight w-28">Download on the</div>
                  <div className="text-md font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>


          <div className="flex space-x-6 text-xl mt-6">
            <a href="#"><FontAwesomeIcon className='product-card' icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon className='product-card' icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon className='product-card' icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon className='product-card' icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-center text-sm">
        <p>© Copyright Asim 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;