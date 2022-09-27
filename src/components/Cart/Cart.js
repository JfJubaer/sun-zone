import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart}=props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        console.log(product);
        quantity= quantity + product.quantity;
        total = total + product.price *product.quantity;
        shipping = shipping + product.shipping*product.quantity;
    }
    const tax = parseFloat((total*.1).toFixed(2));
    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <h4>Selected items : {quantity}</h4>
            <h4>Total Price : ${total}</h4>
            <h4>Total Shipping : ${shipping}</h4>
            <h4>Total Tax : ${tax}</h4>
            <h3>Full Total : {total+shipping+tax} </h3>
        </div>
    );
};

export default Cart;