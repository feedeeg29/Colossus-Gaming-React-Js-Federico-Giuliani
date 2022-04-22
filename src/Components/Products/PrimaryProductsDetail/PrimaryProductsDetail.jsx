import React, { useState, useContext } from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import './detail.css'
import { CartContext } from "../../CartContext/CartContext";
import Decision from '../../Decision/Decision';
export default function PrimaryProductsDetail({ Id, name, img, price, stock }) {
    const [count, setCount] = useState(0);
    const onAdd = (cuantity) => {
        setCount(cuantity);
    }
    const added = (count === 0);
    return (
        <>
            <Card key={Id} id={Id} style={{ width: "18rem" }} className="Card-Basic">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    {added ? <ItemCount stock={stock} /> : <Decision />}
                </Card.Body>
            </Card>
        </>
    );
}