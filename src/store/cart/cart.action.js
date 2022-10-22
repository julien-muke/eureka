import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    };

    const clearCartItem = (cartItems, cartItemToClear) => 
    cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
        };
    
        const removeItemToCart = (cartItemToRemove) => {
            const newCartItems = removeCartItem(cartItems, cartItemToRemove);
            updateCartItemsReducer(newCartItems);
        };
    
        const clearItemFromCart = (cartItemToClear) => {
            const newCartItems = clearCartItem(cartItems, cartItemToClear);
            updateCartItemsReducer(newCartItems);
        };