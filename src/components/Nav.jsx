import React from "react";
import '../styles/styles.css';
import logo from '../images/judedonahuelogo.svg'

function Nav() {
    return (
        <div className="header">
            <img className="svg" src={logo} alt="JDlogo"></img>
            <nav>
                <ul>
                    <li><a href="#Home">About</a></li>
                    <li><a href="#about">Portfolio</a> </li>
                </ul>
            </nav>
            <a className="cta" href="#contact"><button>Contact</button></a>
        </div>
    )
}

export default Nav;