import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, TitleContainer, PriceContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <TitleContainer>{name}</TitleContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);