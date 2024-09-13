import React, { useContext, useEffect, useReducer } from 'react'

export const ContextProfile=React.createContext();
import reducer from '../Reducer/ProfileReducer';
// const getLocalCartData=()=>{
//         const items = localStorage.getItem("User email");
//         if (items==[]) {
//             return [];
//         }
//         else{
//             return JSON.parse(items)
//         }
// }
const initialState={
    loader:[],
}



const Profile_provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

   
    const  handleEmailPassword = (id,email,password) => {
        dispatch({ type: "ADD_EMAIL_PASSWORD", payload: id,email,password });    
    };

    // useEffect(()=>{
    //     // dispatch({type:"TOTAL_CART_ITEM"})

    //     localStorage.setItem("Asim_Cart",JSON.stringify(state.cart));
    // },[state.cart])
    return <ContextProfile.Provider value={{...state,handleEmailPassword}}>
        {children}

</ContextProfile.Provider>

}

const useProfileContext=()=>{
    return useContext(ContextProfile);
}

export {Profile_provider,useProfileContext}