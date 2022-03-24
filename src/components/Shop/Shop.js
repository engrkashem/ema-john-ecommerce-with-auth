import { faHandsAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summery</h2>
                <button className='btn-clear-cart btn-cart'>
                    <p className='btn-clear-text'>Clear Cart</p>
                    <FontAwesomeIcon icon={faHandsAmericanSignLanguageInterpreting}></FontAwesomeIcon>
                </button>
                <button className='btn-review-cart btn-cart'>
                    <p className='btn-clear-text'>Review Order</p>
                    <FontAwesomeIcon icon={faHandsAmericanSignLanguageInterpreting}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Shop;