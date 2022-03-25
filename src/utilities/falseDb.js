const addToLocalDb = ({ id }) => {
    //Get Products in Shopping cart fron local storage
    let shoppingCart = getStoredCart()

    //add product into shopping cart
    if (shoppingCart[id]) {
        shoppingCart[id] = shoppingCart[id] + 1
    }
    else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
//fetch current shopping cart fron local storage
const getStoredCart = () => {
    let shoppingCart = {};
    const productsInDb = localStorage.getItem('shopping-cart');
    if (productsInDb) {
        shoppingCart = JSON.parse(productsInDb);
    }
    return shoppingCart
}


export {
    addToLocalDb,
    getStoredCart
}