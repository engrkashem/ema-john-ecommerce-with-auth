import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import OrderItem from "../Orderitem/OrderItem";
import { removeFromDb } from '../../utilities/fakedb';
import './Orders.css'
import { useNavigate } from "react-router-dom";

const Orders = () => {

    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const restCartProduct = cart.filter(item => item.id !== product.id)
        setCart(restCartProduct);
        removeFromDb(product.id)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="order-item-container">
                    {
                        cart.map(product => <OrderItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></OrderItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={() => navigate('/inventory')}>Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;