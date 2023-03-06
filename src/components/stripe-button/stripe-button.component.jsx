import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51MicM4SB0H0Ecd67Z8W6GgkX1KOiIEIDMzqRJ7jO2BNTJKtKE0JyQBEsVKYL4lgAJcmhwaUNd9qSjvznCa9fgdEj00vCkeD25y';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"  
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;

