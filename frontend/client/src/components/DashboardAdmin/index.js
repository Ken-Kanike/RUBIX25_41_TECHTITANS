import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardAdmin.css";

// Define the colors directly at the top of the file
const bg = "#9dbebb"; 
const primary = "#5c6b73"; // Primary color "#4A90E2"; 
const primaryHover = "#357ABD"; 
const white = "#FFFFFF";
const card = "rgba(0, 0, 0, 0.8)"; 
const text_primary = "#ffffff"; 
const text_secondary = "#f7f7ff"; 
const text_secondary_2 = "#e0fbfc"; 


// Styled Components for different sections
const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${bg};
  margin: 0 auto;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${text_primary};
  margin-top: 2rem;
  font-family: 'Montserrat', sans-serif; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Increased shadow for more drama */
  letter-spacing: 2px; 
  text-transform: uppercase; 
  margin-bottom: 1.5rem; /* Add some space below the header */
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  max-width: 1000px; 
  margin-top: 2rem;
  gap: 2rem;
  text-align: left; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  margin: 0 auto; /* Center the entire InfoSection horizontally */
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
  text-align: center;
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
  color: ${text_secondary_2};
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
      id: 4,
      name: "AI for Healthcare",
      description: "A hackathon to create innovative applications of AI in healthcare.",
      image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7KU227IYG4GXLJUJ55Y3AQTSP4.jpg&w=916",
      tags: [
        "Start date: 2023-03-03",
        "End date: 2023-03-05",
        "Duration: 72 hours",
        "Mode: Hybrid (online - offline)",
      ],
    },
    {
      id: 5,
      name: "SpaceX Design Challenge",
      description: "Design and develop innovative solutions for space exploration and colonization.",
      image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7KU227IYG4GXLJUJ55Y3AQTSP4.jpg&w=916",
      tags: [
        "Start date: 2023-04-15",
        "End date: 2023-04-17",
        "Duration: 48 hours",
        "Mode: Online",
      ],
    },
  ];

  const ongoingHackathons = [
    {
      id: 3,
      name: "Hack the Climate",
      description: "A hackathon focused on developing solutions for climate change challenges.",
      image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7KU227IYG4GXLJUJ55Y3AQTSP4.jpg&w=916",
      tags: [
        "Start date: 2023-02-10",
        "End date: 2023-02-12",
        "Duration: 48 hours",
        "Mode: Offline",
      ],
    },
  ];

  return (
    <DashboardContainer>
      {/* Organization Logo and Info Section */}
      
      {/* Admin Panel Header */}
      <Header>Admin Panel</Header>
      <InfoSection>
        <LogoContainer>
          <img
            src="/org.png"
            alt="Organization Logo"
          />
        </LogoContainer>
        
        <InfoContainer>
          <p>
            Here, you can manage and oversee all the hackathons organized by
            your team. Create new hackathons, view ongoing events, and track
            past hackathons.
          </p>
        </InfoContainer>
      </InfoSection>


      {/* Button to Add New Hackathon */}
      <HackathonButton>Add New Hackathon</HackathonButton>

  
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

    </DashboardContainer>
  );
};

export default DashboardAdmin;
