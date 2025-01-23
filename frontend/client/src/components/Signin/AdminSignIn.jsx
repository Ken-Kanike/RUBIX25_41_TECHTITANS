import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

const SignInContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg || "#f8f9fa"};
`;

const Card = styled.div`
  background: ${(props) => props.theme.card || "#ffffff"};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 400px;

  h2 {
    color: ${(props) => props.theme.primary || "#007bff"};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.link || "#007bff"};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
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
      <Card>
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
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
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
