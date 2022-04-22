import React, { useState, useContext } from "react";
import { CartContext } from "../../../CartContext/CartContext";
import { Button } from "react-bootstrap";
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({ stock, onAdd, productsPrimaryRender }) {
    // const notify = () => toast("Agregaste" + " " + count + " " + "al carrito");

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
            <Button onClick={add}> + </Button>
            <Button onClick={subsTract}> - </Button>
            <Button onClick={reset}> Resetar </Button>
            <Button onClick={() => {
                addToCart({ ...productsPrimaryRender, count });
            }}>Agregar al carrito </Button>
        </>
    )
};
