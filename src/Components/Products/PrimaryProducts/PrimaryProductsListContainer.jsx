import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import PrimaryProductsList from "./PrimaryProducstList";
import { getProductsByCategoryIdDesc, getProductsByCategoryIdAsc } from "./PrimaryProductsJS/PrimaryProductCategory";
import "./stylebasic.css";
export default function PrimaryProductsListContainer() {
    const [primaryProductsRender, setProductsPrimaryRender] = useState([]);
    const { darkTheme } = useContext(ThemeContext);
    const { categoryId } = useParams();
    const [orden, setOrden] = useState(true);
    function handleOrden() {
        setOrden(!orden);
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
            <div ><select type="select" onChange={handleOrden}>
                <option className={`${darkTheme ? 'darkBackgroundListOrder' : 'lightBackgroundListOrder'}`}>menor precio</option>
                <option className={`${darkTheme ? 'darkBackgroundListOrder' : 'lightBackgroundListOrder'}`}>mayor precio</option>
            </select>
            </div>
            <div className="what">
                <PrimaryProductsList productsPrimaryRender={primaryProductsRender} />
            </div>
        </>
    )
}