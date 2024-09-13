import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
// import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
// import Headersecondpage from './components/SecondPage/Headersecondpage';
import Carouselsecond from './components/SecondPage/Carouselsecond';
import Headerthirdpage from './components/ThirdPage/Headerthirdpage';
import img from './assets/images/Frame 600.jpg';
import Fourthpage from './components/fourth/Fourthpage';
import Footer from './components/Footer';
import Layoutpage from './components/layout/Layoutpage';
import Last from './components/lastone/Last';
import ScrollAnimation from './components/ScrollAnimation';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import Appes from './components/SecondPage/Appes';
import Signupheader from './components/Pages/Signupheader';
import { Outlet } from 'react-router-dom';
import Maincontent from './components/Pages/Maincontent';
import Loginheader from './components/Pages/Loginheader';
import About from './About';
import Productdetail from './Productdetail';
import Scrolltotop from './components/lastone/Scrolltotop';
import Modal from './components/Modal';
import { Navigate } from 'react-router-dom';


import Fourofour from './components/header/404/Fourofour';
import Contact from './Contact';
import Profile from './Profile';
import Cart from './Cart';
import Billingdetail from './Billingdetail';
import SidebarCarousel from './components/SidebarCarousel';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import BillingDetail from './Billingdetail';
import { useEffect } from 'react';
import Loader from './components/Loader';
import Wishlist from './Wishlist';
// import UserContextProvider from './Context/UserContextProvider';
import ContextLogin from './Context/ContextLogin';
// import ThemeBtn from './compo/ThemeBtn';
// import ThemeCard from './compo/ThemeCard';
import { ThemeProvider } from './contex/Theme';
import OrderConfirmation from './OrderConfirmation';
function App() {




  const Layout = ({ children}) => {

    const [selectedProduct, setSelectedProduct] = useState(null);

   
    return (
      <>


<Header cust={true} setSelectedProduct={setSelectedProduct} />

<SidebarCarousel selectedProduct={selectedProduct} />
{/* <SidebarCarousel  /> */}

        <ScrollAnimation>
          <div>
            <Appes />



          </div>
          {/* <Carouselsecond /> */}
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="relative">
            <Headerthirdpage category={false} list={true} cardd={true} arrows={true} box={true} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div>
            <Headerthirdpage category={true} list={false} cardd={false} arrows={false} box={false} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="ad flex justify-center align-top items-start -my-48 ">
            <img src={img} alt="Ad Image" />
          </div>
        </ScrollAnimation>
        <div className="relative top-80">
          <ScrollAnimation>
            <Fourthpage />
          </ScrollAnimation>
        </div>
        <div className="relative top-72">
          <ScrollAnimation>
            <Layoutpage />
          </ScrollAnimation>
        </div>
        <ScrollAnimation>
          <div className="relative top-80">
            <Last />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>

          <div className="relative top-96">
            <Footer className="foot" />
          </div>

        </ScrollAnimation>

        {children}
      </>
    );
  };



  // const home=()=>{
  //   return <h1></h1>

  // }
  // const contact=()=>{

  // }
  // const about=()=>{

  // }
  // const signup=()=>{

  // }


  const location = useLocation();
  const [showModal , setShowModal] = useState(false);





  useEffect(() => {
    const modalDismissed = localStorage.getItem('modalDismissed');

    if (modalDismissed === 'true') {
      // Set a timeout to show the modal after 10 seconds
      const timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 10000);

      // Cleanup timeout on component unmount
      return () => clearTimeout(timeoutId);
    }
  }, []);



  useEffect(() => {

    // If the modal is dismissed, save this information in localStorage
    if (!showModal) {
      localStorage.setItem('modalDismissed', 'true');
    }
  }, [showModal]);



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
      x:"100vw",
      transition:{
        ease:"easeInOut",
      }

    }
  }
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const contVariant1={
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


  const [themeMode,setThemeMode]=useState('light');

  const lightTheme=()=>{
    setThemeMode('light');
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }


  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (

  
    <>

<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>

        {/* <SmoothScrollWrapper> */}
      <Modal showModal={showModal} setShowModal={setShowModal}/>

      <AnimatePresence mode="wait">

          <Routes location={location} key={location.key}>
            
            <Route path='/' element={<motion.div
                  variants={contVariant1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Layout /></motion.div>} />
                <Route path="/Home" element={<Navigate to="/"/>}/>
            <Route path="/Home/Signup" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Signupheader /></motion.div>} />
            <Route path="/login" element={<motion.div
                  variants={contVariant1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Loginheader /></motion.div>} />
            <Route path="/Home/About" element={ 
                <About setShowModel={setShowModal}
                 onExitComplete={()=>{
      setShowModal(true)
    }} 
    />} />
<Route
              path="/Home/Contact"
              element={
                <motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route path="/profile" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Profile /></motion.div>} />

            <Route path="/account/product/:id" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Productdetail /></motion.div>} />
                 <Route path="/account/ourproduct/:id" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Productdetail /></motion.div>} />
                 <Route path="/account/product/cart" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Cart /></motion.div>} />

                
            <Route path="/account/product/cart/billingdetail" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><BillingDetail /></motion.div>} />
<Route path="/wishlist" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Wishlist /></motion.div>} />
                 <Route path="/*" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><Fourofour /></motion.div>} />
                <Route path="/orderconfirmed" element={<motion.div
                  variants={contVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                ><OrderConfirmation /></motion.div>} />
          </Routes>
         
        </AnimatePresence> 

      {/* </SmoothScrollWrapper>  */}
       
       {/* <Loader></Loader> */}




       {/* Next project shuru he */}



{/* <UserContextProvider>
  <h1>React with Asim</h1>
  <ContextLogin></ContextLogin>
  <ContextProfile></ContextProfile>


</UserContextProvider> */}

{/* <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className='flex flex-wrap min-h-screen items-center dark:bg-black'>
  <div className="w-full">

    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
      <ThemeBtn></ThemeBtn>

    </div>
    <div className="w-full max-w-sm mx-auto">
    <ThemeCard></ThemeCard> */}

      {/* Card */}

    {/* </div>
  </div>

</div>
</ThemeProvider> */}
</ThemeProvider>

    </>

  );
}

export default App;




















// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux';
// import { increment,decrement } from './counter/counterSlice';

// const App = () => {
//   const count=useSelector((state)=>state.counter.value);
//  const dispatch=useDispatch();
//   return (
//     <div>

//       <h1 className='text-5xl text-black'>The current counter is {count} </h1>
//       <button onClick={()=>dispatch(increment())}>Increment</button>
//       <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     </div>
//   )
// }

// export default App
