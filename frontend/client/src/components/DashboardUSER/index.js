import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboardUSER.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardUSER = () => {
    const navigate = useNavigate();

    // dummy data
    const hackathons = [
        {
            name: "Tsec Hacks",
            type: "upcoming",
            details: "A hackathon for AI enthusiasts.",
            progress: "",
            startDate: "22-02-2025",
            endDate:"25-02-2025",
            imgurl:  "/hackathon.png",
        },
        {
            name: "Rubix",
            type: "live",
            details: "Build projects with Blockchain.",
            progress: "",
            startDate: "22-01-2025",
            endDate:"25-01-2025",
            imgurl: "/hackathon.png",
        },
        {
            name: "It's a Hack",
            type: "upcoming",
            details: "Test your skills in Cyber Security.",
            progress: "Starts in 10 days and 3 hours",
            startDate: "22-03-2025",
            endDate:"25-03-2025",
            imgurl:  "/hackathon.png",
        },
    ];

    const previousHackathons = [
        {
            name: "Hackathon 1",
            type: "previous",
            details: "AI-based Hackathon for Web Development.",
            progress: "Completed in 3 days",
            imgurl: "/hackathon.png",
        },
        {
            name: "Hackathon 2",
            type: "previous",
            details: "Cybersecurity challenge and competition.",
            progress: "Completed in 2 days",
            imgurl: "/hackathon.png",
        },
        {
            name: "Hackathon 3",
            type: "previous",
            details: "Advanced Blockchain integration.",
            progress: "Completed in 4 days",
            imgurl: "/hackathon.png",
        },
    ];

    const username = "User";

    const handleCardClick = (hackathon) => {
        navigate("/hackathon", { state: hackathon });
    };

    return (
        <div>
            <div className="dashboard-container">
                <div className="user-info-container">
                    <h2>Welcome, {username}!</h2>
                    <p>Get insights into your journey with HackSpace...</p>
                </div>

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

                <div className="coming-text-container">
                    <h3>Upcoming Hackathons</h3>
                </div>

                {/* Check if hackathons is defined and is an array before mapping */}
                <div className="hackathon-cards">
                    {Array.isArray(hackathons) && hackathons.length > 0 ? (
                        hackathons.map((hackathon, index) => (
                            <div
                                className="hackathon-card"
                                key={index}
                                onClick={() => handleCardClick(hackathon)}
                            >
                                <div className="hackathon-image">
                                    <img
                                        src={hackathon.imgurl}
                                        alt={hackathon.name}
                                        className="hackathon-img"
                                    />
                                </div>
                                <h3>{hackathon.name}</h3>
                                <p>{hackathon.details}</p>
                                <p className="hackathon-progress">
                                    {hackathon.progress}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming hackathons found.</p>
                    )}
                </div>

                <div className="joined-hackathons-container">
                    <h2 className="text-start">Joined Hackathons</h2>
                    <div className="joined-hackathons-list">
                        {/* Check if previousHackathons is defined and is an array before mapping */}
                        {Array.isArray(previousHackathons) &&
                        previousHackathons.length > 0 ? (
                            previousHackathons.map((hackathon, index) => (
                                <div
                                    className="joined-hackathon-card"
                                    key={index}
                                    onClick={() => handleCardClick(hackathon)}
                                >
                                    <div className="joined-hackathon-image">
                                        <img
                                            src={hackathon.imgurl}
                                            alt={hackathon.name}
                                            className="joined-hackathon-img"
                                        />
                                    </div>
                                    <div className="joined-hackathon-data">
                                        <h3>{hackathon.name}</h3>
                                        <p>{hackathon.details}</p>
                                        <p className="hackathon-progress">
                                            {hackathon.progress}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No joined hackathons found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUSER;



// import React from "react";
// import "./dashboardUSER.css";
// import "bootstrap/dist/css/bootstrap.min.css";


// const DashboardUSER = () => {

//     const hackathons = [
//         { name: "Tsec Hacks", details: "A hackathon for AI enthusiasts." , imgurl: "https://firebasestorage.googleapis.com/v0/b/my-firebase-cloud-storgae.appspot.com/o/js-portfolio-web%2FURL-shortner.jpg?alt=media&token=2a290faa-6864-4f8a-ba16-e6a2fa299a24" },
//         { name: "Rubix", details: "Build projects with Blockchain." , imgurl: "https://firebasestorage.googleapis.com/v0/b/my-firebase-cloud-storgae.appspot.com/o/js-portfolio-web%2FFlask-todo.jpg?alt=media&token=caeccdfc-2220-405d-90b8-72f0f5c4d6b4"},
//         { name: "It's a Hack", details: "Test your skills in Cyber Security." , imgurl: "https://firebasestorage.googleapis.com/v0/b/my-firebase-cloud-storgae.appspot.com/o/js-portfolio-web%2Fface-detection-home.png?alt=media&token=cd491c44-52c2-4f5e-82cd-c4ad57b41aba" },
//     ];

//     const previousHackathons = [
//         { name: "Hackathon 1", details: "Description for Hackathon 1", imgurl: "/hackathon.png" },
//         { name: "Hackathon 2", details: "Description for Hackathon 2", imgurl: "/hackathon.png" },
//         { name: "Hackathon 3", details: "Description for Hackathon 3", imgurl: "/hackathon.png" },
//         { name: "Hackathon 4", details: "Description for Hackathon 4", imgurl: "/hackathon.png" },
//         { name: "Hackathon 5", details: "Description for Hackathon 5", imgurl: "/hackathon.png" },
//     ];
//     const username = "User";

//     return (
//         <div>
//             {/* <Navbar/> */}
//             <div className="dashboard-container">

//                 <div className="user-info-container">
//                     <h2>Welcome, {username}!</h2>
//                     <p>
//                         Get insights of your journey with HackSpace..
//                     </p>
//                 </div>
                
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Search Hackathons..."
//                         className="search-input"
//                     />
//                     <button className="search-btn">
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </div>


//                 <div className="coming-text-container">
//                   <h3>Upcoming Hackathons..</h3>
//                 </div>
                
//                 <div className="hackathon-cards">
//                     {hackathons.map((hackathon, index) => (
//                         <div className="hackathon-card" key={index}>
//                             <div className="hackathon-image">
                                
//                                 <img
//                                     src={hackathon.imgurl}
//                                     alt={hackathon.name}
//                                     className="hackathon-img"
//                                 />
//                             </div>
//                             <h3>{hackathon.name}</h3>
//                             <p>{hackathon.details}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="joined-hackathons-container">
//                     <h2 className="text-start">Joined Hackathons</h2>
//                     <div className="-item">
//                         {previousHackathons.map((previousHackathons, index) => (
//                         <div className="joined-hackathon-card" key={index}>
//                             <div className="joined-hackathon-image">
                                
//                                 <img
//                                     src={previousHackathons.imgurl}
//                                     alt={previousHackathons.name}
//                                     className="joined-hackathon-img"
//                                 />
//                             </div>
//                             <div className="joined-hackathon-data">
//                             <h3>{previousHackathons.name}</h3>
//                             <p>{previousHackathons.details}</p>
//                             </div>
//                         </div>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardUSER;
