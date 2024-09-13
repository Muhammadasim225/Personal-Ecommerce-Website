import Maincontent from "./Maincontent";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'; 
import Header from "../header/Header";
// import 'react-toastify/dist/ReactToastify.css';

const Signupheader = () => {



    return ( 
      <>

<Header cust={true} />
{/* <div className="logo ">
            <Link to="/" className="xl:text-3xl font-semibold lg:text-2xl md:text-2xl">Exclusive</Link>
            </div>
            <nav className='text-black space-x-9 xl:space-x-10 text-lg xl:text-xl flex font-normal text-center items-center lg:text-base '>
            <Link to="/">Home</Link>
                <Link to="/Home/Contact">Contact</Link>
                <Link to="/Home/About">About</Link>
                <Link to="/Home/Signup">Sign Up</Link>
            </nav>
            <div className="icons flex space-x-1">
            <div className="relative w-72 lg:w-42">
          <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="What are you looking for?" 
            className="xl:outline-none py-3 px-5 w-full rounded-md bg-gray-100 pr-10 lg: w-30 py-1 px-5 md:-mx-5 outline-none"
          />
           <FontAwesomeIcon 
            icon={faSearch} 
            className="nav-menu absolute right-3 text-xl text-black top-1/2 transform -translate-y-1/2 cursor-pointer lg:px-1"
          />
        </div>
            </div> */}
<Maincontent title={false} blank={true} secondblank={true} thirdblank={true} fourcontent={true}></Maincontent>
<Footer></Footer>

</>
     );
}
 
export default Signupheader;