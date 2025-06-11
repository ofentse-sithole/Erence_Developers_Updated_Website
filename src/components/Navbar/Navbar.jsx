import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <img
                    src="/images/Logo_Details.png" // Replace with your logo's path
                    alt="Logo"
                    className="navbar-logo"
                />
                <div className="navbar-right">
                    <ul className="navbar-links">
                        <li className="navbar-link">
                            <Link to="/home" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="navbar-link dropdown">
                            <Link to="/services" className="nav-links">
                                Services
                            </Link>
                            <div className="dropdown-content">
                                <Link to="projects">Our Projects</Link>
                            </div>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/order" className="nav-links"  >
                                Order
                            </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/sale" className="nav-links"  >
                                Sale
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/about" className="nav-links">
                                About 
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/contact" className="nav-links">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Sliding Menu */}
            <div className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
                <button className="close-button" onClick={toggleMenu}>×</button>
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to="/home" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/projects" className="nav-links">
                            Our Projects
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/order" className="nav-links">
                            Order
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/sale" className="nav-links">
                            Sale
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/about" className="nav-links">
                            About Us
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/contact" className="nav-links">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
    );
};

export default Navbar;
