import React from "react";
import reducer from '../Reducer/FilteringReducer';
export const FilteringContext=React.createContext();



const initialState={
    filter:[],   
}


const FilteringProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const addFiltering=(id, discounted_price,title,img)=>{
        dispatch({ type: "FILTERED_PRODUCT", payload: { id, discounted_price,title,img} });
    }









    return <FilteringContext.Provider value={{...state,addFiltering}}>
{children}
</FilteringContext.Provider>   
}

const useFilterContext=()=>{
    return useContext(FilteringContext);
}


export {FilteringProvider,useFilterContext}
