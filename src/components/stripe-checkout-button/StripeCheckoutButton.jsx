import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = async token => {
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URL}/payment`,
        data: { token, amount: priceForStripe }
      });

      alert("Payment successful");
    } catch (err) {
      console.log("payment Error", JSON.parse(err));
      alert(
        "There was an issue with your payment. Please make sure you use the provided credit card."
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      currency="GBP"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
