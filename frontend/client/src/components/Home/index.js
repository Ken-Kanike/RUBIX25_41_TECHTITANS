import React from 'react';
import './homepage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video
                src="/background.mp4" // Ensure this path matches your file location
                autoPlay
                loop
                muted
            ></video>
            <h1>HackSpace</h1>
            <p>
                Welcome to HackSpace – your ultimate virtual hackathon platform. Discover, attend, and organize the best hackathons from around the world. 
                Collaborate with innovative minds, showcase your projects, and bring your ideas to life in a seamless, feature-rich environment.
            </p>
            
            {/* Search Bar */}
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
            </div>
        </div>
    );
};

export default HomePage;



// import React from 'react';
// import './homepage.css';

// const HomePage = () => {
//     return (
//         <div className="homepage-container">
//             <h1>Virtual Hackathon Platform</h1>
//             <p>Enhancing collaboration and innovation with seamless features.</p>

//             <div className="features-section">
//                 <div className="feature-box">
//                     <h2>Smart Team Formation</h2>
//                     <p>Find compatible teammates based on skills and interests effortlessly.</p>
//                 </div>
//                 <div className="feature-box">
//                     <h2>Real-Time Collaboration</h2>
//                     <p>Integrated chat, video calls, and shared workspaces for idea exchange.</p>
//                 </div>
//                 <div className="feature-box">
//                     <h2>Project Submission & Tracking</h2>
//                     <p>Structured submission portal with version control to monitor progress.</p>
//                 </div>
//                 <div className="feature-box">
//                     <h2>Live Judging System</h2>
//                     <p>Criteria-based scoring, feedback submission, and leaderboards in real-time.</p>
//                 </div>
//                 <div className="feature-box">
//                     <h2>Mentor Support & Q&A</h2>
//                     <p>Dedicated mentor channels with scheduled sessions and live Q&A forums.</p>
//                 </div>
//                 <div className="feature-box">
//                     <h2>Interactive Dashboard</h2>
//                     <p>Dynamic event schedules, announcements, and project showcases.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;
