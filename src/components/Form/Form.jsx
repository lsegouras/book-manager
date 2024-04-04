import React from "react";
import { FormContainer, SubmitButton } from "./FormStyles";
import FormFields from "./FormFields";
import { useBookContext } from "../../contexts/BookContext";

const Form = () => {
  const { book, handleSubmit, handleInputChange } = useBookContext();

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormFields book={book} handleInputChange={handleInputChange} />
      <SubmitButton type="submit">Add Book</SubmitButton>
    </FormContainer>
  );
};

export default Form;
