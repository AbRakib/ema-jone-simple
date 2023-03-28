import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div className='cart-container'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shopping charge: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>
            <div>
                <button className='clearCart'>Clear Cart</button>
                <button className='reviewCart'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;