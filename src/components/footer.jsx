import React from "react";
import '../styles/styles.css';

function Footer() {
    return (
        <footer>
            <a href="#" className="footer-logo">JUDE DONAHUE</a>

            <ul className="permalinks">
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        <div className="footer-socials"></div>

        </footer>
    )
}

export default Footer;