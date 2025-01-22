
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './navbar.css'; 

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
               
                {location.pathname !== "/signin" && (
                    <li><Link to="/">Home</Link></li> 
                )}
                <li><Link to="#about">About</Link></li>
                <li><Link to="#organise">Organise a Hackathon</Link></li>
                {location.pathname === "/signin" ? (
                    <li><Link to="/">Home</Link></li> 
                ) : (
                    <li><Link to="/signin">Sign In</Link></li> 
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
