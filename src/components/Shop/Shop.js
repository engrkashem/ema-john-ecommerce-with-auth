
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { addToLocalDb } from '../../utilities/falseDb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProduct();

    const [cart, setCart] = useCart(products);

    const addToCart = userSelectedProduct => {

        let newCart = [];
        const existProduct = cart.find(product => product.id === userSelectedProduct.id);
        if (existProduct) {
            const restProduct = cart.filter(product => product.id !== userSelectedProduct.id);
            existProduct.quantity = existProduct.quantity + 1;
            newCart = [...restProduct, existProduct];
        }
        else {
            userSelectedProduct.quantity = 1;
            newCart = [...cart, userSelectedProduct]
        }

        setCart(newCart);
        addToLocalDb(userSelectedProduct)
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
                <Cart cart={cart}
                    route={'/order'}
                >
                    <span >Review Order</span>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;