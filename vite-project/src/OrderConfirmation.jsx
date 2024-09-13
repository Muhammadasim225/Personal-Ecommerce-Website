import React from 'react';
import Header from './components/header/Header';
import Breadcrumbs from './components/header/404/Breadcrumbs';
import { faCircleCheck, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import visa from './assets/images/visa.png';
import { useCartContext } from "./Context/Cart_context";
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderConfirmation = () => {
const navigate=useNavigate();
const { state } = useLocation();


const firing=()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "Do you really want to cancel the order?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No"

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cancelled!",
        text: "Your order has been cancelled",
        icon: "success"
      });
      navigate("/");
    }
  }).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
}).then((result) => {
    // Check if the user clicked "OK"
    if (result.isConfirmed) {
      navigate('/');
      // You can add more actions here, e.g., show another alert, redirect, etc.
      Swal.fire("You clicked OK!");
    }
  });
}



  const { cart,total_price,shipping_fee  } = useCartContext();
  const billingInfo = state?.billingInfo; // Retrieve passed billing data

  console.log("This is confirmation page", cart);


  const loggedInEmail = localStorage.getItem('LoggedIn Email');
console.log('Logged in email:', loggedInEmail);


console.log("Billing Info:", billingInfo); // Use this data to display in your confirmation page
// const [billingInfo, setBillingInfo] = useState(null);

// const {id}=useParams();



// const [billingDetails, setBillingDetails] = useState([]);
// const [streetAddress, setStreetAddress] = useState('');

// useEffect(() => {
//     const fetchBillingDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/account/billingdetail/info');
//             setBillingDetails(response.data);
//             setStreetAddress(response.data[0].street_address); // Set street address
//         } catch (error) {
//             console.error('Error fetching billing details', error);
//         }
//     };

  return (
    <>
      <Header cust={true} />
      <div className="breadcrumb pt-10 ml-20">
        <Breadcrumbs />
      </div>

      <div className="container flex-grow  min-w-full flex flex-col items-center py-8 mb-24">
        <h1 className="text-3xl font-semibold font-custom mb-6">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-600 mr-2 text-3xl"
          />
          Thanks for your Order
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full p-6 bg-white rounded-md shadow-lg font-custom">
          {/* Left Column */}
          <div className="col-span-1 border-r pr-6">
            <div className="mb-4">
              <div className='flex flex-row justify-between mb-2'>
                <h5 className="font-bold text-xl">Order No.</h5>
                <h5 className="text-red-500 font-bold">265454011</h5>
              </div>
              <hr />



              <p className="text-sm mt-2 text-gray-600">
                We've sent a confirmation email with your order details to{' '}
                <span className="font-bold">{loggedInEmail}</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For in-store order pickups, please be sure to bring the
                confirmation email and your photo ID.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-bold text-lg">Order Details</h5>
              <div className="flex flex-col items-start mt-2">
                <div className="inner flex flex-row items-center mb-2">
                  <FontAwesomeIcon icon={faHouse} className='text-sm' />
                  <span className="inline-block font-bold text-black px-2 py-1 text-sm rounded-full mr-2">
                    Home Shipping
                  </span>
                </div>


                <div className="text-sm">
                  <p><b>Shipping to: </b> {billingInfo?.street_address}</p>
                  <p><b>Arrives in: </b> 3-4 Business Days</p>

                  {
                    cart.map((prp) => (
                      <div className="spiu flex flex-row items-center space-x-5">

                        <div className="sec">
                          <img src={prp.img} key={prp.img} alt="img" className='w-24 h-auto' />
                        </div>
                        <div className="fir flex flex-col">
                          <p className="mt-2"><b>{prp.title}</b> {prp.description}</p>
                          <p>Part # APP5325</p>
                          <p className="text-blue-700 ">5 YR REPLACEMENT IF DEFECTIVE</p>
                          <p>Qty: 1</p>
                          <p className="font-bold">{prp.discounted_price}$</p>
                        </div>



                      </div>


                    )

                    )
                  }


                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-1 px-4">
            <h5 className="font-bold text-lg mb-4">Order Summary</h5>
            <div className="text-sm">
              <div className="flex justify-between mb-2">
                <span>Subtotal ({cart.length} Item)</span>
                <span>${total_price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping_fee}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>$0.59</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Order Total</span>
                <span>${(total_price + shipping_fee).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 pl-4">
            <div className="text-center">
              <div className="border border-gray-300 rounded-md p-4 mb-4">
                <img
                  src="https://via.placeholder.com/150x50?text=Barcode"
                  alt="Barcode"
                  className="mx-auto mb-2"
                />
                <p className="text-sm">265454011</p>
              </div>
              <button className="block w-full mb-2 bg-white text-black border border-gray-300 rounded py-2">
                Print Order Details
              </button>
              <button className="block w-full mb-2 bg-white text-black border border-gray-300 rounded py-2">
                Go to My Order History
              </button>
              {/* <Link to="/"> */}
              <button onClick={firing} className="block w-full bg-red-500 text-white rounded py-2">
                Cancel Order
              </button>
              {/* </Link> */}
              
              <p className="mt-4 text-sm">
                <i className="fa fa-phone"></i> 1 (877) 238-2623
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OrderConfirmation;
