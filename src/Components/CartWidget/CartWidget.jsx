import React, { useContext } from 'react'
import CartWidgetIMG from './CartWidget.png';
import { CartContext } from '../CartContext/CartContext';
import 'react-toastify/dist/ReactToastify.css';
export default function CartWidget() {
    let { cart } = useContext(CartContext);
    if (cart.length !== 0) {
        return (
            <>
                <span style={{ color: "#EEEEEE" }}>{cart.length}<img src={CartWidgetIMG} alt="" width="50px" className="Cart"></img></span>
            </>
        )
    }
}