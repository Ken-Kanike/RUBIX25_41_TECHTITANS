import React, { useState } from "react";
import { Link} from 'react-router-dom'; 
import "./dashboardUnavbar.css";

const UserNavbar = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="HackSpace Logo" className="logo-image" />
                <span>HackSpace</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><Link to="/">Home</Link></li>
            </ul>

         
            <div className="navbar-profile">
                <label htmlFor="file-input">
                    <div className="profile-circle">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" />
                        ) : (
                            <span>+</span>
                        )}
                    </div>
                </label>
                <input
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                />
            </div>
        </nav>
    );
};

export default UserNavbar;
