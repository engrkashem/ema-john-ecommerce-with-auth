import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/falseDb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    // console.log('usecart', cart)
    useEffect(() => {
        const storedCart = getStoredCart();
        const storedProducts = [];
        const keys = Object.keys(storedCart);
        fetch('http://localhost:5000/products-by-keys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        addedProduct.quantity = storedCart[id];
                        storedProducts.push(addedProduct)
                    }
                }
                setCart(storedProducts)
            })

    }, []);

    return [cart, setCart];
}

export default useCart;