import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
export async function getProductsByCategoryId(categoryId) {
        const db = getFirestore();
        const productsRef = collection(db, 'productsPrimaryArray');
        const categoryFilter = query(productsRef, where("category", "==", categoryId));
        const res = await getDocs(categoryFilter);
        return res.docs.map(prod => ({id: prod.id, ...prod.data()}));
}