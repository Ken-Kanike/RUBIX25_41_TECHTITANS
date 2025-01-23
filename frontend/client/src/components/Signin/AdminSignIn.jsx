import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "../../colors"; // Import color scheme


const SignInContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bg || "#f8f9fa"};
`;

const Card = styled.div`
  background: ${(props) => props.theme.card || "#ffffff"};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
  
  &:hover {
    transform: translateY(-10px); /* Lift the card on hover */
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }

  h2 {
    color: ${(props) => props.theme.primary || "#007bff"};
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.8rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colors.primaryHover || "#0056b3"}; /* Hover color change */
    }
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.link || "#007bff"};
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: none;
    color: ${colors.primaryHover || "#0056b3"}; /* Change color on hover */
  }
`;

const Button = styled.button`
  background-color: ${colors.primary || "#007bff"};
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Button lift effect */
    background-color: ${colors.primaryHover || "#0056b3"}; /* Button color change on hover */
  }
`;


const AdminSignIn = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin Signed in successfully!");
    navigate("/admin-dashboard"); // Navigate to the admin dashboard
  };

  const redirectToRegister = () => {
    navigate("/admin-register"); // Navigate to User Register route
  };

  return (
    <SignInContainer>
    <Card className="card">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button type="submit" className="w-100">
          Log In
        </Button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account?{" "}
        <StyledLink onClick={redirectToRegister}>Sign up here</StyledLink>
      </p>
    </Card>
  </SignInContainer>
  );
};

export default AdminSignIn;
