import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {motion,AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
const Modal = ({showModal,setShowModal}) => {

  const [shouldShowModal, setShouldShowModal] = useState(false);

    const backdrop={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
        }
    }
    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
          y: "0",
          opacity: 1,
          transition: { delay: 0.5,
            type:"spring",
            stiffness:200,
           }
        }
      };

      const handleNoThanks = () => {
        localStorage.setItem('modalDismissed', 'true');
        setShowModal(false);
      };

      useEffect(() => {
        if (showModal) {
          document.body.classList.add('body-no-scroll'); // Add class to disable scroll
        } else {
          document.body.classList.remove('body-no-scroll'); // Remove class to enable scroll
        }
    
        // Cleanup on component unmount to avoid the class persisting
        return () => {
          document.body.classList.remove('body-no-scroll');
        };
      }, [showModal]);

      useEffect(() => {
        // Set a timeout to show the modal after 10 seconds
        const timeoutId = setTimeout(() => {
            setShouldShowModal(true);
        }, 10000);

        // Cleanup timeout on component unmount or if modal is already shown
        return () => clearTimeout(timeoutId);
    }, []);

      // const handleNoThanks = () => {
      //   localStorage.setItem('modalDismissed', 'true');
      //   setShowModal(false);
      // };

  return (
    <AnimatePresence mode='wait'>

{showModal && (
    <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
       <motion.div
            className= "flex justify-center align-middle h-[530px] bg-white py-8 px-20  text-center w-[400px] md:w-[500px] ml-[350px] mt-[40px]"
            variants={modal}
          >
            <div className="text-center">
              <div className="hiu flex flex-row justify-between">
              <h6 className="font-bold text-lg mb-2 ml-32">Exclusive</h6>
              <FontAwesomeIcon icon={faXmark} className='text-2xl font-light relative left-14 bottom-3 cursor-pointer' onClick={handleNoThanks} />


              
              </div>
              <h4 className=" text-lg mb-2">WHY HELLO THERE, ENJOY</h4>
              <h1 className="font-medium text-6xl mb-2">15% off</h1>
              <h2 className="text-4xl">plus free shipping</h2>
             <p  className="text-lg mb-5"><i>On your next purchase</i></p> 
              <p className="text-sm mb-6">WHEN YOU JOIN OUR MAILING LIST</p>

              <input
                type="email"
                 placeholder="enter your email"
                className="border border-black w-full p-2 mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="enter your zip code"
                className="border border-black w-full p-2 mb-6 outline-none"
              />

              <button className=" kheer bg-black text-white w-full py-2 mb-4">GET MY 15% OFF</button>
                <button className="underline text-black" onClick={handleNoThanks}>NO THANKS</button>
            </div>
          </motion.div>
    </motion.div>
)}

    </AnimatePresence>
    
  )
}

export default Modal
