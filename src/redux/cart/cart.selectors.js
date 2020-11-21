import { createSelector } from 'reselect';

// Input selector - takes the whole state and returns a slice of it. Doesn't use createSelector
const selectCart = state => state.cart;
//const selectUser = state => state.user;


// Output selector - takes the whole state and returns a slice of it. Doesn't use createSelector
export const selectCartItems = createSelector( // createSelector creates a memorised selector
    // [selectCart, selectUser] // array of input selectors (ex. for multiple)
    // (cart, user) => ... // a function that returns the value we want (same order as the input selectors)
    
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], // Usually use a smaller piece of the state, like the one that was 'filtered' above
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity + cartItem.quantity, 
            0
        )
);
