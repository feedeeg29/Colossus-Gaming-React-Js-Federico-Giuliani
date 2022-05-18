import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './stylebasic.css';
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
export default function PrimaryProducts({ id, nombre, img }) {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <>
            <div key={id} id={id} className={`${darkTheme ? 'darkThemeContainer main-product' : 'lightThemeContainer main-product'}`}>
                <Link to={`/detail/${id}`} ><img src={img} alt="" /></Link>
                <div>
                    <Link to={`/detail/${id}`} className={`${darkTheme ? 'darkThemeLetras' : 'lightThemeLetras'}`}><h2 >{nombre}</h2></Link>
                </div>
            </div>
        </>
    );
}