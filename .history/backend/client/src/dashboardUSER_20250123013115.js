import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar"; // Import the Navbar

const Dashboard = () => {
    // Sample Hackathon Data
    const hackathons = [
        { name: "AI Challenge", details: "A hackathon for AI enthusiasts." },
        { name: "Blockchain Dev", details: "Build projects with Blockchain." },
        { name: "Cyber Security", details: "Test your skills in Cyber Security." },
    ];

    return (
        <div>
            <Navbar /> {/* Including Navbar */}
            <div className="dashboard-container">
                <h2>Welcome to your Dashboard</h2>
                <div className="hackathon-cards">
                    {hackathons.map((hackathon, index) => (
                        <div className="hackathon-card" key={index}>
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
