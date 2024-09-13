import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import Footer from "./components/Footer";
import gpu1 from './assets/images/gpu1.png';
import gpu2 from './assets/images/gpu2.png';
import bkash from './assets/images/bkash.png';
import visa from './assets/images/visa.png';
import nagori from './assets/images/nagori.png';
import mastercard from './assets/images/mastercard.png';
import { useCartContext } from "./Context/Cart_context";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BillingDetail = () => {
    const {cart,total_price,shipping_fee } = useCartContext();
const navigate=useNavigate();

    // const [paymentMethod, setPaymentMethod] = useState([]);
const handlePaymentChange = (event) => {
    const selectedPayment = event.target.value;
    setUserData({ ...userData, paymentMethod: selectedPayment }); // Update payment method in state

    console.log(selectedPayment);
    if(selectedPayment==="Cash on Delivery"){
        console.log("This is ",selectedPayment);
    }
    else{
        console.log("This is ",selectedPayment)
    }
  };


    {console.log("This is billing detail page ",cart.img);}

    const [userData, setUserData] = useState({
        name: "",
        company_name: "",
        street_address: "",
        apartment: "",
        city: "",
        phone_no: "",
        email: "",
        paymentMethod: "",
        productTitle: "",
        productPrice: "",
        subtotal: "",
        shipping: "",
        total: "",
      });

      
    
      // Handle input change
      const handleInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    
        // On name input change, auto-fill other fields
        if (event.target.name === "name") {
          const customer = customerData.find((cust) => cust.name === event.target.value);
          if (customer) {
            setUserData({
              ...userData,
              street_address: customer.street_address,
              apartment: customer.apartment,
              city: customer.city,
              phone_no: customer.phone_no,
              email: customer.email,
            });
          }
        }
      };

      
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!userData.paymentMethod) {
          alert("Please select a payment method.");
          return;
        }
    
        // Add product details to userData
        setUserData({
          ...userData,
          productTitle: cart.map((item) => item.title),
          productPrice: cart.map((item) => item.discounted_price),
          subtotal: total_price,
          shipping: shipping_fee,
          total: total_price + shipping_fee,
        });
    
        axios
          .post("http://localhost:5000/account/billingdetail/info", userData)
          .then((resp) => {
            console.log("Data saved:", resp.data);
            // Navigate to the Order Confirmation page with the userData
            navigate(`/orderconfirmed`, { state: { billingInfo: userData } });
          })
          .catch((err) => {
            console.error("Axios error: ", err);
          });
      };
    

    return ( 
        <div className="font-custom">
            <Header cust={true}/>
            <div className="breadcrumb pt-10 ml-20">
                <Breadcrumbs />
            </div>
            <div className="container mx-auto px-5 mt-24 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Billing Details Form */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold mb-5">Billing Details</h2>
                        <form>
                            <div className="grid grid-cols-1 gap-4">
                                <input type="text" placeholder="First Name*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="name" value={userData.name}/>
                                <input type="text" placeholder="Company Name" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="company_name"                   value={userData.company_name}
                                />
                                <input type="text" placeholder="Street Address*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="street_address"                   value={userData.street_address}
                                />
                                <input type="text" placeholder="Apartment, floor, etc. (optional)" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="apartment"                   value={userData.apartment}
                                />
                                <input type="text" placeholder="Town/City*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="city"                   value={userData.city}
                                />
                                <input type="text" placeholder="Phone Number*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="phone_no"                   value={userData.phone_no}
                                />
                                <input type="email" placeholder="Email Address*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={handleInput} name="email" />
                                <div className="flex items-center mt-4">
                                    <input type="checkbox" id="save-info" className="mr-2" onChange={handleInput} name=""/>
                                    <label htmlFor="save-info" className="text-gray-700">Save this information for faster check-out next time</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <div className="flex flex-col space-y-4">
                            {/* Product Items */}

                            {
                            cart.map((prp, index) => (
                                
                                <div key={prp.id} className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img src={prp.img} alt={prp.title} className="w-12 h-10" />
                                        <span>{prp.title}</span>
                                    </div>
                                    {/* Calculate price * quantity */}
                                    <span>${(prp.discounted_price * prp.amount).toFixed(2)}</span>
                                </div>
                            ))}
                                   
            
                            <hr/>

                            {/* Subtotal, Shipping, Total */}
                            <div className="flex justify-between items-center">
                                <span>Subtotal:</span>
                                <span>${total_price.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Shipping:</span>
                                <span>${shipping_fee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center font-bold">
                                <span>Total:</span>
                                <span>${(total_price + shipping_fee).toFixed(2)}</span>
                            </div>
                            <hr/>

                            {/* Payment Method */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" name="paymentMethod" id="bank" className="mr-2"             value="Bank" 
 onChange={handlePaymentChange} 
 checked={userData.paymentMethod === "Bank"} // Correct comparison
                                    />
                                    <span>Bank</span>
                                    <label htmlFor="bank" className="flex items-center ml-44 space-x-3">
                                        <img src={visa} alt="Visa" className="w-10 cursor-pointer"/>
                                        <img src={bkash} alt="bkash" className="w-10 cursor-pointer"/>
                                        <img src={mastercard} alt="MasterCard" className="w-10 cursor-pointer"/>
                                        <img src={nagori} alt="nagori" className="w-10 cursor-pointer"/>
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="cod" className="mr-2" name="paymentMethod" onChange={handlePaymentChange} value="Cash on Delivery" 
      checked={userData.paymentMethod === "Cash on Delivery"} // Correct comparison
      />
                                    <label htmlFor="cod">Cash on delivery</label>
                                </div>
                            </div>
                            <hr/>

                            {/* Coupon and Place Order Button */}
                            <div className="flex items-center space-x-4">
                                <input type="text" placeholder="Coupon Code" className="p-3 border rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
 />
                                <button className="bg-red-500 text-white py-3 px-6 rounded-sm hover:bg-red-600 transition-colors">Apply Coupon</button>

                            </div> 
                            <Link to="/orderconfirmed">
                            <button type="button" className="mt-4 bg-red-500 text-white py-3 px-5 rounded-sm hover:bg-red-600 transition-colors w-[150px]" onClick={(e)=>handleSubmit(e)} >Place Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default BillingDetail;
