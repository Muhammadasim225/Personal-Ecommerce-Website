import React, { useContext, useEffect, useReducer } from 'react'

export const Cart_context=React.createContext();
import reducer from '../Reducer/Cart_reducer';

const getLocalCartData=()=>{
        const items = localStorage.getItem("Asim_Cart");
        if (items==[]) {
            return [];
        }
        else{
            return JSON.parse(items)
        }
}
const initialState={
    cart:getLocalCartData(),
    total_price: 0,
    total_item: "",
    shipping_fee:50,
    
    
}



const Cart_provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const addToCart=(id, discounted_price,title,img)=>{
        dispatch({ type: "ADD_TO_CART", payload: { id, discounted_price,title,img} });
    }
    const addBuyToCart=(id, discounted_price,title,img)=>{
        dispatch({ type: "ADD_BUY_TO_CART", payload: { id, discounted_price,title,img} });
    }
    const addBillToCart=(id, discounted_price,title,img)=>{
        dispatch({ type: "ADD_BILL_TO_CART", payload: { id, discounted_price,title,img} });
    }
    const updateCartItemAmount = (id, amount) => {
        dispatch({ type: "UPDATE_CART_ITEM_AMOUNT", payload: { id, amount } });
    }
   
    const handleDelete = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });    
    };

    useEffect(()=>{
        dispatch({type:"TOTAL_CART_PRICE"});
        // dispatch({type:"TOTAL_CART_ITEM"})

        localStorage.setItem("Asim_Cart",JSON.stringify(state.cart));
    },[state.cart])
    return <Cart_context.Provider value={{...state,addToCart,addBuyToCart,handleDelete,updateCartItemAmount,addBillToCart}}>
        {children}

</Cart_context.Provider>

}

const useCartContext=()=>{
    return useContext(Cart_context);
}

export {Cart_provider,useCartContext}