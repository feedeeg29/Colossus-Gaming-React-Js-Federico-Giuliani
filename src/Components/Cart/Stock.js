import {getFirestore, writeBatch} from "firebase/firestore"
export async function saveOrder(order) {

    order.date = serverTimestamp();
    
    const db = getFirestore();
    
    const batch = writeBatch(db);
    
    const ordersCollectionRef = collection(db, "Orders");
    
    let orderId = null;
    
    let flagError = false;
    
    try {
    
    await Promise.all(
    
    await order.items.map(async (item) => {
    
    const newStock = (await checkStock(item.id)) - item.quantity;
    
    if (newStock < 0) {
    
    flagError = true;
    
    return Promise.reject("Error de Stock");
    
    }
    
    const prodRef = doc(db,"productsPrimaryArray", item.id);
    
    batch.update(prodRef, { stock: newStock });
    
    return Promise.resolve("OK");
    
    })
    
    );
    
    if (!flagError) {
    
    orderId = (await addDoc(ordersCollectionRef, {})).id;
    
    const orderRef = doc(db,"Orders", orderId);
    
    batch.update(orderRef, { order });
    
    await batch.commit();
    
    }
    
    return orderId;
    
    } catch (e) {
    
    console.error(e);
    
    return null;
    
    }
    
    }
    
    export async function checkStock(productId) {
    
    const db = getFirestore();
    
    const prodRef = doc(db,"productsPrimaryArray", productId);
    
    const stock = (await getDoc(prodRef)).data().stock;
    
    return stock;
    
    }