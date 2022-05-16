import React from "react";
import { Link } from "react-router-dom";
import LogoNvidia from './LogoNvidia.png';
import MSILogo from './MSILogo.png';
import ASUSLogo from './ASUSLogo.png'
import "./MainDiv.css";
export default function MainDiv() {
    return (
        <div className="MainDiv ">
            <div className="GPUsContainer">
                <Link to={'/category/GPUs'} ><img src={LogoNvidia} alt="Logo-Nvidia-GPUs-Buy-Brand" className="container-fluid" /></Link>
            </div>
            <section className="Card_Container MotherBoardsContainer">
                <Link to={'/category/MotherBoards'}>
                    <div className="Card">
                        <img src={MSILogo} alt="MSI-Logo-Publicity-Buy-MotherBoards-Brand" className="card_image container-fluid" />
                    </div>
                </Link>
            </section>
        </div>
    );
}