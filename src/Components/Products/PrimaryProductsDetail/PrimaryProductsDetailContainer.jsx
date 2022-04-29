import React, { useState, useEffect } from "react";
import PrimaryProductsDetail from "./PrimaryProductsDetail";
import productsPrimaryArray from "../PrimaryProducts/productsPrimaryArray";
import customFetchId from "./customFetchId";
import { useParams } from "react-router-dom";

export default function PrimaryProductsDetailContainer() {
    const [primaryProductsDetailRender, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        /*customFetchId(200, productsPrimaryArray, id)
            .then(res => setItems(res))
            .catch(err => console.log(err));
    }, [id]);*/
        return (
            <PrimaryProductsDetail key={primaryProductsDetailRender.id} Id={primaryProductsDetailRender.id} img={primaryProductsDetailRender.img} name={primaryProductsDetailRender.name} price={primaryProductsDetailRender.price} stock={primaryProductsDetailRender.stock} />
        )
    }