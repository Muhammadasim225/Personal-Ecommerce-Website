import Header from "../Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
const Fourofour = () => {
    return (
      <>
        <Header></Header>
        <Breadcrumbs></Breadcrumbs>
        <div className="box w-full h-screen flex bg-none justify-center align-middle items-center flex-col  space-y-3">
          <h1 className="text-8xl font-medium">404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Link to="/">
          <button className="text-white mt-10 bg-red-500 p-5 font-custom rounded-md font-normal" >Back to home page</button>
        
          </Link>

        </div>
        <Footer></Footer>

      
      </>
      
      );
}
 
export default Fourofour;