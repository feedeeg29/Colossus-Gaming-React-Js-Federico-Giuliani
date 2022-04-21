import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget/CartWidget";
export default function MyNavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <ToastContainer />
                <Container className="NavBar">
                    <Navbar.Brand href="#home">Colossus-Gaming</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/MainDiv'} style={{ margin: '0px 7px' }}> Home</Link>
                        <Link to={'category/GPUs'} style={{ margin: '0px 7px' }}>Placas de Video</Link>
                        <Link to={'category/MotherBoards/'} style={{ margin: '0px 7px' }}>MotherBoards</Link>
                        <Link to={'category/Processors/'} style={{ margin: '0px 7px' }}>Procesadores</Link>
                        <CartWidget><Link to={'/Cart/Cart'} /></CartWidget>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}