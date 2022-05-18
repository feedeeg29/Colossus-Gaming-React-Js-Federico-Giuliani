import React, { useContext } from 'react'
import { CartContext } from "../../Components/Context/CartContext/CartContext"
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';
import { ReactComponent as CartW } from "./CartWidget.svg"
import './CartWidget.css'
export default function CartWidget() {
    const { darkTheme } = useContext(ThemeContext)
    let { cart } = useContext(CartContext);
    if (cart.length !== 0) {
        return (
            <>
                <span className={darkTheme ? 'darkThemeWidget Cart' : 'lightThemeWidget Cart'} >{cart.length}<CartW alt="" className={darkTheme ? 'darkThemeWidget Cart' : 'lightThemeWidget Cart'} ></CartW></span>
            </>
        )
    }
}