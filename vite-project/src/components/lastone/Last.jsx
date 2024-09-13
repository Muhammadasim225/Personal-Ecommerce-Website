import React from 'react';
import truck from '../../assets/images/truck.jpg';
import headphone from '../../assets/images/headphone.jpg';
import tick from '../../assets/images/tick.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Scrolltotop from './Scrolltotop';
import {motion} from 'framer-motion'

const Last = () => {


  const lastVariant={
    hidden:{
      opacity:0,
      x:"-80vw"
      
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        ease:"easeOut",
        staggerChildren: 0.1,
        delayChildren:0.01,
      }
    },
    view:{
      margin:"-50px",
      once:true,
    }


  }
  return (

    <motion.div className="relative"  variants={lastVariant}  initial="hidden" whileInView="visible" viewport="view">
      <div   className="flex justify-around items-center py-10 bg-white">
        <motion.div variants={lastVariant} className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-15 h-15 flex items-center justify-center bg-gray-200 rounded-full">
              <img src={truck} alt="Free and Fast Delivery" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl font-custom pt-3 pb-1">FREE AND FAST DELIVERY</h3>
          <p className='font-custom'>Free delivery for all orders over $140</p>
        </motion.div>
        <motion.div variants={lastVariant}  className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-15 h-15 flex items-center justify-center bg-gray-200 rounded-full">
              <img src={headphone} alt="24/7 Customer Service" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl font-custom pt-3 pb-1">24/7 CUSTOMER SERVICE</h3>
          <p className='font-custom'>Friendly 24/7 customer support</p>
        </motion.div>
        <motion.div variants={lastVariant} className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-15 h-15 flex items-center justify-center bg-gray-200 rounded-full">
              <img src={tick} alt="Money Back Guarantee" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl font-custom pt-3 pb-1">MONEY BACK GUARANTEE</h3>
          <p className='font-custom'>We return money within 30 days</p>
        </motion.div>
        {/* <Scrolltotop></Scrolltotop> */}

      </div>


    </motion.div>


  );
};

export default Last;
