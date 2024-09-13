import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import aboutfirstimage from './assets/images/aboutfirstimage.png';
import abouticon1 from './assets/images/abouticon1.png';
import abouticon2 from './assets/images/abouticon2.png';
import abouticon3 from './assets/images/abouticon3.png';
import abouticon4 from './assets/images/abouticon4.png';

import team1 from './assets/images/team1.png';  // Replace with the actual image paths
import team2 from './assets/images/team2.png';
import team3 from './assets/images/team3.png';
import team12 from './assets/images/team12.png';

import Footer from './components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Last from './components/lastone/Last';


import { faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {motion,useInView } from 'framer-motion';
import { useState } from 'react';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';


function About(props) {
  const setShowModal = props.setShowModal;
  const [modalDismissed, setModalDismissed] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('modalDismissed');
    if (!dismissed) {
      setTimeout(() => {
        setShowModal(true); 
        
         // Show the modal
      }, 5000);
    } else {
      setModalDismissed(true);  // If already dismissed, hide it
    }
  }, [setShowModal]);
  




  
  const teamMembers = [
    {
      image: team1,
      name: "Tom Cruise",
      title: "Founder & Chairman",
    },
    {
      image: team2,
      name: "Emma Watson",
      title: "Managing Director",
    },
    {
      image: team3,
      name: "Will Smith",
      title: "Product Designer",
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optional: Hide next/prev arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // const careemParents={
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 1.5,
  //     },
  //   },
  

  // }

  const careem={
    hidden:{
      opacity:1,
      x:-500,
      originX:0,
      

    },
    visible:{
      opacity:0,
      x:0,
      transition:{
        duration:1,
        delay:0.5,
        // staggerChildren: 0.5,
        when:"beforeChildren",
        // delayChildren:0.5 // Time delay between each child animation


      }

    },
  
    
  }
  const careem1={
    hidden:{
      opacity:0,
      x:-500,
      originX:0,
      

    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        staggerChildren: 1,
        delayChildren:0.5 // Time delay between each child animation


      }

    }
    
  }

  const imgCareem={
    hidden:{
      opacity:0,
      x:500,
      originX:0,
      
      

    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0.8,
        staggerChildren: 1,
        delayChildren:0.5 // Time delay between each child animation


      }

    }

  }

  const contVariant={
    hidden:{
      opacity:0,

    },
    visible:{
      opacity:1,
      transition:{
        delay:0.5,
        duration:1.5,
      }


    },
    exit:{
      x:"-100vw",
      transition:{
        ease:"easeInOut",
      }

    }
  }
//   const boxesRef = useRef(null);
// const isInView = useInView(boxesRef, { once: true }); 


  const boxes={
    hidden:{
      opacity:0,
      y:"10vh",
      originY:0,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.8,
        staggerChildren: 0.3,
        delayChildren:0.1,
       // Time delay between each child animation
      },

    },
    view:{
      margin:"-200px",
      once:true,

    }

  }
  const slideVariant={
    hidden:{
      opacity:0,
      // x:"-50vw"


    },
    visible:{
      // x:0,
      opacity:1,

      transition:{
        duration:1,
        ease:"easeInOut",
      }

    },
    view:{
      once:true,
    }
  }

  

  return (
    <motion.div className='font-custom' variants={contVariant} animate="visible" initial="hidden" exit="exit" >
      <Header cust={true} />
      <div className="breadcrumb pt-10 ml-20">
        <Breadcrumbs />
      </div>
      <div className="flex bg-white my-24">
        <motion.div variants={careem1}
    initial="hidden"
    animate="visible" className="first px-32 py-20">
      
        <motion.h1 variants={careem1}
  className="text-5xl font-semibold">Our Story</motion.h1><br />

          <motion.p variants={careem1} >
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </motion.p><br />
          <motion.p variants={careem1}>
            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and beauty.
          </motion.p>
        </motion.div>
        <motion.div className="second w-[200%] h-full" variants={imgCareem} animate="visible" initial="hidden">
          <img src={aboutfirstimage} alt="Our Story" />
        </motion.div>
      </div>

      <div className="flex justify-center mx-[40px]">
        <motion.div variants={boxes} initial="hidden" whileInView="visible" viewport="view"
        // animate={isInView ? "visible" : "hidden"} 
        // ref={boxesRef} 
    className="grid grid-cols-4 gap-5">
          <motion.div variants={boxes} className="flex flex-col items-center bg-white p-6 border-2 rounded-lg hover:cursor-pointer hover:bg-red-500 hover:text-white">
            <img src={abouticon1} alt="Sellers" className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold">10.5k</h2>
            <p className="text-black">Sellers active on our site</p>
          </motion.div>
          <motion.div variants={boxes} className="flex flex-col items-center text-black p-6 border-2 rounded-lg hover:cursor-pointer hover:bg-red-500 hover:text-white">
            <img src={abouticon2} alt="Sales" className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold">33k</h2>
            <p className="text-black">Monthly Product Sale</p>
          </motion.div>
          <motion.div variants={boxes} className="flex flex-col items-center bg-white p-6 border-2 rounded-lg hover:cursor-pointer hover:bg-red-500 hover:text-white">
            <img src={abouticon3} alt="Customers" className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold">45.5k</h2>
            <p className="text-black">Customers active on our site</p>
          </motion.div>
          <motion.div variants={boxes} className="flex flex-col items-center bg-white p-6 border-2 rounded-lg hover:cursor-pointer hover:bg-red-500 hover:text-white">
            <img src={abouticon4} alt="Gross Sale" className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold">25k</h2>
            <p className="text-black">Annual gross sale on our site</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="my-32 px-32" variants={slideVariant} initial="hidden" whileInView="visible" viewport="view">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-left">
              <div className="w-[300px] h-[350px]  overflow-hidden  bg-gray-100 pt-10 pl-8 pr-8">
                <img src={member.image} alt={member.name} className="w-full h-full object-bottom" />
              </div>
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-500 text-md">{member.title}</p>
              <div className="flex justify-left space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-900"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900"><FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div className="padd m-20 ">
      <Last></Last>
      </div>
      <Footer></Footer>


    </motion.div>
  );
}

export default About;
