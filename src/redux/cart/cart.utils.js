export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => // Map sends a new array so the app will update
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +1 }
                : cartItem
            )
    } 

    // If doesn't exist return array with new item and quantity's default 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}