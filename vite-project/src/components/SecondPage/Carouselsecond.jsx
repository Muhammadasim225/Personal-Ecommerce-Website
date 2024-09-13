import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo2 from '../../assets/images/ddd.jpg';
import Headersecondpage from './Headersecondpage';

const products = [
  {
    id: 1,
    discount: '-40%',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s',
    name: 'HAVIT HV-G92 Gamepad',
    price: '$120',
    originalPrice: '$160',
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    discount: '-35%',
    image: 'https://www.ultratech.com.bd/image/cache/catalog/keyboard%20/golden-field/km-900/imice-km-900-keyboard-mouse-gaming-combo-500x500.jpg.webp',
    name: 'AK-900 Wired Keyboard',
    price: '$960',
    originalPrice: '$1160',
    rating: 4.0,
    reviews: 75,
  },
  {
    id: 3,
    discount: '-30%',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdBmqW9vSdxKOSfcpSCYIKHjkXryE5Q0NEw&s',
    name: 'IPS LCD Gaming Monitor',
    price: '$370',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 4,
    discount: '-25%',
    image: 'https://vmart.pk/wp-content/uploads/2024/03/Boost-Throne-Gaming-Chair.webp',
    name: 'S-Series Comfort Chair',
    price: '$375',
    originalPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    discount: '-35%',
    image: logo2,
    name: 'Gucci Duffle Bag',
    price: '$960',
    originalPrice: '$1160',
    rating: 4.0,
    reviews: 142,
  },
  // Add more products if needed
];

const ProductCard = ({ product }) => (
  <div className="bg-slate-50 p-4 rounded-lg shadow-md relative font-custom">
    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</div>
    <div className="flex justify-between items-center absolute top-2 right-2 space-x-2">
      <button className="bg-white p-2 rounded-full shadow-md"><i className="fas fa-heart"></i></button>
      <button className="bg-white p-2 rounded-full shadow-md"><i className="fas fa-eye"></i></button>
    </div>
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
    <h2 className="text-md font-semibold">{product.name}</h2>
    <div className="text-red-500 text-xl font-bold">{product.price}</div>
    <div className="text-gray-500 line-through">{product.originalPrice}</div>
    <div className="flex items-center mt-2">
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}></i>
        ))}
      </div>
      <span className="text-gray-600 ml-2">({product.reviews})</span>
    </div>
  </div>
);

const Carouselsecond = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-10 relative bottom-28">
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
      <div className="flex justify-center mt-6 cursor-pointer">
        <button className="bg-red-500 text-white px-6 py-3 my-12 hover:cursor-pointer">View All Products</button>

      </div>

      
    

    </div>
  

  );
  
};

export default Carouselsecond;
