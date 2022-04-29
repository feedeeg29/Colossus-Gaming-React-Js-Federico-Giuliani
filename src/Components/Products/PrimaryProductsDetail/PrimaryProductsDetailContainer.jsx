import React, { useState, useEffect } from "react";
import PrimaryProductsDetail from "./PrimaryProductsDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../PrimaryProducts/PrimaryProductsJS/PrimaryProductID";
export default function PrimaryProductsDetailContainer() {
    const [primaryProductsDetailRender, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getProductsById(id).then(prods => setItems(prods));
        }
    }, [id]);

    /*customFetchId(200, productsPrimaryArray, id)
        .then(res => setItems(res))
        .catch(err => console.log(err));
}, [id]);*/
    return (
        <PrimaryProductsDetail key={primaryProductsDetailRender.id} id={primaryProductsDetailRender.id} img={primaryProductsDetailRender.img} name={primaryProductsDetailRender.name} price={primaryProductsDetailRender.price} stock={primaryProductsDetailRender.stock} />
    )
}