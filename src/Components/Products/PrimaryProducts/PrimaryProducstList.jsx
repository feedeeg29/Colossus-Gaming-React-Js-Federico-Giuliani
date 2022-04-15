import React from "react";
import PrimaryProducts from "./PrimaryProducts";
import './stylebasic.css';
export default function PrimaryProductsList({ productsPrimaryRender }) {
    return (
        <>
            <div className="product-grid">
                {productsPrimaryRender.map(p => (
                    <PrimaryProducts
                        key={p.id}
                        id={p.id}
                        nombre={p.name}
                        img={p.img} />))}
            </div>
        </>
    );
}