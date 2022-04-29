import React, { useState, createContext } from 'react'
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const isInCart = (Id) => { cart.find(item => item.Id === Id) }
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
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.Id !== id));
    };
    const buyAll = () => setCart([]);
    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, isInCart }}>{children}</CartContext.Provider>
        </>
    )
}
export default CartContextProvider;
