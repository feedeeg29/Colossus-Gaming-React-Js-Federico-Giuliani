import React from "react";
import Card from "react-bootstrap/Card";

export default function Processors({ id, nombre }) {
    return (
        <Card key={id} id={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
            </Card.Body>
        </Card>
    );
}