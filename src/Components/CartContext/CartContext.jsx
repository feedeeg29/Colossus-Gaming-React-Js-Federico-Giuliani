import React, { useState, createContext } from 'react'
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const isInCart = (id) => { cart.find(item => item.Id === id) }
    const addToCart = (item, quantity) => {
        if (isInCart(item.Id)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.Id === item.Id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement
            })
            setCart(newCart)
        } else {
            setCart(prev => [...prev, { ...item, quantity }])
        }
    }

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const prdQTotal = cart.reduce((total, item) => total + item.quantity, 0);
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.Id !== id));
    };
    const clearCart = () => {
        setCart([]);
    }
    const buyAll = () => setCart([]);
    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, isInCart, total, prdQTotal, clearCart }}>{children}</CartContext.Provider>
        </>
    )
}
export default CartContextProvider;
