import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget/CartWidget";
export default function MyNavBar() {
    return (
        <>
            <Navbar style={{ background: `linear-gradient(to right, #086972, #1A132F)` }} expand="lg" className="container-fluid">
                <ToastContainer />
                <Container >
                    <Link to={'/'} style={{ textDecoration: "none" }} ><Navbar.Brand >Colossus-Gaming</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="pull-left" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="pull-left">
                        <Nav className="me-auto">
                            <Link to={'/'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}> Home</Link>
                            <Link to={'category/GPUs'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>GPUs</Link>
                            <Link to={'category/MotherBoards/'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>MotherBoards</Link>
                            <Link to={'category/Processors/'} style={{ margin: '0px 7px', textDecoration: "none", color: "white" }}>Procesadores</Link>
                            <Link to={'/Cart/Cart'} style={{ textDecoration: "none", color: "white", marginLeft: "20px" }}><CartWidget /></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}