import React from 'react'

const FilteringReducer = (state,action) => {
    if (action.type === "FILTERED_PRODUCT") {
        let { id, discounted_price,title, img} = action.payload;
        console.log("The id and price is ",id, discounted_price,title);
            console.log("The path is ",img);

        discounted_price = parseFloat(discounted_price.replace('$', ''));
        console.log("After discount price is ",discounted_price);

        let allProducts;
        allProducts = {
            id,
            discounted_price,
            title,
            img,
            amount: 1,
        }
    
    return {
        ...state,
        filter: [...state.filter, allProducts],

    };


}



  return state;
  
  
}

export default FilteringReducer
