import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripteCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqXZ1L1mfdRaEfVj9n1tTSQDwV10k7XpFkiPUIDGd6FkrtQosKHhhvtBp5VNuSQ27nSuqsV2SLG4yXQZ1wkfMUD00l82dLwwR';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then (response => { 
            alert('Payment Successful');
        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please use the provided test credit card');
        })

    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='MaShop Ltd.'
            billingAddress
            shippingAddress
            image='/logo192.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} // On success callback
            stripeKey={publishableKey}
        />
    );
};

export default StripteCheckoutButton;