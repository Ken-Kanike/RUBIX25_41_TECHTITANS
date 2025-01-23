import React from "react";
import "./dashboardUSER.css";
import Navbar from "../DashboardUnavbar"; // Import Navbar

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
                
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Hackathons..."
                        className="search-input"
                    />
                    <button className="search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                
                <div className="hackathon-cards">
                    {hackathons.map((hackathon, index) => (
                        <div className="hackathon-card" key={index}>
                            <div className="hackathon-image">
                                
                                <img
                                    src="https://via.placeholder.com/600x300"  
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
      <div className="divider-bar"></div>
      <div className="joined-hackathons-container">
        <h2>Joined Hackathons</h2>
        <div className="joined-hackathon-item">Joined Hackathon 1</div>
        <div className="joined-hackathon-item">Joined Hackathon 2</div>
      </div>
        </div>
    );
};

export default Dashboard;
