import React from 'react'

const Cart_reducer = (state, action) => {
    if (action.type === "ADD_TO_CART" || action.type==="ADD_BUY_TO_CART") {
        let { id, discounted_price,title, img} = action.payload;
        console.log("The id and price is ",id, discounted_price,title);
            console.log("The path is ",img);
            console.log("The discounted price before is ",discounted_price);
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
        cart: [...state.cart, allProducts],

    };


}
if (action.type === "TOTAL_CART_PRICE") {
    let total_price = state.cart.reduce((acc, curr) => {
        let { discounted_price, amount } = curr;
        acc += discounted_price * amount;
        return acc;
    }, 0);
return {
    ...state,
    total_price,

}


}

if(action.type==="REMOVE_ITEM"){
    let updatedCart=state.cart.filter((curr)=>{
        return curr.id!=action.payload

    })


    return {
        ...state,
        cart: updatedCart,

    }
}

if (action.type === "UPDATE_CART_ITEM_AMOUNT") {
    let updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount };
        }
        return item;
    });

    return {
        ...state,
        cart: updatedCart,
    }
}




return state;
};

export default Cart_reducer
