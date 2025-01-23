// SignIn.jsx
import React, { useState } from "react";
import styled from "styled-components";
import UserSignIn from "./UserSignIn"; // Import your JSX component

const SignInPage = styled.div`
  background-color: ${(props) => props.theme.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
`;

const OptionCard = styled.div`
  background-color: ${(props) => props.theme.card};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 300px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const SignIn = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderContent = () => {
    if (selectedOption === "user") {
      return <UserSignIn />;
    } else if (selectedOption === "admin") {
      return <h2>Admin Sign-In Page</h2>; // Add admin component if needed
    }
    return (
      <Container>
        <OptionCard onClick={() => setSelectedOption("user")}>
          <h3>Sign in as User</h3>
          <p>Participate in hackathons and connect with mentors.</p>
        </OptionCard>
        <OptionCard onClick={() => setSelectedOption("admin")}>
          <h3>Sign in as Admin</h3>
          <p>Manage participants and create hackathons.</p>
        </OptionCard>
      </Container>
    );
  };

  return <SignInPage>{renderContent()}</SignInPage>;
};

export default SignIn;
