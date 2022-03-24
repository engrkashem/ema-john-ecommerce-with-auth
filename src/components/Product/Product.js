import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCart }) => {
    // const { product, addToCart } = props
    const { name, img, seller, price, stock, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'><strong>{name}</strong></p>
                <p>Price: <strong>${price}</strong> </p>
                <p>Seller: <strong>{seller}</strong></p>
                <p>Ratings: {ratings} Stars</p>
                <p>Available Stock: <strong> {stock}  </strong> Pcs</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-info'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;