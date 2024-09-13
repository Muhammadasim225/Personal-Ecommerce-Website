import React from 'react';
import Header from './components/header/Header';
import Breadcrumbs from './components/header/404/Breadcrumbs';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './App.css'
import { faHeart, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FavProvider, useFavContext } from './Context/Fav_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from './assets/images/ddd.jpg';

const Wishlist = () => {

  const productsso = [
    {
      id: 1,
      discount: '-40%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s',
      name: 'HAVIT HV-G92 Gamepad',
      price: '$120',
      originalPrice: '$160',
      rating: 2.5,
      reviews: 88,
    },
    {
      id: 2,
      discount: '-35%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1vKqasNdgVBd6Xh9Lt5cKtPGUvMyCGAE_A&s',
      name: 'AK-900 Wired Keyboard',
      price: '$960',
      originalPrice: '$1160',
      rating: 5,
      reviews: 75,
    },
    {
      id: 3,
      discount: '-30%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdBmqW9vSdxKOSfcpSCYIKHjkXryE5Q0NEw&s',
      name: 'IPS LCD Gaming Monitor',
      price: '$370',
      originalPrice: '$400',
      rating: 2,
      reviews: 99,
    },
    {
      id: 4,
      discount: '-25%',
      image: 'https://vmart.pk/wp-content/uploads/2024/03/Boost-Throne-Gaming-Chair.webp',
      name: 'S-Series Comfort Chair',
      price: '$375',
      originalPrice: '$400',
      rating: 6,
      reviews: 99,
    },
    {
      id: 5,
      discount: '-35%',
      image: logo2,
      name: 'Gucci Duffle Bag',
      price: '$960',
      originalPrice: '$1160',
      rating: 3,
      reviews: 142,
    },
    // Add more products if needed
  ];



  const ProductCard2 = ({ product }) => {


    return (
      <div className="product-card bg-slate-50 p-4 rounded-lg shadow-md font-custom hover:cursor-pointer relative">
        <div className="flex flex-col items-center absolute top-2 right-2 space-y-2">
          <button className="bg-white px-2 py-1 rounded-full shadow-md">
            <FontAwesomeIcon icon={faHeart} className="text-black" />

          </button>
          <button className="bg-white px-2 py-1 rounded-full shadow-md focus:text-red-500 focus:bg-red-500">
            <FontAwesomeIcon icon={faEye} className="text-black  " />
          </button>
        </div>
        {/* <Link to='/Account/Gaming/Havic HV G-92 Gamepad'> */}
        <Link to={`/account/product/${product.id}`}>

          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-md font-semibold">{product.title}</h2>
          <div className="text-red-500 text-xl font-bold">{product.price}</div>
          <div className="text-gray-500 line-through">{product.originalPrice}</div>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-600 ml-2">({product.reviews})</span>
          </div>
        </Link>
      </div>

    )
  };


  const ProductCard = ({ product }) => {
    console.log(product);
    const {removeToFav}=useFavContext();


    return(
      <div className="product-card bg-slate-50 p-4 rounded-lg shadow-md relative font-custom hover:cursor-pointer">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">40%</div>
      <div className="flex flex-col items-center absolute top-2 right-2 space-y-2">
        <button className="bg-white px-2 py-1 rounded-full shadow-md" onClick={() => { removeToFav(product.id) }}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    
      <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-100">
        <img src={product.img} alt={product.title} className="max-h-full max-w-full object-contain" />
      </div>
      
      <h2 className="text-md font-semibold mb-3">{product.title}</h2>
      <div className="flex space-x-5 align-middle">
        <div className="text-red-500 text-xl font-bold">{product.discounted_price}</div>
        <div className="text-gray-500 line-through mt-[2px]">{product.price}</div>
      </div>
    </div>
    
  )};


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
  };

  const {total_item}=useFavContext();

  const { fav } = useFavContext();

  // const totalItems = fav.length;



  return (
    <>
      <Header cust={true} />
      <div className="pt-10 pl-20">
        <Breadcrumbs />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <h6 className="text-lg font-medium font-custom">Wishlist (3)</h6>
          <button className="border border-black px-4 py-2 font-custom">
            <Link to="/movetobag">Move All To Bag</Link>
          </button>
        </div>

<div className="flex flex-wrap space-x-5">
{fav.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}

</div>




        <div className=" flex justify-between items-center py-6 mt-[80px]">
          {/* Today's Text */}
          <div className='flex flex-row items-center space-x-4'>
            <div className="box w-5 h-10 bg-red-500 rounded-md"></div>
            <span className=" text-red-500 font-bold">Just For You</span>
          </div>

          <button className="mem bg-transparent text-black border border-black px-10 py-3">See All</button>
        </div>

        <Slider {...settings}>
  {productsso.map(product => (
    <ProductCard2 key={product.id} product={product} />
  ))}
</Slider>




      </div>

    </>
  );
};

// Product Card Component


export default Wishlist;
