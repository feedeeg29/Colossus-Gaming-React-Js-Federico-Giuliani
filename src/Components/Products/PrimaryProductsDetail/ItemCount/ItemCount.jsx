import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({ stock, onAdd, productsPrimaryRender }) {
    // const { cart, addToCart, removeFromCart, buyAll } = useContext(CartContext);
    const [count, setCount] = useState(1);
    function add() {
        if (count < stock) {
            setCount(count + 1);
        };
    };

    function subsTract() {
        if (count > 1) {
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
