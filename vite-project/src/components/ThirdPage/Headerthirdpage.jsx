import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../App.css'
import logo2 from '../../assets/images/image.png';
import phone from '../../assets/images/phone.jpg';
import bgredmobile from '../../assets/images/bgredmobile.jpg';
import monitor  from '../../assets/images/Screenshot.jpeg';
import bgredtv  from '../../assets/images/bgredtv.jpg';
import headphones  from '../../assets/images/headphones.png';
import gaming  from '../../assets/images/gaming.png';
import whitegaming  from '../../assets/images/whitegaming.png';
import whiteHead  from '../../assets/images/white-head.png';
import camera  from '../../assets/images/camera.png';
import smartwatch  from '../../assets/images/smartwatch.jpg';
import whitewatch  from '../../assets/images/smartwatchredbg.jpg';
import redbgsmartwatch  from '../../assets/images/redbgsmartwatch.png';
import blackcamera  from '../../assets/images/blackcamera.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faEye } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/Cart_context';
import { useFavContext } from '../../Context/Fav_context';




const CategoryCard = ({ image, hoverImage, label, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex flex-col items-center p-4 hover:text-white hover:bg-red-500 rounded-lg shadow-md border-2 hover:cursor-pointer`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-24 h-24 mt-4 mb-4 ">
        <img 
          src={isHovered ? hoverImage : image} 
          alt={label} 
          className="w-full h-full object-cover"  
        />
      </div>
      <span className="mt-2">{label}</span>
    </div>
  );
};



const Headerthirdpage = (props) => {
  const category=props.category;
  const list=props.list;
  const box=props.box;
  const cardd=props.cardd;
  const arrows=props.arrows;
  const sliderRef = useRef(null);

  // const products = [
  //   {
  //     id: 1,
  //     discount: '-40%',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s',
  //     name: 'HAVIT HV-G92 Gamepad',
  //     price: '$120',
  //     originalPrice: '$160',
  //     rating: 2.5,
  //     reviews: 88,
  //   },
  //   {
  //     id: 2,
  //     discount: '-35%',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1vKqasNdgVBd6Xh9Lt5cKtPGUvMyCGAE_A&s',
  //     name: 'AK-900 Wired Keyboard',
  //     price: '$960',
  //     originalPrice: '$1160',
  //     rating: 5,
  //     reviews: 75,
  //   },
  //   {
  //     id: 3,
  //     discount: '-30%',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdBmqW9vSdxKOSfcpSCYIKHjkXryE5Q0NEw&s',
  //     name: 'IPS LCD Gaming Monitor',
  //     price: '$370',
  //     originalPrice: '$400',
  //     rating: 2,
  //     reviews: 99,
  //   },
  //   {
  //     id: 4,
  //     discount: '-25%',
  //     image: 'https://vmart.pk/wp-content/uploads/2024/03/Boost-Throne-Gaming-Chair.webp',
  //     name: 'S-Series Comfort Chair',
  //     price: '$375',
  //     originalPrice: '$400',
  //     rating: 6,
  //     reviews: 99,
  //   },
  //   {
  //     id: 5,
  //     discount: '-35%',
  //     image: logo2,
  //     name: 'Gucci Duffle Bag',
  //     price: '$960',
  //     originalPrice: '$1160',
  //     rating: 3,
  //     reviews: 142,
  //   },
  //   // Add more products if needed
  // ];

  const ProductCard = ({ product, selectedProduct, onCardClick }) => {
    // console.log(product);
    const { addToFav } = useFavContext();
    const { addToCart } = useCartContext();

    const {removeToFav}=useFavContext();

    const [isHeartButtonToggled, setIsHeartButtonToggled] = useState(() => {
      // Retrieve the saved state from localStorage
      const savedState = localStorage.getItem(`heartToggle_${product._id}`);
      return savedState === 'true';
  });
  
  useEffect(() => {
      // Update localStorage whenever the heart button state changes
      localStorage.setItem(`heartToggle_${product._id}`, isHeartButtonToggled);
  }, [isHeartButtonToggled, product._id]);
 

    const handleHeartButtonClick = (event) => {
      event.stopPropagation();
      const nextToggleState = !isHeartButtonToggled; // Determine the next state of the toggle
      setIsHeartButtonToggled(nextToggleState); // Update the state
      if (nextToggleState) {
        // If the button is toggled on (i.e., nextToggleState is true), add the product to favorites
        addToFav(product._id, product.discounted_price, product.title, product.img);
        console.log("The id is ",product._id)
      } else {
        // If the button is toggled off, remove the product from favorites (if needed)
        // removeFromFav(product._id); // Uncomment this line if you want to handle removing from favorites
        return removeToFav(product._id);
  
    };
  }
  
  
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Hamara token')); // Check if token exists to determine if user is logged in
    const handleAddToCart = () => {
      addToCart(product._id, product.discounted_price, product.title, product.img);
    };
    return (
  
      <div
        className="product-card bg-slate-50 p-4 rounded-lg shadow-md font-custom hover:cursor-pointer relative group"
        onClick={() => onCardClick(product._id)}
      >
        <div className="flex flex-col items-center absolute top-2 right-2 space-y-2">
        <button
          className={`px-2 py-1 rounded-full shadow-md ${isHeartButtonToggled ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
          onClick={handleHeartButtonClick}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
          <button className="bg-white px-2 py-1 rounded-full shadow-md hover:bg-red-500">
            <FontAwesomeIcon icon={faEye} className="text-black hover:text-white" />
          </button>
        </div>
  
        {/* Wrap content with Link */}
        <Link to={`/account/product/${product._id}`}>
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-md font-semibold">{product.title}</h2>
          <div className="text-red-500 text-xl font-bold">{product.discounted_price}</div>
        </Link>
  
  
        <div className="absolute bottom-1 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to='/account/product/cart'>
          <button
            className="bg-red-500 text-white px-16 py-2 rounded hover:bg-red-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </Link>
        </div>
  
  
        {/* Conditional rendering */}
       
          
  
          <>
            <div className="text-gray-500 line-through">{product.price}</div>
  
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({product.reviews})</span>
            </div>
          </>
        
      </div>
    )
  };


  const [productsso, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(()=>{
    axios.get('http://localhost:5000/account/product/all').then((prod)=>{
      setProduct(prod.data);
      
    }).catch((err)=>{
      console.log("Error on fetching the data in frontend",err);
  
    })
  
  },[])
  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
  };

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
  };

  const varr={
    hidden:{
      opacity:0,

    },
    visible:{
      opacity:1,
    },
    hovering:{
      scale:1.02, 
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        boxShadow: '4px 4px 10px rgba(153, 27, 27, 0.5)'
       

    }
  }
  const slider = React.useRef(null);



  return (
    <div className=" tought min-h-screen flex flex-col items-center justify-center bg-transparent font-custom p-8">
      <div className="w-full max-w-5xl relative">
        <div className="flex items-center mb-6 -mx-20">
        {box?<div className="bg-red-500 mr-4 w-5 h-10 rounded-md"></div>:<div className="bg-red-500 mr-4 w-5 h-10  rounded-md"></div>}
          {list?<h2 className="text-md font-custom text-red-500 font-bold flex-grow">Categories</h2>:<h2 className="text-md font-custom text-red-500 font-bold flex-grow">This Month</h2>}
          {arrows?(<><button
            className="transform bg-gray-200 rounded-full p-2 mx-2 h-10  hover:cursor-pointer focus:outline-none z-10 mr-2 relative top-16"
            onClick={() => sliderRef.current.slickPrev()}
          >
            
            <FaArrowLeft />
          </button>

          <button
            className="transform bg-gray-200 rounded-full p-2 mx-2 h-10 relative top-16 hover:bg-gray-200 focus:outline-none z-10 mr-2"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight />
          </button>
          </>
          ):<motion.button variants={varr} whileHover='hovering' className="mem bg-red-500 text-white px-10 py-3">View All</motion.button>}
        </div>
        {category?<h1 className="text-3xl font-semibold text-gray-900 -mx-20 right-3 my-8 ">Best Selling products</h1>:<h1 className="text-3xl font-semibold text-gray-900 mb-8 -mx-20 relative right-3 my-8 ">Browse By Category</h1>}
        {cardd?<div className="relative top-5 hover:cursor-pointer ">
          <Slider ref={sliderRef} {...settings}>
  <CategoryCard 
    image={phone} 
    hoverImage={bgredmobile} 
    label="Phones" 
    isActive={true} 
  />
  <CategoryCard 
    image={monitor} 
    hoverImage={bgredtv} 
    label="Computers" 
    isActive={true} 
  />
  <CategoryCard 
    image={smartwatch} 
    hoverImage={whitewatch} 
    label="SmartWatch" 
    isActive={true} 
  />
  <CategoryCard 
    image={blackcamera} 
    hoverImage={camera} 
    label="Camera" 
    isActive={true} 
  />
  <CategoryCard 
    image={headphones} 
    hoverImage={whiteHead}
    label="HeadPhones" 
    isActive={true} 
  />
  <CategoryCard 
    image={gaming} 
    hoverImage={whitegaming} 
    label="Gaming" 
    isActive={true} 
  />
</Slider>

        </div>:
        <div className="contai mb-64 hover:cursor-pointer">
          <Slider ref={slider} {...settings} >
          {productsso.map(product => (
            <ProductCard key={product._id} product={product} selectedProduct={selectedProduct}
              onCardClick={handleCardClick}
            />
          ))}
        </Slider>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Headerthirdpage;
