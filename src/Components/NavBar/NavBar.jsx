import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget/CartWidget";
export default function MyNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <ToastContainer />
                <Container className="NavBar">
                    <Navbar.Brand href="#home">Colossus-Gaming</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/MainDiv'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}> Home</Link>
                        <Link to={'category/GPUs'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>Placas de Video</Link>
                        <Link to={'category/MotherBoards/'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>MotherBoards</Link>
                        <Link to={'category/Processors/'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>Procesadores</Link>
                        <Link to={'/Cart/Cart'} style={{ textDecoration: "none", color: "white", marginLeft: "20px" }}><CartWidget /></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}