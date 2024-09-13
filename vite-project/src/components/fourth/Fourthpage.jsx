import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../App.css';
import dogfood from '../../assets/images/dogfood.jpeg';
import satin_jacket from '../../assets/images/satin_jacket.jpg';
import dslr from '../../assets/images/dslr.jpeg';
import car from '../../assets/images/car.jpeg';
import shoes from '../../assets/images/shoes.jpg';
import laptop from '../../assets/images/laptop.jpg';
import care from '../../assets/images/care.jpeg';
import controller from '../../assets/images/GP11_PRD3-1000x563-1-600x338.jpeg';
import airpod from '../../assets/images/airpod.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faHeart,faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import { useFavContext } from '../../Context/Fav_context';
import { useCartContext } from '../../Context/Cart_context';
  // console.log(product);








  // const products = [
  //   {
  //     id: 1,
  //     discount: '-40%',
  //     image: dogfood,
  //     name: 'Breed Dry Dog Food',
  //     price: '$120',
  //     rating: 4.5,
  //     reviews: 88,
  //   },
  //   {
  //     id: 2,
  //     discount: '-35%',
  //     image: dslr,
  //     name: 'CANON EOS DSLR Camera',
  //     price: '$960',
  //     rating: 4.0,
  //     reviews: 75,
  //   },
  //   {
  //     id: 3,
  //     discount: '-30%',
  //     image: satin_jacket,
  //     name: 'Quilted Satin Jacket',
  //     price: '$660',
  //     rating: 4.5,
  //     reviews: 55,
  //   },
  //   {
  //     id: 4,
  //     discount: '-25%',
  //     image: car,
  //     name: 'Kids Electric Car',
  //     price: '$960',
  //     rating: 4.5,
  //     reviews: 65,
  //   },
  //   {
  //     id: 5,
  //     discount: '-35%',
  //     image: shoes,
  //     name: 'Jr Zoom Soccer Cleats',
  //     price: '$1160',
  //     rating: 4.0,
  //     reviews: 35,
  //   },
  //   {
  //     id: 6,
  //     discount: '-105%',
  //     image: laptop,
  //     name: 'ASUS FHD Gaming Laptop',
  //     price: '$700',
  //     rating: 2,
  //     reviews: 325,
  //   },
  //   {
  //     id: 7,
  //     discount: '-105%',
  //     image: care,
  //     name: 'Curology Product Set',
  //     price: '$500',
  //     rating: 5,
  //     reviews: 145,
  //   },
  //   {
  //     id: 8,
  //     discount: '-15%',
  //     image: controller,
  //     name: 'GP11 Shooter USB Gamepad',
  //     price: '$660',
  //     rating: 3.0,
  //     reviews: 55,
  //   },
  //   {
  //     id: 9,
  //     discount: '-50%',
  //     image: airpod,
  //     name: 'Haylau GT1 v22 Earbuds',
  //     price: '$6',
  //     rating: 3,
  //     reviews: 461,
  //   }
  // ];

  const ProductCard =({ product, selectedProduct, onCardClick }) => {
    const { addToCart } = useCartContext();
    const { addToFav } = useFavContext();
    const {removeToFav}=useFavContext();

    const BASE_URL = 'http://localhost:5000';


    const handleAddToCart = () => {
      const fullImgPath = `${BASE_URL}${product.img}`;

      addToCart(product._id, product.discounted_price, product.title,fullImgPath);
    };
  

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
        const fullImgPath = `${BASE_URL}${product.img}`;

        addToFav(product._id, product.discounted_price, product.title,fullImgPath);
  
        console.log("The id is ",product._id)
      } else {
        // If the button is toggled off, remove the product from favorites (if needed)
        // removeFromFav(product._id); // Uncomment this line if you want to handle removing from favorites
        return removeToFav(product._id);
  
    };
  }




return(
    <div
      className="bg-slate-50 p-4 rounded-lg shadow-md relative font-custom my-2 product-card group"
    >
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 p-1 rounded">{product.price}</div>
      <div className="flex flex-col  items-center absolute top-2 right-2 space-y-2">
      <button
          className={`px-2 py-1 rounded-full shadow-md ${isHeartButtonToggled ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
          onClick={handleHeartButtonClick}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="bg-white px-2 py-1 rounded-full shadow-md">        <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <Link to={`/account/ourproduct/${product._id}`}>

      <img src={`http://localhost:5000${product.img}`} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-md font-semibold">{product.title}</h2>
      <div className="text-red-500 text-xl font-semibold">{product.discounted_price}</div>
      </Link>

      <div className="absolute bottom-1 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to='/account/product/cart'>
          <button
            className="bg-red-500 text-white px-[110px] py-2 rounded hover:bg-red-600"             onClick={handleAddToCart}

          >
            Add to Cart
          </button>
        </Link>
      </div>

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
    </div>
  )};





  const Fourthpage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const slider = useRef(null);



    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Hamara token')); // Check if token exists to determine if user is logged in

    const sliderRef = useRef(null);
  
    const handleCardClick = (productId) => {
      setSelectedProduct(productId);
    };
    const BASE_URL = 'http://localhost:5000/images/';
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/account/ourproducts/all`)
        .then((response) => {
          const allProducts = response.data;
          allProducts.img = BASE_URL + allProducts.img;
          setProduct(allProducts);
        })
        .catch((error) => {
          console.log("Error fetching the data", error);
        });
    }, [id]);



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent font-custom p-8">
      <div className="w-full max-w-5xl relative">
        <div className="flex items-center mb-6 -mx-20">
          <div className="bg-red-500 mr-4 w-5 h-10 rounded-md"></div>
          <h2 className="text-md font-custom text-red-500 font-bold flex-grow">Our Products</h2>

          <button
            className="transform bg-gray-200 rounded-full p-2 mx-2 h-10 hover:bg-gray-200 focus:outline-none z-10 mr-2 relative top-16"
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
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 -mx-20 relative right-3 my-8">Explore Our Products</h1>

        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {product.map(product => (
            <ProductCard key={product._id} product={product} selectedProduct={selectedProduct}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <div className="flex justify-center cursor-pointer relative bottom-6">
          <button className="bg-red-500 text-white px-6 py-3 relative top-5 hover:cursor-pointer">View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
