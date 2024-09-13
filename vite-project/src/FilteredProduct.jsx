import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart, faEye, faStar } from '@fortawesome/free-regular-svg-icons';
import { useFilterContext } from './Context/FilteringContext';

const FilteredProduct = ({ product }) => {
  if (!product) return null;
  
  // const {filter}=useFilterContext();// Return null if no product is provided

  return (
    <div className="product-card bg-slate-50 p-4 rounded-lg shadow-md font-custom hover:cursor-pointer m-10">
      <div className="flex flex-col items-center absolute top-2 right-2 space-y-2">
        <button className="bg-white px-2 py-1 rounded-full shadow-md">
          <FontAwesomeIcon icon={faHeart} className="text-black" />
        </button>
        <button className="bg-white px-2 py-1 rounded-full shadow-md focus:text-red-500 focus:bg-red-500">
          <FontAwesomeIcon icon={faEye} className="text-black" />
        </button>
      </div>
      <Link to={`/account/product/${product._id}`}>
        <img src={product.img} alt={product.title} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-md font-semibold">{product.title}</h2>
        <div className="text-red-500 text-xl font-bold">{product.discounted_price}</div>
        <div className="text-gray-500 line-through">{product.price}</div>
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
          <span className="text-gray-600 ml-2">{product.reviews} reviews</span>
        </div>
      </Link>
    </div>
  );
};

export default FilteredProduct;
