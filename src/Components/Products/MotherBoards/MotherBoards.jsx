import React from "react";
import Card from "react-bootstrap/Card";

export default function MotherBoards({ id, nombre, img }) {
    return (
        <>
            <Card key={id} id={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}