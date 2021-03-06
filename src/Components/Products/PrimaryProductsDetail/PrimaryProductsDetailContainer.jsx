import React, { useState, useEffect } from "react";
import PrimaryProductsDetail from "./PrimaryProductsDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../PrimaryProducts/PrimaryProductsJS/PrimaryProductID";
// import { getDoc, getFirestore, doc } from "firebase/firestore";
export default function PrimaryProductsDetailContainer() {
    const [primaryProductsDetailRender, setItems] = useState([]);
    const { Id } = useParams();
    useEffect(() => {
        if (Id) {
            getProductsById(Id).then(prods => setItems(prods));
        }
    }, [Id]);
    return (
        <>
            <PrimaryProductsDetail key={primaryProductsDetailRender.Id} Id={primaryProductsDetailRender.Id} img={primaryProductsDetailRender.img} name={primaryProductsDetailRender.name} price={primaryProductsDetailRender.price} stock={primaryProductsDetailRender.stock} />
        </>
    )
}