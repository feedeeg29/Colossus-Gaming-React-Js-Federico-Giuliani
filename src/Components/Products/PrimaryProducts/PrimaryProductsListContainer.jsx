import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PrimaryProductsList from "./PrimaryProducstList";
import { getProductsByCategoryIdDesc, getProductsByCategoryIdAsc } from "./PrimaryProductsJS/PrimaryProductCategory";
import "./stylebasic.css";
export default function PrimaryProductsListContainer() {
    const [primaryProductsRender, setProductsPrimaryRender] = useState([]);
    const { categoryId } = useParams();
    const [orden, setOrden] = useState(true);
    function handleOrden() {
        setOrden(!orden);
        console.log(orden);
    }
    useEffect(() => {
        if (categoryId) {
            if (orden) {
                getProductsByCategoryIdDesc(categoryId).then(prods => setProductsPrimaryRender(prods));
            } else {
                getProductsByCategoryIdAsc(categoryId).then(prods => setProductsPrimaryRender(prods));
            }
        }
    }, [categoryId, orden]);
    return (
        <>
            <div><select type="select" onChange={handleOrden}>
                <option>menor precio</option>
                <option>mayor precio</option>
            </select>
            </div>
            <div className="what">
                <PrimaryProductsList productsPrimaryRender={primaryProductsRender} />
            </div>
        </>
    )
}