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
                            <Nav><Link to={'/MainDiv'}> Home</Link></Nav>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to={'./GPUs'}>Placas de Video</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={'/MotherBoards/'}>MotherBoards</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={'/Processors'}>Procesadores</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}