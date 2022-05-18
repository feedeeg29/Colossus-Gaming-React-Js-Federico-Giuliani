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
                        <Link to={'/'} className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`} ><div className={`${darkTheme ? 'darkBackgroundBrand' : 'lightBackgroundBrand'}`}>Colossus-Gaming</div></Link>
                        <Navbar.Collapse id="responsive-navbar-nav" className="pull-left"  >
                            <Nav className="me-auto">
                                <Link to={'/'} fix="bottom" className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}> Home</Link>
                                <Link to={'category/GPUs'} fix="bottom" className={`${darkTheme ? 'darkBackgroundLink Active' : 'lightBackgroundLink Active'}`}>GPUs</Link>
                                <Link to={'category/MotherBoards/'} fix="bottom" className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}>MotherBoards</Link>
                                <Link to={'category/Processors/'} fix="bottom" className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}>Procesadores</Link>
                                <Link to={'/Cart/Cart'} fix="bottom" className={`${darkTheme ? 'darkBackgroundLink' : 'lightBackgroundLink'}`}> <CartWidget /></Link>
                            </Nav>
                            <ThemeButton />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}