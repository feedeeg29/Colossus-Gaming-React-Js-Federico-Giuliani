import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({ stock, onAdd, productsPrimaryRender }) {
    const [count, setCount] = useState(1);
    function add() {
        if (count <= stock) {
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
            <Button onClick={add} style={{ backgroundColor: "#086972" }}> + </Button>
            <Button onClick={subsTract} style={{ backgroundColor: "#086972" }}> - </Button>
            <Button onClick={reset} > Resetear </Button>
            <Button onClick={() => onAdd(count)} >Agregar Al Carrito</Button>
        </>
    )
};
