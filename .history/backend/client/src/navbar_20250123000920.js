// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'; // For styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
                <li><Link to="#about">About</Link></li>
                <li><Link to="#organise">Organise a Hackathon</Link></li>
                <li><Link to="/signin">Sign in</Link></li> {/* Use Link for navigation */}
            </ul>
        </nav>
    );
};

export default Navbar;
