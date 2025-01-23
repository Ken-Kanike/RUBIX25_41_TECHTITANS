import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardAdmin.css";

// Define the colors directly at the top of the file
const bg = "#F5F5F5"; // Light background color
const primary = "#4A90E2"; // Strong primary color for headers, buttons
const primaryHover = "#357ABD"; // Darker shade for hover
const white = "#FFFFFF"; // White color
const card = "#FFFFFF"; // White card background
const text_primary = "#333333"; // Dark text for primary content
const text_secondary = "#555555"; // Slightly lighter text for secondary content

// Styled Components for different sections
const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${bg};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${primary};
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
  color: ${text_primary};
`;

const HackathonButton = styled.button`
  background-color: ${primary};
  color: ${white};
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
    background-color: ${primaryHover};
  }
`;

// New card style based on the second code snippet
const HackathonCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const HackathonCard = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: ${primary};
  background-color: ${primary + "15"};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  color: ${text_secondary + "80"};
`;

const Description = styled.div`
  font-weight: 400;
  color: ${text_secondary + "99"};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DashboardAdmin = () => {
  // Mock data for hackathons
  const previousHackathons = [
    {
      id: 1,
      name: "Hackathon 1",
      description: "Description for Hackathon 1",
      image: "https://via.placeholder.com/300x180",
      tags: ["AI", "ML", "Blockchain"],
    },
    {
      id: 2,
      name: "Hackathon 2",
      description: "Description for Hackathon 2",
      image: "https://via.placeholder.com/300x180",
      tags: ["Web", "React", "JavaScript"],
    },
  ];

  const ongoingHackathons = [
    {
      id: 1,
      name: "Ongoing Hackathon 1",
      description: "Ongoing event details.",
      image: "https://via.placeholder.com/300x180",
      tags: ["Python", "Data Science"],
    },
  ];

  return (
    <DashboardContainer>
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
      <Header>Admin Panel</Header>

      {/* Button to Add New Hackathon */}
      <HackathonButton>Add New Hackathon</HackathonButton>

      {/* Section for Previous Hackathons */}
      <h3>Previous Hackathons</h3>
      <HackathonCardContainer>
        {previousHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id}>
            <Image src={hackathon.image} />
            <Tags>
              {hackathon.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <Title>{hackathon.name}</Title>
            <Date>2025-01-23</Date> {/* You can add the actual date */}
            <Description>{hackathon.description}</Description>
          </HackathonCard>
        ))}
      </HackathonCardContainer>

      {/* Section for Ongoing Hackathons */}
      <h3>Ongoing Hackathons</h3>
      <HackathonCardContainer>
        {ongoingHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id}>
            <Image src={hackathon.image} />
            <Tags>
              {hackathon.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <Title>{hackathon.name}</Title>
            <Date>2025-01-23</Date> {/* You can add the actual date */}
            <Description>{hackathon.description}</Description>
          </HackathonCard>
        ))}
      </HackathonCardContainer>
    </DashboardContainer>
  );
};

export default DashboardAdmin;
