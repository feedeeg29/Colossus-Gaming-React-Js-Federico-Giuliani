import React from "react";
import Card from "react-bootstrap/Card";

export default function GPUs({ id, name, image }) {
    return (
        <>
            <Card key={id} id={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}