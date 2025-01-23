import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  background-color: ${(props) => props.theme.bg || "#f8f9fa"};
`;

const FormCard = styled.div`
  background: ${(props) => props.theme.card || "#ffffff"};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 800px;

  h2 {
    color: ${(props) => props.theme.primary || "#007bff"};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.primary || "#007bff"};
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover || "#0056b3"};
  }
`;



const UserRegister = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const handleRegistration = (e) => {
    e.preventDefault();
    alert("Registration Completed!");
    navigate("/dashboard");
    
  };

  return (
    <RegisterContainer>
      <FormCard>
        <h2>User Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profilePic" className="form-label">
              Profile Picture
            </label>
            <input type="file" className="form-control" id="profilePic" />
          </div>
          <h4>Institution Info</h4>
          <div className="mb-3">
            <label htmlFor="collegeName" className="form-label">
              College Name
            </label>
            <input
              type="text"
              className="form-control"
              id="collegeName"
              placeholder="Enter your college name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <select className="form-select" id="year" required>
              <option value="">Select year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="stream" className="form-label">
              Stream
            </label>
            <input
              type="text"
              className="form-control"
              id="stream"
              placeholder="Enter your stream (e.g., Engineering, Arts)"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">
              Branch
            </label>
            <input
              type="text"
              className="form-control"
              id="branch"
              placeholder="Enter your branch (e.g., CSE, ECE)"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">
              Upload Resume (PDF)
            </label>
            <input type="file" className="form-control" id="resume" accept=".pdf" />
          </div>
          <div className="mb-3">
            <label htmlFor="github" className="form-label">
              GitHub Profile
            </label>
            <input
              type="url"
              className="form-control"
              id="github"
              placeholder="Enter your GitHub profile link"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="portfolio" className="form-label">
              Portfolio Link
            </label>
            <input
              type="url"
              className="form-control"
              id="portfolio"
              placeholder="Enter your portfolio link"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills (Type and Select)
            </label>
            <input
              type="text"
              className="form-control"
              id="skills"
              placeholder="Enter skills separated by commas"
            />
          </div>
          <SubmitButton type="submit">Complete Registration</SubmitButton>
        </form>
      </FormCard>
    </RegisterContainer>
  );
};

export default UserRegister;
