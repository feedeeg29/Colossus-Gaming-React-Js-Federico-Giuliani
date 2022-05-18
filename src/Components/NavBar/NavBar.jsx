import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import ThemeButton from "../ThemeButton/ThemeButton";
import { ThemeContext } from "../../Components/Context/ThemeContext/ThemeContext";
export default function MyNavBar() {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <>
            <div id="navBarPrimary">
                <Navbar expand="lg" className={`${darkTheme ? 'darkBackgroundNavBar' : 'lightBackgroundNavbar'}`} >
                    <Container >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="pull-left" />
                        <Link to={'/'} style={{ textDecoration: "none", paddingLeft: "50px" }} ><Navbar.Brand className={`${darkTheme ? 'darkBackgroundBrand' : 'lightBackgroundBrand'}`}>Colossus-Gaming</Navbar.Brand></Link>
                        <Navbar.Collapse id="responsive-navbar-nav" className="pull-left"  >
                            <Nav className="me-auto">
                                <Link to={'/'} className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}> Home</Link>
                                <Link to={'category/GPUs'} className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}>GPUs</Link>
                                <Link to={'category/MotherBoards/'} className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}>MotherBoards</Link>
                                <Link to={'category/Processors/'} className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}>Procesadores</Link>
                                <Link to={'/Cart/Cart'}> <CartWidget className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`} /></Link>
                            </Nav>
                            <ThemeButton />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}