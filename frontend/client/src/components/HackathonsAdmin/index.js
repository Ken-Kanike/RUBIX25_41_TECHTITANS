import React from 'react';
import styled from 'styled-components';

// Styled Components
const AdminContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color:rgb(145, 145, 151);
  margin-bottom: 2rem;
`;

const HackathonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const HackathonImage = styled.img`
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(45, 44, 44, 0.1);
  margin-bottom: 1rem;
`;

const HackathonDescription = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 800px;
  text-align: center;
  margin-bottom: 1rem;
`;

const HackathonDates = styled.p`
  font-size: 1.2rem;
  color: #444;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const Progress = styled.div`
  width: ${(props) => props.progress || '50%'};
  background-color: #4caf50;
  color: white;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`;

const TeamsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TeamItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`;

const TeamButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    background-color: #45a049;
  }
`;

const HackathonsAdmin = ({ hackathon }) => {
  const isOngoing = hackathon.tags.some((tag) =>
    tag.toLowerCase().includes('ongoing')
  );

  return (
    <AdminContainer>
      <Header>{hackathon.name}</Header>

      <HackathonDetails>
        <HackathonImage
          src={hackathon.image || 'https://via.placeholder.com/400'}
          alt={`${hackathon.name} banner`}
        />
        <HackathonDescription>{hackathon.description}</HackathonDescription>
        <HackathonDates>
          {hackathon.startDate} - {hackathon.endDate}
        </HackathonDates>
      </HackathonDetails>

      {isOngoing && (
        <>
          <Section>
            <SectionHeader>Hackathon Info</SectionHeader>
            <p>Additional details about the hackathon go here.</p>
          </Section>
          <Section>
            <SectionHeader>Progress</SectionHeader>
            <ProgressBar>
              <Progress progress="75%">75% Completed</Progress>
            </ProgressBar>
          </Section>
          <Section>
            <SectionHeader>Teams</SectionHeader>
            <TeamsList>
              {hackathon.teams.map((team, index) => (
                <TeamItem key={index}>
                  {team.name}
                  <div>
                    <TeamButton>View</TeamButton>
                    <TeamButton>Remove</TeamButton>
                  </div>
                </TeamItem>
              ))}
            </TeamsList>
          </Section>
        </>
      )}
    </AdminContainer>
  );
};

export default HackathonsAdmin;
