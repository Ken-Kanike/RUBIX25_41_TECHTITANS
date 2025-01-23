import React, { useState } from "react";
import "./signin.css";  // Import the CSS file for animations
import UserSignIn from "./UserSignIn";
import AdminSignIn from "./AdminSignIn";
import styled from "styled-components";
import { colors } from "../../colors";

// Styled Components for Layout and Color
const SignInPage = styled.div`
  background-color: ${colors.bg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;


const SignInContainer = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  background-color: ${colors.card};
  
  /* Adding shadow */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  
  /* Adding animation */
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.h2`
  color: ${colors.primary};
  font-size: 2.2rem;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
`;

  const OptionCard = styled.div`
    background-color: ${colors.card_light};
    color: ${colors.text_primary};
    border-radius: 10px;
    padding: 30px;
    width: 220px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      background-color: ${colors.primaryHover};
      transform: scale(1.05);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
    }
  `;

const SignIn = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderContent = () => {
    if (selectedOption === "user") {
      return <UserSignIn />;
    } else if (selectedOption === "admin") {
      return <AdminSignIn />;
    }
    return (
      <SignInContainer>
        <Header>Welcome, Please Sign In</Header>
        <Container>
          <OptionCard onClick={() => setSelectedOption("user")}>
            <h3>Sign in as User</h3>
            <p>Join hackathons and connect with mentors.</p>
          </OptionCard>
          <OptionCard onClick={() => setSelectedOption("admin")}>
            <h3>Sign in as Admin</h3>
            <p>Manage participants and create hackathons.</p>
          </OptionCard>
        </Container>
      </SignInContainer>
    );
  };

  return <SignInPage>{renderContent()}</SignInPage>;
};

export default SignIn;




// // SignIn.jsx
// import React, { useState } from "react";
// import styled from "styled-components";
// import UserSignIn from "./UserSignIn"; // Import your JSX component
// import AdminSignIn from "./AdminSignIn";

// const SignInPage = styled.div`
//   background-color: ${(props) => props.theme.bg};
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Container = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   margin-top: 50px;
// `;

// const OptionCard = styled.div`
//   background-color: ${(props) => props.theme.card};
//   border: 1px solid ${(props) => props.theme.primary};
//   border-radius: 8px;
//   padding: 20px;
//   text-align: center;
//   cursor: pointer;
//   transition: transform 0.2s, box-shadow 0.2s;
//   width: 300px;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const SignIn = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const renderContent = () => {
//     if (selectedOption === "user") {
//       return <UserSignIn />;
//     } else if (selectedOption === "admin") {
//       return <AdminSignIn/>; // Add admin component if needed
//     }
//     return (
//       <Container>
//         <OptionCard onClick={() => setSelectedOption("user")}>
//           <h3>Sign in as User</h3>
//           <p>Participate in hackathons and connect with mentors.</p>
//         </OptionCard>
//         <OptionCard onClick={() => setSelectedOption("admin")}>
//           <h3>Sign in as Admin</h3>
//           <p>Manage participants and create hackathons.</p>
//         </OptionCard>
//       </Container>
//     );
//   };

//   return <SignInPage>{renderContent()}</SignInPage>;
// };

// export default SignIn;
