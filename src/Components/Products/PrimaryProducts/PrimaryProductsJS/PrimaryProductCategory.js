import {getFirestore, collection, getDocs, query, where, orderBy} from 'firebase/firestore';
export async function getProductsByCategoryIdDesc(categoryId) {
        const db = getFirestore();
        const productsRef = collection(db, 'productsPrimaryArray');
        const categoryFilter = query(productsRef, where("category", "==", categoryId),orderBy('price', 'desc'));
        // const categoryFilterPrice = query(categoryFilter, where("price", "==", price), orderBy("price","desc") );
        const res = await getDocs(categoryFilter);
        return res.docs.map(prod => ({id: prod.id, ...prod.data()}));
}
export async function getProductsByCategoryIdAsc(categoryId) {
        const db = getFirestore();
        const productsRef = collection(db, 'productsPrimaryArray');
        const categoryFilter = query(productsRef, where("category", "==", categoryId),orderBy('price', 'asc'));
        // const categoryFilterPrice = query(categoryFilter, where("price", "==", price), orderBy("price","desc") );
        const res = await getDocs(categoryFilter);
        return res.docs.map(prod => ({id: prod.id, ...prod.data()}));
}