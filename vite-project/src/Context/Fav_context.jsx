import { useContext, useEffect } from "react";
import React from "react";
import redu from '../Reducer/Fav_reducer';
import { useReducer } from "react";
export const Fav_context=React.createContext();



const getItemToFav=()=>{
    const items = localStorage.getItem("ADD_TO_FAV");
    if (items==[]) {
        return [];
    }
    else{
        return JSON.parse(items)
    }
}
const initialState={
    fav: getItemToFav(),
    total_amount: "",
    total_item:" ",
    shipping_fee:50000,
    
}


const FavProvider=({children})=>{
    const [state,dispatch]=useReducer(redu,initialState);
    const addToFav=(id, discounted_price,title,img)=>{
        dispatch({ type: "ADD_TO_FAV", payload: { id, discounted_price,title,img} });
    }


    const removeToFav=(id)=>{
        dispatch({ type: "REMOVE_TO_FAV", payload: id } );
    }

    useEffect(()=>{
        dispatch({type:"TOTAL_FAV_ITEM"});
        localStorage.setItem("ADD_TO_FAV",JSON.stringify(state.fav))
    },[state.fav])

    return <Fav_context.Provider value={{...state,addToFav,removeToFav}}>



        {children}



</Fav_context.Provider>

}

const useFavContext=()=>{
    return useContext(Fav_context);
}

export {useFavContext,FavProvider}