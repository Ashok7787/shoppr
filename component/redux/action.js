import * as types from "./coonstant";

export function addToCart(item){
    return{
        type:types.ADD_TO_CART,
        data:item
    }
}
export function removeFromCart(item){
    return{
        type:types.REMOVE_FROM_CART,
        data:item
    }
}