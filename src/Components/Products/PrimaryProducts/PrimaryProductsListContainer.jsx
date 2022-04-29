import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsPrimaryArray from "./productsPrimaryArray";
import PrimaryProductsList from "./PrimaryProducstList";
import customFetchCategory from "../../CustomJSFiles/PrivateJS";
import { doc, getDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";
export default function PrimaryProductsListContainer() {
    const [primaryProductsRender, setProductsPrimaryRender] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        //prueba firebase
        if (categoryId) {
            const db = getFirestore();
            const categoryIDDB = doc(db, "category/" + categoryId)
            const productsRef = collection(db, 'productsPrimaryArray');
            const categoryFilter = query(productsRef, where("category", "==", categoryId));
            getDocs(categoryFilter).then((res) => {
                setProductsPrimaryRender(res.docs.map(prod => ({ id: prod.id, ...prod.data(), })));
            }, [categoryId]);
        }
    })
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