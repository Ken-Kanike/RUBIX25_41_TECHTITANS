// src/components/DashboardAdmin/index.js
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardAdmin.css";

// Import themes
import { lightTheme } from "../../themes/colors"; // Use lightTheme instead of darkTheme

// Styled Components for different sections
const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 2rem;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  text-align: left;
`;

const LogoContainer = styled.div`
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  img {
    max-width: 150px;
    display: block;
  }
`;

const InfoContainer = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.text_primary};
`;

const HackathonButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || theme.primary};
  }
`;

const HackathonCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const HackathonCard = styled.div`
  width: 300px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  .card-title {
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .card-body {
    color: ${({ theme }) => theme.text_secondary};
    font-size: 1rem;
  }
`;

const DashboardAdmin = () => {
  // Mock data for hackathons
  const previousHackathons = [
    { id: 1, name: "Hackathon 1", description: "Description for Hackathon 1" },
    { id: 2, name: "Hackathon 2", description: "Description for Hackathon 2" },
  ];

  const ongoingHackathons = [
    { id: 1, name: "Ongoing Hackathon 1", description: "Ongoing event details." },
  ];

  return (
    <DashboardContainer theme={lightTheme}> {/* Use lightTheme here */}
      {/* Organization Logo and Info Section */}
      <InfoSection>
        <LogoContainer>
          <img
            src="https://th.bing.com/th/id/OIP.AZ_312VPx1ZKGD876tmBAgHaFn?rs=1&pid=ImgDetMain"
            alt="Organization Logo"
          />
        </LogoContainer>
        <InfoContainer>
          <h3>Welcome to the Admin Dashboard</h3>
          <p>
            Here, you can manage and oversee all the hackathons organized by
            your team. Create new hackathons, view ongoing events, and track
            past hackathons.
          </p>
        </InfoContainer>
      </InfoSection>

      {/* Admin Panel Header */}
      <Header theme={lightTheme}>Admin Panel</Header> {/* Use lightTheme here */}

      {/* Button to Add New Hackathon */}
      <HackathonButton theme={lightTheme}>Add New Hackathon</HackathonButton> {/* Use lightTheme here */}

      {/* Section for Previous Hackathons */}
      <h3>Previous Hackathons</h3>
      <HackathonCardContainer>
        {previousHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} theme={lightTheme}> {/* Use lightTheme here */}
            <h4 className="card-title">{hackathon.name}</h4>
            <div className="card-body">
              <p>{hackathon.description}</p>
            </div>
          </HackathonCard>
        ))}
      </HackathonCardContainer>

      {/* Section for Ongoing Hackathons */}
      <h3>Ongoing Hackathons</h3>
      <HackathonCardContainer>
        {ongoingHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} theme={lightTheme}> {/* Use lightTheme here */}
            <h4 className="card-title">{hackathon.name}</h4>
            <div className="card-body">
              <p>{hackathon.description}</p>
            </div>
          </HackathonCard>
        ))}
      </HackathonCardContainer>
    </DashboardContainer>
  );
};

export default DashboardAdmin;
