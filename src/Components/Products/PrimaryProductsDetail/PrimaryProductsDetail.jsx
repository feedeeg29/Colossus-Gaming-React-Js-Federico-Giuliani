import React from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import './detail.css'
export default function PrimaryProductsDetail({ Id, name, img, price, stock }) {
    return (
        <>
            <Card key={Id} id={Id} style={{ width: "18rem" }} className="Card-Basic">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
        </>
    );
}