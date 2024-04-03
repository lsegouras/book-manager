import React, { useState } from "react";
import { FormContainer, SubmitButton } from "./FormStyles";
import FormFields from "./FormFields";
import { useBookContext } from "../../contexts/BookContext";

const Form = () => {
  const { handleAddBook } = useBookContext();
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddBook(book);
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
