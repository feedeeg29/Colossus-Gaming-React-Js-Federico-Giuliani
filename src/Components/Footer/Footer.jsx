import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { ReactComponent as Instagram } from "./Instagram.svg"
import { ReactComponent as Facebook } from "./Facebook.svg"
import { ReactComponent as Twitter } from "./Twitter.svg"
import { ReactComponent as Youtube } from "./Youtube.svg"
import { ThemeContext } from "../../Components/Context/ThemeContext/ThemeContext";
export default function Footer() {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <>
            <footer className={`${darkTheme ? 'darkBackgroundFooter' : 'lightBackgroundFooter'}`}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" >
                    <Facebook width="30px" height="30px" alt='' className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                    <Instagram className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
                    <Youtube className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com" >
                    <Twitter className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`} />
                </a>
                <Link to={'/ContactForm'} className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`}>Contactenos</Link>
                <Link to={'/AboutUs'} className={`${darkTheme ? 'darkBackgroundSocialMedia' : 'lightBackgroundSocialMedia'}`}>About</Link>
            </footer>
        </>
    )
}
