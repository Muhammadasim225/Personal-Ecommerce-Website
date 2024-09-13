import React, { useContext } from "react";
import { useReducer,useEffect } from "react";
import req from ".././Reducer/BuyCart_reducer"
export const BuyCart_context=React.createContext();

const getLocalBuyCartData=()=>{
    const items = localStorage.getItem("Asim_BUY_Cart");
    if (items==[]) {
        return [];
    }
    else{
        return JSON.parse(items)
    }
}
const initialState={
buyCart:getLocalBuyCartData(),
total_amount: "",
total_item:" ",
shipping_fee:50000,

}
const BuyCartProvider=({children})=>{
    const [state,dispatch]=useReducer(req,initialState);

    const addBuyToCart=(id, discounted_price,title,img)=>{
        dispatch({ type: "ADD_BUY_TO_CART", payload: { id, discounted_price,title,img} });
    }
   
    const handleDelete = (id) => {
        dispatch({ type: "REMOVE_BUY_ITEM", payload: id });

       
    };

    useEffect(()=>{
        localStorage.setItem("Asim_BUY_Cart",JSON.stringify(state.buyCart));
    },[state.buyCart])

    return <BuyCart_context.Provider value={{...state,addBuyToCart,handleDelete}}>
        {children}
        </BuyCart_context.Provider>   
}
const useBuyCartContext=()=>{
    return useContext(BuyCart_context);

}
export {useBuyCartContext,BuyCartProvider};