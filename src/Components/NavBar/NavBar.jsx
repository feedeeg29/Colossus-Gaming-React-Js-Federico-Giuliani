import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
export default function MyNavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <ToastContainer />
                <Container className="NavBar">
                    <Navbar.Brand href="#home">Colossus-Gaming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/MainDiv'} style={{ margin: '0px 7px' }}> Home</Link>
                            <Link to={'./GPUs/'} style={{ margin: '0px 7px' }}>Placas de Video</Link>
                            <Link to={'/MotherBoards/'} style={{ margin: '0px 7px' }}>MotherBoards</Link>
                            <Link to={'/Processors/'} style={{ margin: '0px 7px' }}>Procesadores</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}