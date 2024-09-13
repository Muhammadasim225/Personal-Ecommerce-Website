import React from 'react'
import { useReducer } from 'react';
const Fav_reducer = (state,action) => {


    if (action.type === "ADD_TO_FAV") {
        let { id, discounted_price,title, img} = action.payload;
        console.log("The id and price is ",id, discounted_price,title,img);
        let allProducts;
        allProducts = {
            id,
            discounted_price,
            title,
            img,
        }
        return {
            ...state,
            fav: [...(state.fav || []), allProducts],  // Ensure state.fav is always an array
    
        };
    }
    if(action.type==="REMOVE_TO_FAV"){
        let updatedFav=state.fav.filter((curr)=>{
            return curr.id !== action.payload;
        });
    
        // Remove the item from localStorage
        localStorage.removeItem(`heartToggle_${action.payload}`);
    
        return {
            ...state,
            fav: updatedFav,
        };
    }
    // if(action.type==="TOTAL_FAV_ITEM"){
    //     let updatedItem=state.fav.reduce((acc,currEle)=>{
    //         let {total_item}=amount;
    //         acc=acc+total_item;
    //         return acc;

    //     },0)
    //     return {
    //         ...state,
    //         total_item:updatedItem
    //     }
    // }
    

    return state;
};

export default Fav_reducer