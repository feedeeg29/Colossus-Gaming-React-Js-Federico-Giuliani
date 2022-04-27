import React, { useState, useContext } from "react";
import { CartContext } from "../../../CartContext/CartContext";
import { Button } from "react-bootstrap";
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({ stock, onAdd, productsPrimaryRender }) {
    const { cart, addToCart, removeFromCart, buyAll } = useContext(CartContext);
    const [count, setCount] = useState(0);
    function add() {
        if (count < stock) {
            setCount(count + 1);
        };
    };

    function subsTract() {
        if (count > 0) {
            setCount(count - 1);
        };
    };

    function reset() {
        setCount(0);
    };

    return (
        <>
            <p>{count}</p>
            <Button onClick={add} variant="primary"> + </Button>
            <Button onClick={subsTract} variant="secondary"> - </Button>
            <Button onClick={reset} variant="warning"> Resetar </Button>
            <Button onClick={() => onAdd(count)} variant="success">Agregar Al Carrito</Button>;
        </>
    )
};
