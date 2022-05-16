import React from "react";
import { Link } from "react-router-dom";
import './stylebasic.css';

export default function PrimaryProducts({ id, nombre, img }) {
    return (
        <>
            <div className="main-product" key={id} id={id} >
                <Link to={`/detail/${id}`} ><img src={img} alt="" /></Link>
                <div>
                    <Link to={`/detail/${id}`} style={{ textDecoration: "none", color: "black" }}><h2 >{nombre}</h2></Link>
                </div>
            </div>
        </>
    );
}