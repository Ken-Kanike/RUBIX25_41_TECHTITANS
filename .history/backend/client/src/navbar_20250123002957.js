// src/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import './navbar.css'; // For styling

const Navbar = () => {
    const location = useLocation(); // Get the current route location

    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
                {/* Conditionally render navbar items based on the current route */}
                {location.pathname !== "/signin" && (
                    <li><Link to="/">Home</Link></li> // Show "Home" link except on the SignIn page
                )}
                <li><Link to="#about">About</Link></li>
                <li><Link to="#organise">Organise a Hackathon</Link></li>
                {location.pathname === "/signin" ? (
                    <li><Link to="/">Home</Link></li> // Show "Home" link on SignIn page
                ) : (
                    <li><Link to="/signin">Sign In</Link></li> // Show "Sign In" link on other pages
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
