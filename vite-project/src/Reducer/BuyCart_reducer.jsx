import React from 'react'

const BuyCart_reducer = (state,action) => {
    if (action.type === "ADD_BUY_TO_CART") {
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
        buyCart: [...(state.buyCart || []), allProducts],

    };


}

if(action.type==="REMOVE_BUY_ITEM"){
    let updatedBuyCart=state.buyCart.filter((curr)=>{
        return curr.id!=action.payload

    })


    return {
        ...state,
        buyCart: updatedBuyCart,

    }
}
return state;
}

export default BuyCart_reducer
