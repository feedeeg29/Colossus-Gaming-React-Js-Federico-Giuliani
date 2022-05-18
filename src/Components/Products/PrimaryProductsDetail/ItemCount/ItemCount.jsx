import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../../Context/ThemeContext/ThemeContext'
import './ItemCount.css'
export default function ItemCount({ stock, onAdd, productsPrimaryRender }) {
    const { darkTheme } = useContext(ThemeContext);
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
            <p className={`${darkTheme ? 'darkBackgroundQuantity' : 'lightBackgroundQuantity '}`}>{count}</p>
            <Button onClick={add} className={`${darkTheme ? 'darkBackgroundButtonAdd' : 'lightBackgroundButtonAdd '}`}> + </Button>
            <Button onClick={subsTract} className={`${darkTheme ? 'darkBackgroundButtonSubs' : 'lightBackgroundButtonSubs '}`}> - </Button>
            <Button onClick={reset} className={`${darkTheme ? 'darkBackgroundButtonReset' : 'lightBackgroundButtonReset '}`}> Resetear </Button>
            <Button onClick={() => onAdd(count)} className={`${darkTheme ? 'darkBackgroundButtonAddToCart' : 'lightBackgroundButtonAddToCart '}`}>Agregar Al Carrito</Button>
        </>
    )
};
