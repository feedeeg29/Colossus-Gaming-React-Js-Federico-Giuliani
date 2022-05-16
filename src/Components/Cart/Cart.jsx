import React, { useContext } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext/CartContext'
export default function Cart() {
    const { cart, removeFromCart, total, prdQTotal } = useContext(CartContext);

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
                <div className='Cart-Grid'>
                    {cart.length > 0 &&
                        cart.map((item) => (
                            <Card key={item.Id} id={item.Id} style={{ width: "8rem" }} className="Cart-Basic">
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>${item.price}</Card.Text>
                                    <Card.Text>{item.quantity}</Card.Text>
                                    <Button onClick={() => removeFromCart(item.Id)}>Eliminar del carrito</Button>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
                <h1>Total de productos {prdQTotal}</h1>
                <h2> Subtotal ${total}</h2>
                <Link to={'/BuyOrder'}><Button>Comprar todo</Button></Link>
            </>)
    }
}