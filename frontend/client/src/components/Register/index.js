import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./register.css";

const Register = () => {
    const { state } = useLocation();
    const hackathon = state.hackathon;

    const [teamName, setTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState([""]);
    const [teamInfo, setTeamInfo] = useState("");

    const handleAddMember = () => {
        setTeamMembers([...teamMembers, ""]);
    };

    const handleMemberChange = (index, value) => {
        const newMembers = [...teamMembers];
        newMembers[index] = value;
        setTeamMembers(newMembers);
    };

    const handleSubmit = () => {
        const registrationData = {
            hackathon: hackathon.name,
            teamName,
            teamMembers,
            teamInfo,
        };
        alert(JSON.stringify(registrationData, null, 2));
    };

    return (
        <div className="register-container">
            <h1>Register for {hackathon.name}</h1>
            <form className="register-form">
                <div className="form-group">
                    <label>Team Name</label>
                    <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Team Info</label>
                    <textarea
                        value={teamInfo}
                        onChange={(e) => setTeamInfo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Team Members</label>
                    {teamMembers.map((member, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder={`Enter HackSpace Member ${index + 1} Username `}
                                value={member}
                                onChange={(e) =>
                                    handleMemberChange(index, e.target.value)
                                }
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddMember}>
                        Add Member
                    </button>
                </div>
                <div className="form-actions">
                    <button className="action-button" type="button">Find Team Mates</button>
                    <button className="action-button" type="button">Join a Team</button>
                    <button className="action-button" type="button" onClick={handleSubmit}>
                        Complete Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
