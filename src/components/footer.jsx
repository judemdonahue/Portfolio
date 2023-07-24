import React from "react";
import '../styles/styles.css';

function Footer() {
    return (
        <footer>
            <a href="#" className="footer-logo">JUDE DONAHUE</a>

            <ul className="permalinks">
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        <div className="footer-socials">
            <a href="https://github.com/judemdonahue"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jude-donahue/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://m.me/judemdonahue"><i className="fa-brands fa-facebook-messenger" ></i></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; JUDE DONAHUE. All rights reserved.</small>
        </div>

        </footer>
    )
}

export default Footer;