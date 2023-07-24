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

        <div className="footer-socials">
            <a href="https://github.com/judemdonahue"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jude-donahue/"><i class="fa-brands fa-linkedin"></i></a>
            <a href=""></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; JUDE DONAHUE. All rights reserved.</small>
        </div>

        </footer>
    )
}

export default Footer;