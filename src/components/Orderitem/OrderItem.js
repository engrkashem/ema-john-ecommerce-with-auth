import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css'

const OrderItem = ({ product, handleRemoveProduct }) => {
    const { name, quantity, img, price, shipping } = product
    // console.log(product)
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="order-item-details-container">
                <div className="order-item-details">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className='orange-color'>$ {price}</span></p>
                    <p><small>Shipping: <span className='orange-color'>$ {shipping}</span></small></p>
                    <p><small>Quantity: <span className='orange-color'> {quantity}</span></small></p>
                </div>
                <div onClick={() => handleRemoveProduct(product)} className="delete-container">
                    <button>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default OrderItem;