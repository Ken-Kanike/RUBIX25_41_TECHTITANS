import React from "react";
import "./dashboardUSER.css";
import Navbar from "./dashboardUnavbar"; // Import Navbar

const Dashboard = () => {
    const hackathons = [
        { name: "AI Challenge", details: "A hackathon for AI enthusiasts." },
        { name: "Blockchain Dev", details: "Build projects with Blockchain." },
        { name: "Cyber Security", details: "Test your skills in Cyber Security." },
    ];

    return (
        <div>
            <Navbar />
            <div className="dashboard-container">
                <div className="hackathon-cards">
                    {hackathons.map((hackathon, index) => (
                        <div className="hackathon-card" key={index}>
                            <div className="hackathon-image">
                                {/* Placeholder for Hackathon Image */}
                                <img
                                    src="https://via.placeholder.com/600x300"  // Placeholder image URL
                                    alt={hackathon.name}
                                    className="hackathon-img"
                                />
                            </div>
                            <h3>{hackathon.name}</h3>
                            <p>{hackathon.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
