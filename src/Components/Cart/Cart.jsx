import React, { useContext } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from "../../Components/Context/CartContext/CartContext"
import { ThemeContext } from '../Context/ThemeContext/ThemeContext'

export default function Cart() {
    const { cart, removeFromCart, total, prdQTotal } = useContext(CartContext);
    const { darkTheme } = useContext(ThemeContext)
    if (cart.length === 0) {
        return (
            <>
                <div>
                    <h1>Tu carrito esta Vacio</h1>
                    <h2>Por que no sigues buscando?</h2>
                    <Link to={'/MainDiv'} className={`${darkTheme ? 'darkBackgroundButton' : 'lightBackgroundButton'}`}><Button>Volver al Inicio</Button></Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='Cart-Grid'>
                    {cart.length > 0 &&
                        cart.map((item) => (
                            <div className={`${darkTheme ? 'darkBackgroundDetail' : 'lightBackgroundDetail '}`}>
                                <Card className={`${darkTheme ? 'darkBackgroundCard Cart-Basic' : 'lightBackgroundCard Cart-Basic'}`} key={item.Id} id={item.Id} style={{ width: "8rem" }} >
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title className={`${darkTheme ? 'darkBackgroundTitle' : 'lightBackgroundTitle'}`}>{item.name}</Card.Title>
                                        <Card.Text className={`${darkTheme ? 'darkBackgroundPrice' : 'lightBackgroundPrice'}`}>${item.price}</Card.Text>
                                        <Card.Text className={`${darkTheme ? 'darkBackgroundPrice' : 'lightBackgroundPrice'}`}>{item.quantity}</Card.Text>
                                        <Button className={`${darkTheme ? 'darkBackgroundButton' : 'lightBackgroundButton'}`} onClick={() => removeFromCart(item.Id)}>Eliminar del carrito</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                </div>
                <h1 className={`${darkTheme ? 'darkBackgroundPrice' : 'lightBackgroundPrice'}`}>Total de productos {prdQTotal}</h1>
                <h2 className={`${darkTheme ? 'darkBackgroundPrice' : 'lightBackgroundPrice'}`}> Subtotal ${total}</h2>
                <Link to={'/BuyOrder'}><Button className={`${darkTheme ? 'darkBackgroundButton' : 'lightBackgroundButton'}`}>Comprar todo</Button></Link>
            </>)
    }
}