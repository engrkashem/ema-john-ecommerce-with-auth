
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
        console.log('user selected product', userSelectedProduct)
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