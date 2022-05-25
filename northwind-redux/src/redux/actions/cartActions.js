import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART, payload:cartItem}
}

export function removeFromCart(product){
    return {type:actionTypes.ADD_TO_CART, payload:product}
}


