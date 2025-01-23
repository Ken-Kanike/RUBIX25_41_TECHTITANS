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

const AdminRegister = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleRegistration = (e) => {
    e.preventDefault();
    alert("Admin Registration Completed!");
    navigate("/admin-dashboard"); // Navigate to the admin dashboard
  };

  return (
    <RegisterContainer>
      <FormCard>
        <h2>Admin Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-3">
            <label htmlFor="orgName" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              className="form-control"
              id="orgName"
              placeholder="Enter your organization name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orgLogo" className="form-label">
              Organization Logo
            </label>
            <input type="file" className="form-control" id="orgLogo" />
          </div>
          <h4>Admin Info</h4>
          <div className="mb-3">
            <label htmlFor="adminName" className="form-label">
              Admin Name
            </label>
            <input
              type="text"
              className="form-control"
              id="adminName"
              placeholder="Enter admin's full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="designation"
              placeholder="Enter your designation"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter a secure password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Organization Website
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              placeholder="Enter your organization website link"
            />
          </div>
        
          <SubmitButton type="submit">Complete Registration</SubmitButton>
        </form>
      </FormCard>
    </RegisterContainer>
  );
};

export default AdminRegister;
