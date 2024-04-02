import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.7 rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.7 rem;
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
  font-size: 0.7 rem;
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
  display: block;
  width: 30%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
