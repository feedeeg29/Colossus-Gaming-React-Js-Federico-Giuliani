import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import instagram from "./instagram.png"
import facebook from "./Facebook.png"
import twitter from "./twitter.png"
import youtube from "./youtube.png"
export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" >
                    <img src={facebook} width="30px" height="30px" alt='' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                    <img src={instagram} width="30px" height="30px" alt='' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
                    <img src={youtube} width="30px" height="30px" alt='' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com" >
                    <img src={twitter} width="30px" height="30px" alt='' />
                </a>
                <Link to={'/ContactForm'}>Contactenos</Link>
                <Link to={'/AboutUs'} style={{ textDecoration: "none" }}>About Us</Link>
            </footer>
        </>
    )
}
