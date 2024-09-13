import React, { useContext, useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo2 from '../../assets/images/ddd.jpg';
import { faHeart,faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import axios from 'axios';
import { useCartContext } from '../../Context/Cart_context';
import { useFavContext } from '../../Context/Fav_context';
// const products = [


 

//   {
//     id: 1,
//     // discount: '-40%',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s',
//     name: 'HAVIT HV-G92 Gamepad',
//     price: '$120',
//     originalPrice: '$160',
//     rating: 4.5,
//     reviews: 88,
//   },
//   {
//     id: 2,
//     // discount: '-35%',
//     image: 'https://www.ultratech.com.bd/image/cache/catalog/keyboard%20/golden-field/km-900/imice-km-900-keyboard-mouse-gaming-combo-500x500.jpg.webp',
//     name: 'AK-900 Wired Keyboard',
//     price: '$960',
//     originalPrice: '$1160',
//     rating: 3.5,
//     reviews: 75,
//   },
//   {
//     id: 3,
//     // discount: '-30%',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdBmqW9vSdxKOSfcpSCYIKHjkXryE5Q0NEw&s',
//     name: 'IPS LCD Gaming Monitor',
//     price: '$370',
//     originalPrice: '$400',
//     rating: 5.0,
//     reviews: 99,
//   },
//   {
//     id: 4,
//     // discount: '-25%',
//     image: 'https://vmart.pk/wp-content/uploads/2024/03/Boost-Throne-Gaming-Chair.webp',
//     name: 'S-Series Comfort Chair',
//     price: '$375',
//     originalPrice: '$400',
//     rating: 2.5,
//     reviews: 99,
//   },
//   {
//     id: 5,
//     // discount: '-35%',
//     image: logo2,
//     name: 'Gucci Duffle Bag',
//     price: '$960',
//     originalPrice: '$1160',
//     rating: 3.0,
//     reviews: 142,
//   },
// ];



const newDate = 'September 28, 2024 23:59:59'; // Hardcoded flash sale end date

const calculateTimeLeft = () => {
  const date = new Date();
  const difference = new Date(newDate) - date;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};





const ProductCard = ({ product, selectedProduct, onCardClick }) => {
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
        // const discounted_price = parseFloat(discounted_price.replace('$', ''));

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

      <Link to={`/account/product/${product._id}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-40 object-cover mb-4"
        />
        <h2 className="text-md font-semibold">{product.title}</h2>
        <div className="text-red-500 text-xl font-bold">{product.price}</div>
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

      <>
        <div className="text-gray-500 line-through">{product.price}</div>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-gray-600 ml-2">({product.reviews})</span>
        </div>
      </>
    </div>
  );
};



const Headersecondpage = ({ title, day, showTimer, slider, timeLeft }) => (
  <div className=" flex items-center space-x-10 font-custom">
    {/* Today's Text */}
    <div className='flex flex-row items-center space-x-4'>
      <div className="box w-5 h-10 bg-red-500 rounded-md relative right-20"></div>
      <span className=" text-red-500 font-bold relative right-20 ">{day}</span>
    </div>

    {/* Flash Sales Text */}
    <div className="flex flex-row items-center space-x-24 relative top-24 my-32 ">
      <h1 className="text-3xl font-semibold relative right-56 -mx-2 bottom-6">{title}</h1>

      {/* Conditional Countdown Timer */}
      {showTimer && (
        <div className="flex relative bottom-6 right-52">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl font-semibold">{timeLeft.days}</span>
            <span className="text-gray-600 text-xs">Days</span>
          </div>
          <span className="text-4xl font-semibold mx-2">:</span>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl font-semibold">{timeLeft.hours}</span>
            <span className="text-gray-600 text-xs">Hours</span>
          </div>
          <span className="text-4xl font-semibold mx-2">:</span>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl font-semibold">{timeLeft.minutes}</span>
            <span className="text-gray-600 text-xs">Minutes</span>
          </div>
          <span className="text-4xl font-semibold mx-2">:</span>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl font-semibold">{timeLeft.seconds}</span>
            <span className="text-gray-600 text-xs">Seconds</span>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <div className="flex items-center space-x-2 relative bottom-6 left-72 md:relative left-0">
        <button 
          className="bg-gray-200 rounded-full p-2 mx-2 h-10"
          onClick={() => slider.slickPrev()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button 
          className="bg-gray-200 rounded-full p-2 mx-2 h-10"
          onClick={() => slider.slickNext()}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  </div>
);

const Appes = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const slider = React.useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  // const [productss,setProduct]=useState([]);
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


  return (
    <div className=" container mx-auto relative ">
      <Headersecondpage 
        day="Today's" 
        title="Flash Sales" 
        showTimer={true} 
        slider={slider.current}
        timeLeft={timeLeft}
      />

<Slider ref={slider} {...settings} >
          {productsso.map(product => (
            <ProductCard key={product._id} product={product} selectedProduct={selectedProduct}
              onCardClick={handleCardClick}
            />
          ))}
        </Slider>
      
      <div className=" mantra flex justify-center mt-6 ">
        <button className="hemm bg-red-500 text-white px-6 py-3 cursor-pointer">View All Products</button>
      </div>
    </div>
  );
};

export default Appes;
