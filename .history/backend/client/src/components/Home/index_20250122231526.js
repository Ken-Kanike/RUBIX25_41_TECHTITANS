import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.background || "#f5f5f5"};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || "#333"};
  margin-bottom: 20px;
`;

const DataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const DataItem = styled.div`
  padding: 12px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.card || "#ffffff"};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary || "#555"};
  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 16px;
  }
`;

const Home = () => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/members")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data); 
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) {
    
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Members</Title>
      <DataList>
        {}
        {data.members.map((member, index) => (
          <DataItem key={index}>{member}</DataItem>
        ))}
      </DataList>
    </Container>
  );
};

export default Home;


/*const SignIn = () => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/signin")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data); 
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) {
   
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Members</Title>
      <DataList>
        {}
        {data.members.map((member, index) => (
          <DataItem key={index}>{member}</DataItem>
        ))}
      </DataList>
    </Container>
  );
};

export default SignIn;*/


