import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )
                :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// dispatch is being sent automatically, and when there's only one off dispatch we dont need to set it.
// so can use dispatch(toggleCartHidden());
// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// withRouter needs to come first
export default withRouter(connect(mapStateToProps)(CartDropdown));