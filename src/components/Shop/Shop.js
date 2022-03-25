
import React, { useEffect, useState } from 'react';
import { addToLocalDb, getStoredCart } from '../../utilities/falseDb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storedCart = getStoredCart()
        const storedProduct = [];
        for (const id in storedCart) {
            const cartProducts = products.find(product => product.id === id)
            if (cartProducts) {
                cartProducts.quantity = storedCart[id];
                storedProduct.push(cartProducts);
            }
        }
        setCart(storedProduct);
    }, [products])

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;