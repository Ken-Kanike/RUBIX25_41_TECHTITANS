import React from 'react';
import './homepage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <h1>Virtual Hackathon Platform</h1>
            <p>Enhancing collaboration and innovation with seamless features.</p>

            <div className="features-section">
                <div className="feature-box">
                    <h2>Smart Team Formation</h2>
                    <p>Find compatible teammates based on skills and interests effortlessly.</p>
                </div>
                <div className="feature-box">
                    <h2>Real-Time Collaboration</h2>
                    <p>Integrated chat, video calls, and shared workspaces for idea exchange.</p>
                </div>
                <div className="feature-box">
                    <h2>Project Submission & Tracking</h2>
                    <p>Structured submission portal with version control to monitor progress.</p>
                </div>
                <div className="feature-box">
                    <h2>Live Judging System</h2>
                    <p>Criteria-based scoring, feedback submission, and leaderboards in real-time.</p>
                </div>
                <div className="feature-box">
                    <h2>Mentor Support & Q&A</h2>
                    <p>Dedicated mentor channels with scheduled sessions and live Q&A forums.</p>
                </div>
                <div className="feature-box">
                    <h2>Interactive Dashboard</h2>
                    <p>Dynamic event schedules, announcements, and project showcases.</p>
                </div>
                <div className="feature-box">
                    <h2>Gamification & Engagement</h2>
                    <p>Earn badges, participation points, and climb the public leaderboard.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
