import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MSILogo } from './MSILogo.svg';
import { ReactComponent as NvidiaLogo } from './LogoNvidia.svg';
import "./MainDiv.css";
import { ThemeContext } from "../../Components/Context/ThemeContext/ThemeContext";
export default function MainDiv() {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className="MainDiv ">
            <div className="GPUsContainer">
                <Link to={'/category/GPUs'} >
                    <NvidiaLogo className={`${darkTheme ? 'darkBackgroundLogo' : 'lightBackgroundLogo'}`} />
                    {/* <img src={LogoNvidia} alt="Logo-Nvidia-GPUs-Buy-Brand" className="container-fluid" width={"50px"} /> */}
                </Link>
            </div>
            <section className="Card_Container MotherBoardsContainer">
                <Link to={'/category/MotherBoards'}>
                    <div className="Card">
                        <MSILogo className={`${darkTheme ? 'darkBackgroundLogo' : 'lightBackgroundLogo'}`} />
                        {/* <img src={MSILogo} fill="black" alt="MSI-Logo-Publicity-Buy-MotherBoards-Brand" className="card_image container-fluid" /> */}
                    </div>
                </Link>
            </section>
        </div>
    );
}