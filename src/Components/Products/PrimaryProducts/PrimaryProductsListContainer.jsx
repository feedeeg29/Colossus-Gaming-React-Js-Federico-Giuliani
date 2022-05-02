import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PrimaryProductsList from "./PrimaryProducstList";
import { getProductsByCategoryId } from "./PrimaryProductsJS/PrimaryProductCategory";
export default function PrimaryProductsListContainer() {
    const [primaryProductsRender, setProductsPrimaryRender] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        //prueba firebase
        if (categoryId) {
            getProductsByCategoryId(categoryId).then(prods => setProductsPrimaryRender(prods));

        }
    }, [categoryId]);

    /*customFetchCategory(200, productsPrimaryArray, categoryId)
        .then(res => setProductsPrimaryRender(res))
        .catch(err => console.log(err));
    }, [categoryId]);*/
    return (
        <div>
            <PrimaryProductsList productsPrimaryRender={primaryProductsRender} />
        </div>
    )
}