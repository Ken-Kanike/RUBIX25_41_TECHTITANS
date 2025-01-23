import React, { useState } from "react";
import "./dashboardUnavbar.css";

const Navbar = () => {
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
            <div className="navbar-logo">Hackathons</div>
            <ul className="navbar-links">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#profile">Profile</a></li>
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

export default Navbar;
