import React, { useState, createContext } from 'react'
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        const indexPurchase = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (indexPurchase !== -1) {
            const newCart = [...cart];
            newCart[indexPurchase].count = newCart[indexPurchase].count + item.count;
            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
    };
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    const buyAll = () => setCart([]);
    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>{children}</CartContext.Provider>
        </>
    )
}
export default CartContextProvider;
