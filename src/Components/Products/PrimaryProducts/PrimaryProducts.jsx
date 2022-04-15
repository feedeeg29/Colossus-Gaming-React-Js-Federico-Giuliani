import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function PrimaryProducts({ id, nombre, img }) {
    return (
        <>
            <Card key={id} id={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                </Card.Body>
                <Link to={`/detail/${id}`}>Detalle</Link>
            </Card>
        </>
    );
}