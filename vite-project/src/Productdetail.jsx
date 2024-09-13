import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import productdetailimage1 from './assets/images/productdetailimage1.png';
import productdetailimage2 from './assets/images/productdetailimage2.png';
import productdetailimage3 from './assets/images/productdetailimage3.png';
import productdetailimage4 from './assets/images/productdetailimage4.png';
import productdetailimage5 from './assets/images/productdetailimage5.png';
import icondelivery from './assets/images/icon-delivery.png';
import iconreturn from './assets/images/Icon-return.png';
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from 'react-router-dom';


import { faStar } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from './assets/images/ddd.jpg';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import axios from 'axios';
import { handleSuccess } from "./Utils";
import { useCartContext } from "./Context/Cart_context";
import { useFavContext } from "./Context/Fav_context";









const NumberInput = () => {


  const [nut, setbut] = useState(0);
  const kale = () => {
    setbut(nut + 1);

  }
  const nale = () => {
    if (nut > 1) {
      setbut(nut - 1);
    }


  }

  return (
    <div className="flex items-center border border-gray-700 rounded">
      {/* Decrease button */}
      <button className="flex items-center justify-center w-12 h-12 text-lg border-r border-gray-700 rounded" onClick={nale}>
        -
      </button>
      {/* Number display */}
      <input
        type="search"
        value={nut}
        className="w-[90px] text-center text-lg font-semibold outline-none" onChange={() => { }}
      />

      {/* Increase button */}
      <button className="flex items-center justify-center w-12 h-12 text-lg bg-red-500 text-white rounded-r" onClick={kale}>
        +
      </button>
    </div>
  );
};

// const kake=useRef();
// const [oldcard,withbutton]=useState('');

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
        // const discounted_price = parseFloat(discounted_price.replace('$', ''));

  const handleAddToCart = () => {
    addToCart(product._id, product.discounted_price, product.title, product.img);
  };

  // const discounted_price = parseFloat(discounted_price.replace('$', ''));



  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Hamara token')); // Check if token exists to determine if user is logged in

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
        <h2 className="text-md font-semibold">{product.name}</h2>
        <div className="text-red-500 text-xl font-bold">{product.discounted_price}</div>
      </Link>


      <div className="absolute bottom-1 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        <Link to="/cart">
        <button className="bg-red-500 text-white px-16 py-2 rounded hover:bg-red-600" onClick={handleAddToCart}>
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










const ProductDetail = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [crit, setCrit] = useState({});
  const [shit, setShit] = useState([]);
  
  const [mainImage, setMainImage] = useState(null);
  const nonee = useRef();
  const slider = useRef(null);
  const [isHeartButtonToggled, setIsHeartButtonToggled] = useState(false);
const {fav}=useFavContext();

  const [activeSize, setActiveSize] = useState(null);











  const BASE_URL = 'http://localhost:5000/images/';

  // Update the crit object before using it
 
  




  // Fetch the data of Our product in detail:
  




  useEffect(() => {
    axios
      .get(`http://localhost:5000/account/product/all`)
      .then((response) => {
        const allProducts = response.data;
        setProduct(allProducts);
      })
      .catch((error) => {
        console.log("Error fetching the data", error);
      });
  


  }, [id]);

 

  const handleButtonClick = (size) => {
    setActiveSize(size);
  };




  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
  };

  const changeImage = (image) => {
    const kino=setMainImage(image);
    console.log(kino);
  };

  if (!crit) {
    return <div>Loading...</div>;
  }




  useEffect(() => {
    const fetchData2 = async () => {
        console.log(`Fetching from /ourproduct/${id}`);
        axios.get(`http://localhost:5000/account/ourproduct/${id}`)
            .then((response) => {
                const productDetail = response.data[0];
                if (productDetail) {
                    console.log("This is our product", productDetail);
                    setShit(productDetail); 
                    setMainImage(productDetail.mainImage); 
                }
            })
            .catch((error) => {
                console.log("Error fetching our data", error);
            });
    }
    fetchData2();
}, [id]);



useEffect(() => {
  const fetchData1 = async () => {
      console.log(`Fetching from /product/${id}`);
      axios.get(`http://localhost:5000/account/product/${id}`)
          .then((response) => {
              const productDetail = response.data;
              if (productDetail) {
                  console.log("This is product", productDetail);
                  setCrit(productDetail); 
                  setMainImage(productDetail.mainImage); 
              }
          })
          .catch((error) => {
              console.log("Error fetching data", error);
          });
  }
  fetchData1();
}, [id]);


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  // For related items

  //   const prds = [
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Check if token exists to determine if user is logged in

  const navigate=useNavigate();


  const { addToFav } = useFavContext();
  const {removeToFav}=useFavContext();


  const [isHeartButtonTogg, setIsHeartButtonTogg] = useState(() => {
    // Retrieve the saved state from localStorage
    const savedState = localStorage.getItem(`heartToggle_${product._id}`);
    return savedState === 'true';
});

useEffect(() => {
    // Update localStorage whenever the heart button state changes
    localStorage.setItem(`heartToggle_${product._id}`, isHeartButtonTogg);
}, [isHeartButtonTogg, product._id]);




  const hhandleHeartButtonClick = (event) => {
    event.stopPropagation();
    const nextToggleState = !isHeartButtonTogg; // Determine the next state of the toggle
    setIsHeartButtonTogg(nextToggleState); // Update the state
    if (nextToggleState) {
      // If the button is toggled on (i.e., nextToggleState is true), add the product to favorites
      addToFav(crit._id, crit.discounted_price, crit.title, crit.img);

      console.log("The id is ", crit._id);
    } else {
      // If the button is toggled off, remove the product from favorites (if needed)
      // removeFromFav(product._id); // Uncomment this line if you want to handle removing from favorites
      return removeToFav(crit._id);

  };
}



const {addToCart}=useCartContext();
  
  const nxtPage = (product) => {
    if (isLoggedIn) {
      navigate(`/account/product/cart`);  // Use crit._id here
    }
    addToCart(product._id, product.discounted_price, product.title, product.img);
  }

// const [imm,setImm]=useState("http://localhost:5000/images/");

  

  // console.log(productoo);

  return (


    <>
      <Header cust={true} />
      <div className="breadcrumb pt-10 ml-20">
        <Breadcrumbs />
      </div>
      <div className="flex justify-start mx-[100px] my-[40px] font-custom">
        {/* Image Gallery Section */}

        <div className="flex flex-col items-center flex-none mr-10">

          <div className="flex flex-col gap-2 mt-5">
          {crit ?(<img
              src={`http://localhost:5000${crit.smallImage1}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(crit.smallImage1)} 
            />):(<img
              src={`http://localhost:5000${shit.smallImage1}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(shit.smallImage1)} 
            />)}
            

            {crit ?(<img
              src={`http://localhost:5000${crit.smallImage2}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(crit.smallImage2)} 
            />):(<img
              src={`http://localhost:5000${shit.smallImage2}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(shit.smallImage2)} 
            />)}



{crit ?(<img
              src={`http://localhost:5000${crit.smallImage3}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(crit.smallImage3)} 
            />):(<img
              src={`http://localhost:5000${shit.smallImage3}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(shit.smallImage3)} 
            />)}
           {crit ?(<img
              src={`http://localhost:5000${crit.smallImage4}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(crit.smallImage4)} 
            />):(<img
              src={`http://localhost:5000${shit.smallImage4}`}
              alt="Thumbnail 4" ref={nonee}
              className="w-[70px] h-[60px] cursor-pointer" onClick={() => changeImage(shit.smallImage4)} 
            />)}
          </div>
        </div>
        <div className="w-[950px] h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center">

        <img
          src={`http://localhost:5000${mainImage}`}
          alt="Product"
          className="w-[600px] h-[400px]"
        />
                </div>


        {/* Product Information Section */}
        <div className="flex-grow pl-12">
        {crit && (
                <h1 className="text-3xl font-semibold">
                    {crit.title}
                </h1>
            )}
             {shit && (
                <h1 className="text-3xl font-semibold">
                    {shit.title}
                </h1>
            )}


          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            {crit && ( crit && (<span className="text-gray-500">{crit.reviews}</span>
))}
 {shit && ( shit && (<span className="text-gray-500">{shit.reviews}</span>
))}
    {crit ? (
  crit.inStock ? (
    <span className="text-green-500 text-lg font-medium ml-3">In Stock</span>
  ) : (
    <span className="text-red-500 text-lg font-medium ml-3">Out of Stock</span>
  )
) : (
  shit && (
    shit.inStock ? (
      <span className="text-green-500 text-lg font-medium ml-3">In Stock</span>
    ) : (
      <span className="text-red-500 text-lg font-medium ml-3">Out of Stock</span>
    )
  )
)}
 



{/* {crit && ( crit.inStock ? (
              <span className="text-green-500 text-lg font-medium ml-3">In Stock</span>
            ) : (
              <span className="text-red-500 text-lg font-medium ml-3">Out of Stock</span>
            ))}

                       
{shit && ( shit.inStock ? (
              <span className="text-green-500 text-lg font-medium ml-3">In Stock</span>
            ) : (
              <span className="text-red-500 text-lg font-medium ml-3">Out of Stock</span>
            ))} */}






            
           
             


          </div>
          {crit &&(<div className="text-4xl font-medium mt-4">{crit.discounted_price}</div>)}
          {shit &&(<div className="text-4xl font-medium mt-4">{shit.discounted_price}</div>)}

         {crit && (<p className="mt-4 text-gray-700">
            {crit.description}
          </p>)}
          {shit && (<p className="mt-4 text-gray-700">
            {shit.description}
          </p>)}

          <br />
          <div className="line w-full h-[0.5px] bg-black"></div>
          <div className="mt-5">
            <div className="mb-5 space-x-3">
              <label className=" font-medium text-lg">Colours:</label>
              {/* Add color selection inputs here */}
              {/* {crit.availablity==="blue" ? ( */}

              <input type="radio" name="colors" value="blue" className="custom-checkbox2 " />
              {/* ) */}
              {/* : */}
              {/* ( */}
              <input type="radio" name="colors" value="grey" className="custom-checkbox1" />
              {/* ) */}
              {/* } */}

            </div>
            <div className="mb-5 flex items-center">
              <label className="font-medium text-lg">Size:</label>

              <div className="help flex space-x-3 ml-10">
                {/* {crit.size==="s" ? */}
                {/* ( */}
                <button className={`w-8 h-8 flex justify-center items-center border border-gray-700 rounded font-semibold p-4
                  ${activeSize === 'S'
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-transparent text-gray-700 border-gray-700'
                  }`}
                  onClick={() => handleButtonClick('S')}>S</button>

                {/* ):  */}
                {/* crit.size==="m" ? ( */}
                <button className={`w-8 h-8 flex justify-center items-center border border-gray-700 rounded font-semibold p-4
                 ${activeSize === 'M'
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-transparent text-gray-700 border-gray-700'
                  }`}
                  onClick={() => handleButtonClick('M')}>M</button>

                {/* ): crit.size==="l" ?( */}
                <button className={`w-8 h-8 flex justify-center items-center border border-gray-700 rounded font-semibold p-4
                 ${activeSize === 'L'
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-transparent text-gray-700 border-gray-700'
                  }`}
                  onClick={() => handleButtonClick('L')}>L</button>
                {/* ): crit.size==="xl" ?( */}
                <button className={`w-8 h-8 flex justify-center items-center border border-gray-700 rounded font-semibold p-4 ${activeSize === 'XL'
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-transparent text-gray-700 border-gray-700'
                  }`}
                  onClick={() => handleButtonClick('XL')}>XL</button>
                {/* ): null */}
                {/* } */}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <NumberInput />
              <button className="bg-red-500 text-white border border-black  px-16 py-3 rounded hover:border border-red-500 hover:bg-transparent hover:text-red-500" onClick={() => nxtPage(crit)}>
              
                Buy Now
              </button>
              {crit && (
    crit.addToFav === true ? (
        <button
            className={`w-12 h-12 flex justify-center items-center border rounded ${isHeartButtonTogg ? 'bg-red-500 text-white' : 'bg-white border border-red-500 text-red-500'}`}
            onClick={hhandleHeartButtonClick}
        >
            <FontAwesomeIcon icon={faHeart} size="2x" />
        </button>
    ) : (
        <button className="w-12 h-12 flex justify-center items-center border border-gray-700 rounded hover:bg-red-500 hover:text-white hover:border-red-500">
            <FontAwesomeIcon icon={faHeart} size="2x" />
        </button>
    )
)}


            </div>
          </div>
          <div className="mt-5 border p-6 border-gray-800 pt-5">
            <div className="mb-3 flex space-x-5">
              <img src={icondelivery} className="w-[45px] h-[60px]" alt="" />
              <div className="ann flex- flex-col">
              {crit && (crit.freeDelivery === true ? (
                  <>
                    <span className="text-lg font-bold">Free Delivery</span>
                    <br />
                  </>
                ) : (
                  <>
                    <span className="text-lg font-bold"> This product is not eligible for free delivery</span>
                    <br />
                  </>

                ))}
                

                <a href="#" className="font-medium underline">
                  Enter your postal code for Delivery Availability
                </a>

              </div>

            </div>


            <div className="mb-5 ">
              <div className="mb-3 flex space-x-5">
                <img src={iconreturn} className="w-[50px]" alt="" />
                <div className="ann flex- flex-col">

                  {crit && ( crit.returnPolicy === true ? (
                      <>
                        <span className="font-bold text-lg">Return Delivery</span>
                        <p>  Free 30 Days Delivery Returns.{" "}
                          <a href="#" className="font-medium underline">
                            Details
                          </a>
                        </p>
                      </>

                    ) : (
                      <span className="font-bold text-lg">Return Delivery not available at this time</span>




                    )
                  )}
                   
                   



                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-16 my-28 font-custom">
        <div className="flex items-center space-x-3">
          <div className="box w-5 h-10 bg-red-500 rounded-md"></div>
          <span className="text-red-500 font-bold">Related item</span>
        </div>
        <Slider ref={slider} {...settings} >
          {product.map(product => (
            <ProductCard key={product._id} product={product} selectedProduct={selectedProduct}
              onCardClick={handleCardClick}
            />
          ))}
        </Slider>
      </div>


      <Footer></Footer>

    </>
  );
};


export default ProductDetail;
