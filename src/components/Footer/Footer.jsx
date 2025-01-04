import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=61566568187743" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/erence_developers/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>

            {/* Navigation Links */}
            <nav className="footer-nav">
                <a href="/home">Home</a>
                <a href="/service">Services</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </nav>

            {/* Copyright */}
            <div className="copyright">
                <p>Copyright ©{currentYear}, <span>Erence Developers</span></p>
            </div>
        </footer>
    );
};

export default Footer;