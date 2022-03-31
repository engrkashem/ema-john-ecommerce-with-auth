import React from 'react';
import { faHandsAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'


const Cart = (props) => {
    const { cart } = props
    console.log(props)
    let totalPrice = 0;
    let shippingCharge = 0;
    let ProductQuantity = 0;
    cart.forEach(product => {
        // console.log(product)
        const { price, shipping, quantity } = product;
        ProductQuantity += quantity
        totalPrice += price * quantity;
        shippingCharge += shipping;
    });
    const tax = parseFloat((totalPrice * 0.1).toFixed(2))
    const grandTotal = totalPrice + shippingCharge + tax
    return (
        <div className='cart-info'>
            <h3>Order Summery</h3>
            <div>
                <p>Selected Items:{ProductQuantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
            <button className='btn-clear-cart btn-cart'>
                <p className='btn-clear-text'>Clear Cart</p>
                <FontAwesomeIcon icon={faHandsAmericanSignLanguageInterpreting}></FontAwesomeIcon>
            </button>
            <button className='btn-review-cart btn-cart'>
                <p className='btn-clear-text'>Review Order</p>
                <FontAwesomeIcon icon={faHandsAmericanSignLanguageInterpreting}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;