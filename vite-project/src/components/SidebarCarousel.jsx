import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import logo from '../assets/images/37a160169202401.6448bc18bd355.jpg';
import logo1 from '../assets/images/black-friday-super-sale-web-banner-template_120329-3862.jpg';
import logo2 from '../assets/images/Untitled-3.jpg';
import logo3 from '../assets/images/Untitled-4.jpg';
import {motion} from 'framer-motion'
import FilteredProduct from '../FilteredProduct';

const womensFashionOptions = [
    { value: 'dresses', label: 'Dresses' },
    { value: 'tops', label: 'Tops' },
    { value: 'skirts', label: 'Skirts' },
    { value: 'shoes', label: 'Shoes' }
];

const mensFashionOptions = [
    { value: 'pants', label: 'Pants' },
    { value: 'denim-jeans', label: 'Denim Jeans' },
    { value: 'dress-shirts', label: 'Dress Shirts' },
    { value: 'kurta-shalwar', label: 'Kurta Shalwar' }
];

const Sidebar = () => {
    const [isWomensFashionOpen, setIsWomensFashionOpen] = useState(false);
    const [isMensFashionOpen, setIsMensFashionOpen] = useState(false);

    const handleWomensFashionDropdown = () => {
        setIsWomensFashionOpen(!isWomensFashionOpen);
    };

    const handleMensFashionDropdown = () => {
        setIsMensFashionOpen(!isMensFashionOpen);
    };

    const stage={




        starting:{x:-50,opacity:0} ,
        
        continue:{x:-10,opacity:1,
            transition:{type:'spring',stiffness:500,duration:1,  delayChildren: 0.2,  // Delay before starting to animate children
                staggerChildren: 0.2},


        },   
    }

    return ( 
        <div className="sidebar lg:px-5 lg:py-6 flex flex-col  font-custom border-r border-r-gray-600 space-y-3">
            <ul className="space-y-3">
                <li className="flex flex-col cursor-pointer">
                    <div className="flex justify-between items-center" onClick={handleWomensFashionDropdown}>
                        <span className="flex-1">Woman's Fashion</span>
                        <FontAwesomeIcon 
                            icon={isWomensFashionOpen ? faChevronDown : faChevronRight} 
                            className="text-sm text-black"
                        />
                    </div>
                    {isWomensFashionOpen && (
                        <motion.ul variants={stage} initial='starting' animate='continue' className="mt-2 ml-4 space-y-2">
                            {womensFashionOptions.map(option => (
                                <motion.li  key={option.value} whileHover={{scale:1.03}} variants={stage}>
                                    <Link to={`/womens-fashion/${option.value}`}>{option.label}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </li>
                <li className="flex flex-col cursor-pointer">
                    <div className="flex justify-between items-center" onClick={handleMensFashionDropdown}>
                        <span className="flex-1">Man's Fashion</span>
                        <FontAwesomeIcon 
                            icon={isMensFashionOpen ? faChevronDown : faChevronRight} 
                            className="text-sm text-black"
                        />
                    </div>
                    {isMensFashionOpen && (
                       <motion.ul variants={stage} initial='starting' animate='continue'
                        className="mt-2 ml-4 space-y-2">
                            {mensFashionOptions.map(option => (
                                <motion.li  key={option.value} whileHover={{scale:1.03}} variants={stage}>
                                    <Link to={`/mens-fashion/${option.value}`}>{option.label}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </li>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/home-lifestyle">Home & Lifestyle</Link></li>
                <li><Link to="/medicine">Medicine</Link></li>
                <li><Link to="/sports-outdoor">Sports & Outdoor</Link></li>
                <li><Link to="/babys-toys">Baby's & Toys</Link></li>
                <li><Link to="/groceries-pets">Groceries & Pets</Link></li>
                <li><Link to="/health-beauty">Health & Beauty</Link></li>
            </ul>
        </div> 
    );
};

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    padding: "10px",
                    borderRadius: "10px",
                    margin:"10px",
                }}
            >
                <ul style={{ margin: "30px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "gray"

                }}
            ></div>
        )
    };

    return (
        <div className="carousel-container min-w-[600px] min-h-[400px] ">
            <Slider {...settings}>
                <div className="carousel-slide relative ">
                    <img src={logo} alt="Slide 1" className="w-full h-full object-cover"/>
                </div>
                <div className="carousel-slide ">
                    <img src={logo1}/>
                </div>

                <div className="carousel-slide ">
                    <img src={logo2} alt="Slide 1" className="w-full h-full object-cover"/>
                </div>

                <div className="carousel-slide">
                    <img src={logo3} alt="Slide 1" className="w-full h-full object-cover"/>
                </div>
            </Slider>
        </div>
    );
};

 const SidebarCarousel = ({selectedProduct}) => {
    return (
        <div className="flex mt-4">
            <Sidebar />
            {/* <Carousel /> */}
            {selectedProduct ? (
                <FilteredProduct product={selectedProduct} />
            ) : (
                <Carousel />
            )}
            </div>
    );
};

export default SidebarCarousel;
