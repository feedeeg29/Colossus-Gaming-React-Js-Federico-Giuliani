import React, { useState, useEffect } from "react";
import PrimaryProductsDetail from "./PrimaryProductsDetail";
import productsPrimaryArray from "../PrimaryProducts/productsPrimaryArray";
import customFetchId from "./customFetchId";
import { useParams } from "react-router-dom";

export default function PrimaryProductsDetailContainer() {
    const [primaryProductsDetailRender, setItems] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        customFetchId(200, productsPrimaryArray, Id)
            .then(res => setItems(res))
            .catch(err => console.log(err));
    }, [Id]);

    return (

        <PrimaryProductsDetail key={primaryProductsDetailRender.Id} id={primaryProductsDetailRender.Id} img={primaryProductsDetailRender.img} name={primaryProductsDetailRender.name} price={primaryProductsDetailRender.price} stock={primaryProductsDetailRender.stock} />

    )
}