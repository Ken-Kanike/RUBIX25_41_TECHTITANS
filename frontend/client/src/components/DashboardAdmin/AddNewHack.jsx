import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color:rgb(201, 201, 206);
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  animation: slideDown 0.3s ease-in-out;
  
  @keyframes slideDown {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormLabel = styled.label`
  font-weight:1rem;
  color: #333333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #5c6b73;
  color: #ffffff;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357abd;
  }
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  background-color: #ff6b6b;
  color: #ffffff;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d9534f;
  }
`;

const AddNewHack = ({ show, onClose, formData, handleInputChange, handleSubmit }) => {
    const enhancedSubmit = (e) => {
        console.log(e); // Should log the SyntheticEvent object
        e.preventDefault();
        alert(`Data submitted:\n${JSON.stringify(formData, null, 2)}`);
        handleSubmit(e);
      };
      

  return (
    <Modal show={show}>
      <ModalContent>
        <h3>Add New Hackathon</h3>
        <Form onSubmit={enhancedSubmit}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <FormLabel>Start Date:</FormLabel>
          <FormInput
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
          <FormLabel>End Date:</FormLabel>
          <FormInput
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
          <FormLabel>Mode:</FormLabel>
          <FormInput
            type="text"
            name="mode"
            value={formData.mode}
            onChange={handleInputChange}
          />
          <FormLabel>Type:</FormLabel>
          <FormInput
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
          <FormLabel>Prizes:</FormLabel>
          <FormInput
            type="text"
            name="prizes"
            value={formData.prizes}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default AddNewHack;
