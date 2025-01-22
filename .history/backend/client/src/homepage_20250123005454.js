import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "./colors";

const HomePageContainer = styled.div`
  background-color: ${(props) => props.theme.homepageBackground};
  color: ${(props) => props.theme.text_primary};
  padding: 20px;
  min-height: 100vh;
`;

const FeatureBox = styled.div`
  background-color: ${(props) => props.theme.featureBoxBg};
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.featureBoxHover};
  }
`;

const HomePage = ({ theme }) => {
  return (
    <HomePageContainer theme={theme}>
      <h1>Virtual Hackathon Platform</h1>
      <p>Enhancing collaboration and innovation with seamless features.</p>
      <div>
        <FeatureBox theme={theme}>
          <h2>Smart Team Formation</h2>
          <p>Find compatible teammates based on skills and interests effortlessly.</p>
        </FeatureBox>
        {/* Add more feature boxes here */}
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
