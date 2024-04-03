import React, { useState } from "react";
import { addBook } from "../../api/api";
import { FormContainer, SubmitButton } from "./FormStyles";
import FormFields from "./FormFields";

const Form = ({ initialValues, onFormSubmit }) => {
  const [book, setBook] = useState(initialValues || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    onFormSubmit();
    setBook({ title: "", description: "", author: "", category: "" });
  };

  const handleInputChange = (field, value) => {
    setBook({ ...book, [field]: value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormFields book={book} handleInputChange={handleInputChange} />
      <SubmitButton type="submit">Add Book</SubmitButton>
    </FormContainer>
  );
};

export default Form;
