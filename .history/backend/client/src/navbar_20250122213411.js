// src/Navbar.js
import React from 'react';
import './navbar.css'; // For styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
                
                <li><a href="#about">About</a></li>
                
                <li><a href="#contact">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
