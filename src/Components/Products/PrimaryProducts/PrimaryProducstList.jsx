import React from "react";
import PrimaryProducts from "./PrimaryProducts";

export default function PrimaryProductsList({ productsPrimary }) {
    return (
        <>
            {productsPrimary.map(m => (
                <PrimaryProducts
                    key={m.id}
                    id={m.id}
                    nombre={m.name}
                    img={m.img} />
            ))}
        </>
    );
}