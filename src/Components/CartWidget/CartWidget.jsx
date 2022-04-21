import React, { useContext } from 'react'
import { toast } from "react-toastify";
import CartWidgetIMG from './CartWidget.png';
import { CartContext } from '../CartContext/CartContext';
import 'react-toastify/dist/ReactToastify.css';
export default function CartWidget() {
    let { cart } = useContext(CartContext);
    return (
        <>
            <span>{cart.length}<img src={CartWidgetIMG} alt="" width="50px" className="Cart"></img></span>
        </>
    )

}