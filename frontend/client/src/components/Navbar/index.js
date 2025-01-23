import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './navbar.css'; 

const Navbar = () => {
    const location = useLocation();

    const isSigninPage = location.pathname === "/signin";
    const isAdminPage = location.pathname === "/admin-dashboard";

    return (
        <nav className="navbar">
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">

                {/* Show Home link if not on Sign In or Admin Dashboard page */}
                {!isSigninPage && !isAdminPage && (
                    <li><Link to="/">Home</Link></li> 
                )}

                <li><Link to="#about">About</Link></li>
                <li><Link to="#organise">Organise a Hackathon</Link></li>
                
                {/* Show Home and Logout if on Admin Dashboard */}
                {isAdminPage ? (
                    <>
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/">Logout</Link></li>   
                    </>
                ) : null}
                
                {/* Show Sign In if not on Sign In or Admin Dashboard page */}
                {!isSigninPage && !isAdminPage && (
                    <li><Link to="/signin">Sign In</Link></li>
                )}

            </ul>
        </nav>
    );
};

export default Navbar;
