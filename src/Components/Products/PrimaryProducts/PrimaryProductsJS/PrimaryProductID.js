import {doc, getDoc, getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
export async function getProductsById(productId) {
    const db = getFirestore();
    const docRef = doc(db, 'productsPrimaryArray', productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }else {
        return null;
    }
}