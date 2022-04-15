import React from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
export default function PrimaryProductsDetail({ id, name, img, price, stock }) {
    return (
        <>
            <Card key={id} id={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <ItemCount stock={10} />
                </Card.Body>
            </Card>
        </>
    );
}