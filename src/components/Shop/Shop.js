
import { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { addToLocalDb } from '../../utilities/falseDb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {

        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const { count } = data;
                setPageCount(Math.ceil(count / size));
            })
    }, [size]);

    const addToCart = userSelectedProduct => {
        let newCart = [];
        const existProduct = cart.find(product => product._id === userSelectedProduct._id);
        if (existProduct) {
            const restProduct = cart.filter(product => product._id !== userSelectedProduct._id);
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
                        key={product._id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(num => <button
                                key={num}
                                className={page === num ? 'selected' : ''}
                                onClick={() => setPage(num)}
                            >{num + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
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