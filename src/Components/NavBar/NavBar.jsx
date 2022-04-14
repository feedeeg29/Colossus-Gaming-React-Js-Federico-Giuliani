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
                            <Nav.Link><Link to={'../MainDiv/MainDiv.jsx'}> Home</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to={'../Products/GPUs/GPUsListContainer.jsx'}> Inicio</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" ><Link to={'../Products/MotherBoards/MotherBoardsListContainer.jsx'}></Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" ><Link to={'../Products/Processors/ProcessorsListContainer.jsx'}></Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}