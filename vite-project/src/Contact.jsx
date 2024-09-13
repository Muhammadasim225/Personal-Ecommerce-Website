import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Correct package
import {faSearch, faHeart, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'; 
import { usePopper } from 'react-popper';
import { Outlet } from "react-router-dom";



const Contact = () => {
  return (
    <div className="font-custom">
      <Header cust={true} />

      <div className="breadcrumb pt-10 ml-20">
        <Breadcrumbs />
      </div>

      <div className="container mx-auto my-32 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-white text-2xl mr-4 bg-red-500 rounded-full px-3 py-2 rotate-90 mb-16">
              <FontAwesomeIcon icon={faPhoneAlt} /> {/* Font Awesome Icon */}
              </div>
              <div>
                <h2 className="text-xl font-bold">Call To Us</h2>
                <p>We are available 24/7, 7 days a week.</p>
                <p className="text-gray-600 mt-2">Phone: +8801611112222</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center">
              <div className="text-white text-2xl mr-4 bg-red-500 rounded-full px-3 py-2  mb-28">
              <FontAwesomeIcon icon={faEnvelope} /> {/* Font Awesome Icon */}
              </div>
              <div>
                <h2 className="text-xl font-bold">Write To Us</h2>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-gray-700 mt-2">Emails: customer@exclusive.com</p>
                <p className="text-gray-700">support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 border rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full mt-4 p-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

<Footer></Footer>
    </div>
  );
};

export default Contact;
