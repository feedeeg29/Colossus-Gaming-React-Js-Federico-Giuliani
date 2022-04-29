import React, { useContext } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext/CartContext'
export default function Cart() {
    const { cart, removeFromCart, buyAll } = useContext(CartContext);
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const prdQTotal = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(total);
    if (cart.length === 0) {
        return (
            <>
                <div>
                    <h1>Tu carrito esta Vacio</h1>
                    <h2>Por que no sigues buscando?</h2>
                    <Link to={'/MainDiv'}><Button>Volver al Inicio</Button></Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>{cart.length}Cart</div>
                <div className='Cart-Grid'>
                    {cart.length > 0 &&
                        cart.map((item) => (
                            <Card key={item.id} id={item.id} style={{ width: "8rem" }} className="Cart-Basic">
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>${item.price}</Card.Text>
                                    <Card.Text>{item.quantity}</Card.Text>
                                    <Button onClick={() => removeFromCart(item.id)}>Eliminar del carrito</Button>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
                <h1>Total de productos {prdQTotal}</h1>
                <h2> Subtotal ${total}</h2>
                <Button onClick={buyAll}>Comprar todo</Button>
            </>)
    }
}