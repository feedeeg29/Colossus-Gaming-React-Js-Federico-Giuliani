import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsPrimaryArray from "./productsPrimaryArray";
import PrimaryProductsList from "./PrimaryProducstList";
import customFetchCategory from "../../CustomJSFiles/PrivateJS";

export default function PrimaryProductsListContainer() {
    const [primaryProductsRender, setProductsPrimaryRender] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        customFetchCategory(200, productsPrimaryArray, categoryId)
            .then(res => setProductsPrimaryRender(res))
            .catch(err => console.log(err));
    }, [categoryId]);
    return (

        <div>
            <PrimaryProductsList productsPrimaryRender={primaryProductsRender} />
        </div>

    )
}