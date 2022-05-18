import React, { useState, useContext } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import "./ContactForm.css"
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';
export default function ContactForm() {
    const { darkTheme } = useContext(ThemeContext)
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
            <div className={`${darkTheme ? "darkThemeContact body_contact" : "lightThemeContact body_contact"}`}>
                <form action="#" className="Contact" onSubmit={(e) => { e.preventDefault(); sendQuery() }}>
                    <fieldset className={`${darkTheme ? "darkThemeContact" : "lightThemeContact"}`} id="zona">
                        <legend className={`${darkTheme ? "darkThemeContact title" : "lightThemeContact title"}`} id="letras">
                            Formulario de Contacto
                        </legend>
                        <div className={`${darkTheme ? "darkThemeContact field" : "lightThemeContact field"}`} id="zona">
                            <input type="text" id="nombre" value={name} name="Nombre" placeholder="Federico Giuliani" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={`${darkTheme ? "darkThemeContact field" : "lightThemeContact field"}`} id="zona">
                            <input type="text" id="contacto" name="contacto" value={phone} placeholder="Ej: 11-5023-405" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className={`${darkTheme ? "darkThemeContact field" : "lightThemeContact field"}`} id="zona">
                            <input type="email" id="email" value={email} name="email" placeholder="correoelectronico@correo.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={`${darkTheme ? "darkThemeContact field" : "lightThemeContact field"}`} id="zona">
                            <input type="address" id="address" value={address} name="email" placeholder="correoelectronico@correo.com" onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className={`${darkTheme ? "darkThemeContact field" : "lightThemeContact field"}`} id="zona">
                            <textarea name="consulta" id="consulta" cols="50" rows="10" value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" value="enviar" onSubmit={(e) => { e.preventDefault(); sendQuery() }} className={`${darkTheme ? "darkThemeContact button" : "lightThemeContact button"}`} />
                            <input type="reset" value="reset" className={`${darkTheme ? "darkThemeContact button" : "lightThemeContact button"}`} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>)
}
