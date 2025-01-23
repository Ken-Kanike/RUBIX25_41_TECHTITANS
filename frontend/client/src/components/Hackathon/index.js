import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./hackathon.css";

const Hackathon = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { name, type, details, imgurl, startDate, endDate, winner, participants } = state;
    console.log(startDate, endDate);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (type === "live") {
            const interval = setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 1 : 100));
            }, 100); // Increase progress every 100ms
            return () => clearInterval(interval);
        }
    }, [type]);

    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const handleRegisterClick = () => {
        navigate("/register", { state: { hackathon: state } });
    };

    return (
        <div className="hackathon-details-container">
            <div className="hackathon-header">
                <img src={imgurl} alt={name} className="hackathon-detail-img" />
                <h1>{name}</h1>
            </div>
            <p>{details}</p>

            {type === "upcoming" && (
                <div className="hackathon-upcoming">
                    <h3>Start Date</h3>
                    <p>{formatDate(startDate)}</p>
                    <button className="register-btn" onClick={handleRegisterClick}>
                        Register for Hackathon
                    </button>
                </div>
            )}

            {type === "live" && (
                <div className="hackathon-live">
                    <h3>Hackathon Progress</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{progress}% Completed</p>
                </div>
            )}

            {type === "previous" && (
                <div className="hackathon-previous">
                    <h3>Winner</h3>
                    <p>{winner}</p>
                    <h3>Participants</h3>
                    <ul>
                        {participants.map((participant, index) => (
                            <li key={index}>{participant}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Hackathon;
