import React from "react";
import styled from "styled-components";

const SignInPage = styled.div`
  background-color: ${(props) => props.theme.bg}; /* Background from theme */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
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
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

  h3 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 10px;
  }

  p {
    color: ${(props) => props.theme.text_secondary};
  }
`;

const SignIn = () => {
  const handleUserSignIn = () => {
    alert("Redirecting to User Sign-In page...");
    // Add navigation logic to user sign-in page
  };

  const handleAdminSignIn = () => {
    alert("Redirecting to Admin Sign-In page...");
    // Add navigation logic to admin sign-in page
  };

  return (
    <SignInPage>
      <h1>Sign In</h1>
      <p>Select an option to continue:</p>
      <Container>
        <OptionCard onClick={handleUserSignIn}>
          <h3>Sign in as User</h3>
          <p>Participate in hackathons</p>
          <p>Collaborate with developers</p>
          <p>Connect with mentors and mentees.</p>
          <p>Get access to advanced features.</p>
        </OptionCard>
        <OptionCard onClick={handleAdminSignIn}>
          <h3>Sign in as Admin</h3>
          <p>Create Hackathons</p>
          <p>Manage the participants</p>
          <p>Join in as a Mentor</p>
        </OptionCard>
      </Container>
    </SignInPage>
  );
};

export default SignIn;
