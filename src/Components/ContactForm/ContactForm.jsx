import React, { useState } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [query, setQuery] = useState('');
    const [queryCode, setQueryCode] = useState('');

    const inQuery = {
        buyer: { name: name, phone: phone, email: email, address: address },
        query: query,
        date: serverTimestamp()
    }
    const sendQuery = () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'Contact');
        addDoc(queryCollection, inQuery).then(({ id }) => {
            setQueryCode(id);
        })
    }
    return (
        <>
            <div className='body_contacto'>
                <form action="#" className="Contacto" onSubmit={(e) => { e.preventDefault(); sendQuery() }}>
                    <fieldset className="Formulario" id="zona">
                        <legend className="titulo" id="letras">
                            Formulario de Contacto
                        </legend>
                        <div className="campo" id="zona">
                            <input type="text" id="nombre" value={name} name="Nombre" placeholder="Federico Giuliani" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="campo" id="zona">
                            <input type="text" id="contacto" name="contacto" value={phone} placeholder="Ej: 11-5023-405" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="campo" id="zona">
                            <input type="email" id="email" value={email} name="email" placeholder="correoelectronico@correo.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="campo" id="zona">
                            <input type="address" id="address" value={address} name="email" placeholder="correoelectronico@correo.com" onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="campo" id="zona">
                            <textarea name="consulta" id="consulta" cols="50" rows="10" value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" value="enviar" onSubmit={(e) => { e.preventDefault(); sendQuery() }} />
                            <input type="reset" value="reset" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>)
}
