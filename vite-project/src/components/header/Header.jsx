import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from "react-router-dom";
import SidebarCarousel from '../SidebarCarousel';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { Link } from "react-router-dom";
import { easeInOut, motion } from 'framer-motion';
import { handleSuccess } from '../../Utils';
import lightMode from '../../assets/images/dark-mode.png';
import darkMode from '../../assets/images/night-mode.png';
import useTheme from '../../contex/Theme';
import { useFavContext } from '../../Context/Fav_context';
import { useCartContext } from '../../Context/Cart_context';
import axios from 'axios';
import SearchResultList from './SearchResultList';
import { useRef } from 'react';
const Header = (props) => {



  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Hamara token')); // Check if token exists to determine if user is logged in


  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });



  const cust = props.cust;
  const  setSelectedProduct =props.setSelectedProduct ;



  const buttonEffect = {
    hover: {
      x: 0.8,
      scale: 1.01,
      originX: 0,
      transition: {
        repeat: 20,            // Repeats the animation 20 times
        repeatType: "reverse", // Alternates the direction of the animation
        duration: 0.1,  // This makes the animation repeat 20 times
      },
    },
  };

  const svgimg = {
    hidden: {
      rotate: 360,
    },
    visible: {
      rotate: 0,
      transition: { duration: 0.5, delay: 1 },


    }
  }
  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      }
    }
  }
  const MotionLink = motion(Link);

  const handleLogout = (e) => {

    localStorage.removeItem('Hamara token');
    localStorage.removeItem('LoggedIn User');
    setIsLoggedIn(false); // Update state to reflect user is logged out

    handleSuccess("User logout successfully");


  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:5000/account/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      console.log(result); // Check what is actually being returned

      const { success, message, jsonweb, name, error } = result;

      if (success) {
        handleSuccess(message);
        console.log("JWT Token:", jsonweb);
        console.log("User Name:", name);
        localStorage.setItem('Hamara token', jsonweb);
        localStorage.setItem('LoggedIn User', name);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        handleError(error.details[0].message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };






  useEffect(() => {
    // Update the isLoggedIn state whenever the token changes
    setIsLoggedIn(!!localStorage.getItem('Hamara token'));
  }, [localStorage.getItem('Hamara token')]);


  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const sectionHero = document.querySelector('.tought');
  //   const navHeader = document.querySelector('.sticket');

  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsSticky(!entry.isIntersecting); // Set sticky if the section is not intersecting
  //   }, {
  //     root: null,
  //     threshold: 0,
  //   });

  //   if (sectionHero) {
  //     observer.observe(sectionHero);
  //   }

  //   return () => {
  //     if (sectionHero) {
  //       observer.unobserve(sectionHero);
  //     }
  //   };
  // }, []);


  const [isSticky, setFix] = useState(false);


  function setFixed() {
    if (window.scrollY >= 402) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed)
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [chain, setChain] = useState(true);
  const handleChange = () => {
    setChain(!chain);
    if (chain) {
      lightTheme();
    }
    else {
      darkTheme();
    }
  }
  const { fav } = useFavContext();

  const { cart } = useCartContext();
  const totalItems = fav.length;
  const totalCartitem = cart.length;

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const rop = (value) => {
    const api1=axios.get("http://localhost:5000/account/product/all");
    const api2=axios.get("http://localhost:5000/account/ourproducts/all");
    axios.all([api1, api2])
    .then(axios.spread((resp1, resp2) => {
      const data1 = resp1.data.filter(user =>
        user && user.title && user.title.toLowerCase().includes(value.toLowerCase())
      );
      const data2 = resp2.data.filter(user =>
        user && user.title && user.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults([...data1, ...data2]); // Combine results from both APIs
    }))
    .catch(error => {
      console.log("Error", error);
    });

  }
 
  const [visiblity,nonvisibility]=useState(false);

  const searchListRef = useRef(null);

  const handleInput = (value) => {
    setInput(value);
    rop(value);
    nonvisibility(true); // Open the search list when there are results


  }
  const handleSelectProduct = (product) => {
    setSelectedProduct(product); // Update the selected product in App.jsx
    nonvisibility(false); // Close the search list
    setInput(product.title); // Set the input value to the selected product's title
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchListRef.current && !searchListRef.current.contains(event.target)) {
        nonvisibility(false); // Close the search list if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchListRef]);


const handleFiltering=()=>{
  addFiltering(product._id, product.discounted_price, product.title, product.img);
}
  return (
    <>
      <header className={`sticket ${isSticky ? 'scrolled' : 'scrolling'} flex justify-between px-10 font-custom border-b border-b-gray-600 text-center align-middle items-center`}>

        <div className="logo">
          <Link to="/">
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50" variants={svgimg} initial="hidden" animate="visible">
              <motion.text variants={pathVariant} initial="hidden" animate="visible"
                x="0"
                y="35"
                fontFamily="Poppins"
                fontSize="27"
                fontWeight="600"
                cursor="pointer"
                fill="black">
                Exclusive
              </motion.text>
            </motion.svg>
          </Link>

        </div>
        <motion.nav className='nav-menu lg:space-x-5 xl:space-x-10 text-lg xl:text-xl flex font-normal text-center items-center lg:text-base'>
          <MotionLink to="/" variants={buttonEffect} whileHover="hover">Home</MotionLink>
          <MotionLink to="/Home/Contact" variants={buttonEffect} whileHover="hover">Contact</MotionLink>
          <MotionLink to="/Home/About" variants={buttonEffect} whileHover="hover">About</MotionLink>
          <MotionLink to="/Home/Signup" variants={buttonEffect} whileHover="hover">Sign Up</MotionLink>
        </motion.nav>

        <div className="nav-menu icons flex space-x-1">
          <div className=" relative w-72 lg:w-42">
            <input
              type="search"
              name="search"
              id="search"
              value={input}
              onChange={(e) => { handleInput(e.target.value) }}
              placeholder="What are you looking for?"
              className="xl:outline-none py-3 px-5 w-full rounded-md bg-gray-100 pr-10 lg:w-30 lg:text-md py-1 px-5 md:-mx-5 outline-none focus:outline-none focus:ring-2 focus:ring-slate-500 "
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="nav-menu absolute right-3 text-xl text-black top-1/2 transform -translate-y-1/2 cursor-pointer lg:px-1"
            />

{visiblity && (
      <div ref={searchListRef} className='bg-[#f6f6f6] absolute top-full left-0 w-full shadow-lg rounded-b-lg z-10 text-left overflow-y-auto max-h-[300px] border border-slate-500'>
  
    {results.map((result, id) => (
      <div key={id} className='border-b border-gray-200 p-2 pl-4 text-sm hover:bg-[#eee]' onClick={() =>handleSelectProduct(result)}>
        {result.title}
      </div>
    ))}
  </div>
)}

            
                
</div>                      





          <button className="px-4   bg-transparent rounded-md lg:px-1 md:px-0">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} className='  text-2xl text-black' />
              <span className='w-14 h-5 border rounded-full bg-red-500  px-2 py-[2px] text-white text-sm relative bottom-3 right-1'>{totalItems}</span>
            </Link>
          </button>

          <button className=" px-4 bg-transparent rounded-md lg:px-3 ">
            <Link to="/account/product/cart">

              <FontAwesomeIcon icon={faShoppingCart} className=' text-2xl text-black' />
              <span className='w-14 h-5 border rounded-full bg-red-500  px-2 py-[2px] text-white text-sm relative bottom-3 right-1'>{totalCartitem}</span>
            </Link>

          </button>
          {cust && <button type="button"
            ref={setReferenceElement}
            onClick={() => setIsOpen(!isOpen)} className="nav-menu px-4 bg-transparent rounded-md lg:px-3">

            <FontAwesomeIcon icon={faUser} className=' nav-menu text-2xl text-black' />
          </button>
          }
          {/* {chain?(<img src={lightMode}  checked={themeMode==="light"} alt="Light Mode" className=' nav-menu w-7 h-7  text-black relative top-2 cursor-pointer' onClick={handleChange} />):(<img src={darkMode} alt="Dark Mode" className=' nav-menu w-7 h-7  text-black relative top-2 cursor-pointer' onClick={handleChange} />)
} */}

          {isOpen && (
            <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="popper-menu">
              <Link to="/profile">
                <div className="menu-item">Manage My Account</div>
              </Link>
              <div className="menu-item">My Order</div>
              <div className="menu-item">My Cancellations</div>
              <div className="menu-item">My Reviews</div>

              {isLoggedIn ? (
                <div className="menu-item" onClick={handleLogout}>Logout</div>
              ) : (
                <div className="menu-item" onClick={handleLogin}>
                  <Link to='/login'>Login</Link>
                </div>
              )}
              <div ref={setArrowElement} style={styles.arrow} className="popper-arrow" />
            </div>
          )}

        </div>
      </header>

      <Outlet></Outlet>

    </>

  );
}


export default Header;