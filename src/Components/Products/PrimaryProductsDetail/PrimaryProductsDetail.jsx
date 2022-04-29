import React, { useState, useContext } from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import './detail.css'
import { CartContext } from "../../CartContext/CartContext";
import Decision from '../../Decision/Decision';
export default function PrimaryProductsDetail({ id, name, img, price, stock }) {
    const [count, setCount] = useState(0);
    const { cart, addToCart } = useContext(CartContext);

    function handleOnAdd(quantity) {
        addToCart({ id, name, img, price, stock }, quantity)
    }
    const added = cart.find(item => item.id === id);
    return (
        <>
            <Card key={id} id={id} style={{ width: "18rem" }} className="Card-Basic">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    {!added ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Decision />}
                </Card.Body>
            </Card>
        </>
    );
}