import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useCartContext } from "./Context/Cart_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cart = () => {

    const navigate=useNavigate();
    const {handleDelete}=useCartContext();
    
    const {addToCart}=useCartContext();


    const nxtt = (product) => {
        // if (product) {
          navigate(`/account/product/cart/billingdetail`);
          addToCart(product._id, product.discounted_price, product.title, product.img);
        // } else {
        //   console.error("No product in the cart.");
        // }
      };


    const {cart,total_price,shipping_fee,updateCartItemAmount } = useCartContext();


    const [quantities, setQuantities] = useState(cart.map(item => item.amount));

    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value;
        setQuantities(newQuantities);
        updateCartItemAmount(cart[index].id, value);
    };


    

                                 
    


  
    return (
        <>
            <Header cust={true} />
            <div className="breadcrumb pt-10 ml-20">
                <Breadcrumbs />
            </div>
            <div className="container mx-auto px-10 py-20 font-custom">
                <table className="w-full text-left">
                    <thead className="shadow-md">
                        <tr>
                            <th className="pb-4 pl-5">Product</th>
                            <th className="pb-4">Price</th>
                            <th className="pb-4">Quantity</th>
                            <th className="pb-4">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prp,index) => (

                            <tr  key={prp.id} className="shadow-md">
                                <td className="py-4">
                                    <img src={prp.img} alt={prp.title} className="inline-block w-10 h-10 mr-4" />
                                    {prp.title}
                                </td>
                                <td className="py-4">${prp.discounted_price}</td>
                                <td className="py-4">
                                    <select
                                        className="border rounded px-2 py-1"
                                        value={quantities[index]}
                                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                    >
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                    </select>
                                </td>
               
                                
                              
                                <td className="py-4">
                                ${(prp.discounted_price * quantities[index]).toFixed(2)}
   
</td>
                                
                                <td className="py-4 cursor-pointer" onClick={() => handleDelete(prp.id)}>

                                <FontAwesomeIcon icon={faTrash} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-8">
                    <Link to="/home">
                    <button className="rounded px-4 py-2 border border-gray-500 outline-none">Return To Shop</button>

                    
                    </Link>
                    <button className="rounded px-4 py-2 border border-gray-500 outline-none">Update Cart</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="flex space-x-4 h-[50px]">
                        <input type="text" placeholder="Coupon Code" className="border border-gray-500 outline-none rounded px-4 py-2 w-1/2" />
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
                    </div>

                    <div className="border border-gray-900 rounded-sm p-4">
                        <h2 className="text-lg font-bold">Cart Total</h2>
                        <div className="flex justify-between my-5 border border-b-black">
                            <span className="my-1">Subtotal:</span>
                            <span>${total_price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between my-5 border border-b-black">
                            <span className="my-1">Shipping:</span>
                            <span>${shipping_fee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between my-2 font-bold">
                            <span>Total:</span>
                            <span>${(total_price + shipping_fee).toFixed(2)}</span>
                        </div>
                        {/* <Link to="/account/product/:id/cart/billingdetail"> */}
                        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded" onClick={()=>{
                            
                           const rrtr= nxtt(cart)
                            console.log("hmmd",rrtr);
                            
                            }}>Proceed to checkout</button>
                        {/* </Link> */}
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;