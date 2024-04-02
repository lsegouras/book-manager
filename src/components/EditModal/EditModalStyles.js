import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;

  & > label {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  & > option {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  width: 8rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 8rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;

  &:hover {
    background-color: #c82333;
  }
`;

export const SuccessMessage = styled.div`
  color: #28a745;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
