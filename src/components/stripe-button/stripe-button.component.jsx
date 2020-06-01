import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) =>{
const priceForStripe = price * 100;
const publishableKey = 'pk_test_S2cfFUh5ubvv1F1l1OU079ke0078t7TtQp';

const onToken = token =>{
    console.log(token);
    alert('payment successfully');
}

return(
    <StripeCheckout
    label="Pay Now"
    name="Mohsin React Test PVT LTD"
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total is $${price}`}
    amount= {priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    />
)

}

export default StripeCheckoutButton;