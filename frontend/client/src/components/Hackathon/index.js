import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./hackathon.css";

const Hackathon = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { name, type, details, imgurl, startDate, endDate, winner, participants } = state;

    const [progress, setProgress] = useState(0);
    const [daysRemaining, setDaysRemaining] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState("");


    const parseTime = (dateString, timeString) => {
        const [day, month, year] = dateString.split("-").map(Number);
        const [time, modifier] = timeString.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;

        return new Date(year, month - 1, day, hours, minutes, 0, 0);
    };

    const startTime = parseTime(startDate, "11:00 AM");
    const endTime = parseTime(endDate, "11:00 AM");

    // Effect to calculate the progress for live hackathons
    useEffect(() => {
        if (type === "live") {
            const totalDuration = endTime.getTime() - startTime.getTime();

            const updateProgress = () => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime.getTime();
                const calculatedProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
                setProgress(calculatedProgress);
            };

            updateProgress();
            const interval = setInterval(updateProgress, 60000);
            return () => clearInterval(interval);
        } else if (type === "upcoming") {
            const [day, month, year] = startDate.split("-").map(Number);
            const startDateObj = new Date(year, month - 1, day);
            const today = new Date();
            const diffInDays = Math.ceil((startDateObj - today) / (1000 * 60 * 60 * 24));
            setDaysRemaining(diffInDays);
        }
    }, [type, startDate, endDate]);

    // Format the date string to a readable format
    const formatDate = (date) => {
        const [day, month, year] = date.split("-").map(Number);
        const formattedDate = new Date(year, month - 1, day);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return formattedDate.toLocaleDateString(undefined, options);
    };

    const handleRegisterClick = () => {
        navigate("/register", { state: { hackathon: state } });
    };

    // Effect to calculate the time remaining for upcoming hackathons
    useEffect(() => {
        if (type === "upcoming") {
            const targetDate = new Date(
                startDate.split("-").reverse().join("-") + "T11:00:00"
            );

            const calculateTimeRemaining = () => {
                const now = new Date();
                const difference = targetDate - now;

                if (difference <= 0) {
                    setTimeRemaining("00:00:00:00");
                    return;
                }

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeRemaining(
                    `${days.toString().padStart(2, "0")}:${hours
                        .toString()
                        .padStart(2, "0")}:${minutes
                        .toString()
                        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
                );
            };

            calculateTimeRemaining();
            const interval = setInterval(calculateTimeRemaining, 1000);

            return () => clearInterval(interval);
        }
    }, [type, startDate]);

    return (
        <div className="hackathon-details-container">
            <div className="hackathon-header">
                <img src={imgurl} alt={name} className="hackathon-detail-img" />
                <h1>{name}</h1>
            </div>
            <p className="hackathon-details">{details}</p>

            {type === "upcoming" && (
                <div className="hackathon-upcoming">
                    <h3>Start Date</h3>
                    <p>{formatDate(startDate)}</p>
                    <h3>End Date</h3>
                    <p>{formatDate(endDate)}</p>
                    <div className="countdown-timer">
                        <h4>Time Remaining:</h4>
                        <div className="timer-display">{timeRemaining}</div>
                    </div>
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
                    <p>{progress.toFixed(2)}% Completed</p>
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


// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./hackathon.css";

// const Hackathon = () => {
//     const { state } = useLocation();
//     const navigate = useNavigate();
//     const { name, type, details, imgurl, startDate, endDate, winner, participants } = state;
//     console.log(startDate, endDate);

//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         if (type === "live") {
//             const interval = setInterval(() => {
//                 setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//             }, 100); // Increase progress every 100ms
//             return () => clearInterval(interval);
//         }
//     }, [type]);

//     const formatDate = (date) => {
//         const options = { year: "numeric", month: "long", day: "numeric" };
//         return new Date(date).toLocaleDateString(undefined, options);
//     };

//     const handleRegisterClick = () => {
//         navigate("/register", { state: { hackathon: state } });
//     };

//     return (
//         <div className="hackathon-details-container">
//             <div className="hackathon-header">
//                 <img src={imgurl} alt={name} className="hackathon-detail-img" />
//                 <h1>{name}</h1>
//             </div>
//             <p>{details}</p>

//             {type === "upcoming" && (
//                 <div className="hackathon-upcoming">
//                     <h3>Start Date</h3>
//                     <p>{formatDate(startDate)}</p>
//                     <button className="register-btn" onClick={handleRegisterClick}>
//                         Register for Hackathon
//                     </button>
//                 </div>
//             )}

//             {type === "live" && (
//                 <div className="hackathon-live">
//                     <h3>Hackathon Progress</h3>
//                     <div className="progress-bar-container">
//                         <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//                     </div>
//                     <p>{progress}% Completed</p>
//                 </div>
//             )}

//             {type === "previous" && (
//                 <div className="hackathon-previous">
//                     <h3>Winner</h3>
//                     <p>{winner}</p>
//                     <h3>Participants</h3>
//                     <ul>
//                         {participants.map((participant, index) => (
//                             <li key={index}>{participant}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Hackathon;
