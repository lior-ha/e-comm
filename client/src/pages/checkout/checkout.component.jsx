import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripteCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, CartItemsContainer, CartTotalContainer, TestWarningContainer} from './checkout.styles.jsx';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        <CartItemsContainer>
            {
                    cartItems.map(cartItem => 
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
            }
        </CartItemsContainer>
        <CartTotalContainer>TOTAL: ${total}</CartTotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payment:*
            <br />
            4242-4242-4242-4242 - Exp: 01/21 -  CVV: 123
        </TestWarningContainer>
        <StripteCheckoutButton price={total} />
    </CheckoutPageContainer>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);