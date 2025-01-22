// src/Navbar.js
import React from 'react';
import './navbar.css'; // For styling
import SignInPage from "./signin";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
                
                <li><a href="#about">About</a></li>
                <li><a href="#organise">Organise a Hackathon</a></li>
                <li><a href="SignInPage">Sign In</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
