import React from 'react';
import {CartItemContainer, ItemDetailsContainer, NameContainer} from './cart-item.styles';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
    <CartItemContainer>
        <img alt={name} src={imageUrl} />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);