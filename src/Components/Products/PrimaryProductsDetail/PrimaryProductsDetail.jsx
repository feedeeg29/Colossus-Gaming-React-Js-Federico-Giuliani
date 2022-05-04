import React, { useContext } from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import './detail.css'
import { CartContext } from "../../CartContext/CartContext";
import Decision from '../../Decision/Decision';
export default function PrimaryProductsDetail({ Id, name, img, price, stock }) {
    const { cart, addToCart } = useContext(CartContext);

    function handleOnAdd(quantity) {
        addToCart({ Id, name, img, price, stock }, quantity)
    }
    const added = cart.find((item) => item.id === Id);

    console.log(added);
    return (
        <>
            <Card key={Id} id={Id} style={{ width: "18rem" }} className="Card-Basic">
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