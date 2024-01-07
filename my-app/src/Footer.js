import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer--pin">
                <ul className="footer-links-left">
                    <li className><NavLink to="/contactus">Contact-Us</NavLink></li>
                </ul>
                <ul className="footer-links-right">
                    <li className="footer-links"><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                    <li className="footer-links"><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                    <li className="footer-links"><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    <li className="footer-links"><a href="#"><i className="fa-brands fa-pinterest" /></a></li>
                    <li className="footer-links"><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer