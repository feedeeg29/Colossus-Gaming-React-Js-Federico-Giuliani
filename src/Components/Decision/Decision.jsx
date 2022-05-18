import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';
import './Decision.css';
export default function Decision() {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            <Link to={'/Cart/Cart'} ><Button className={`${darkTheme ? 'DecisionDarkMode' : 'DecisionLightMode'}`}>Finalizar Compra</Button></Link>
            <Link to={'/category'} ><Button className={`${darkTheme ? 'DecisionDarkMode' : 'DecisionLightMode'}`}>Continuar Comprando</Button></Link>
        </>
    )
}
