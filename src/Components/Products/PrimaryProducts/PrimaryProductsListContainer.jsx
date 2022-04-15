import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../../CustomJSFiles/PrivateJS";
import productsPrimaryArray from "./productsPrimaryArray";
import PrimaryProductsList from "./PrimaryProducstList";

export default function PrimaryProductsListContainer() {
    const [PrimaryP, productsPrimary] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {

        customFetch(200, productsPrimaryArray, categoryId)
            .then(res => productsPrimary(res))
            .catch(err => console.log(err));
    }, [categoryId]);
    return (

        <div>
            <PrimaryProductsList productsPrimary={PrimaryP} />
        </div>

    )
}