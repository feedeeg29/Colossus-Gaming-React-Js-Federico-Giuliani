import {doc, getDoc, getFirestore} from 'firebase/firestore';
    export  async function getProductsById(productId) {
    const db = getFirestore();
    const docRef = doc(db, "productsPrimaryArray", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(docSnap);
        return docSnap.data();
    }else {
        return null;
    }
}