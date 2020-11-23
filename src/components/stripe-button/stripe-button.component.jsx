import StripeCheckout from 'react-stripe-checkout';

const StripteCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqXZ1L1mfdRaEfVj9n1tTSQDwV10k7XpFkiPUIDGd6FkrtQosKHhhvtBp5VNuSQ27nSuqsV2SLG4yXQZ1wkfMUD00l82dLwwR';

    const onToken = token => {
        console.log(token);
        console.info('Payment Successfull')
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