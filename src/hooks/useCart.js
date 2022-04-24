import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/falseDb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    // console.log('usecart', cart)
    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log('stored cart', storedCart)
        const storedProducts = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                storedProducts.push(addedProduct)
            }
        }
        setCart(storedProducts)


    }, [products]);

    return [cart, setCart];
}

export default useCart;