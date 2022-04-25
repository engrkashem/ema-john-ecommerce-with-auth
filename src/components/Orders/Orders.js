import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import OrderItem from "../Orderitem/OrderItem";
import { removeFromDb } from '../../utilities/fakedb';
import './Orders.css'
import { useNavigate } from "react-router-dom";

const Orders = () => {

    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart();

    const handleRemoveProduct = product => {
        // console.log(product)
        const restCartProduct = cart.filter(item => item._id !== product._id)
        setCart(restCartProduct);
        removeFromDb(product._id)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="order-item-container">
                    {
                        cart.map(product => <OrderItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></OrderItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                        route={'/shipment'}>
                        <span > Proceed to Shipping</span>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Orders;