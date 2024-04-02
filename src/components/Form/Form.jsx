import React, { useState } from "react";
import { addBook } from "../../api/api";
import {
  FormContainer,
  InputField,
  SelectField,
  SubmitButton,
  TextArea,
} from "./FormStyles";

const Form = ({ initialValues, onFormSubmit }) => {
  const [book, setBook] = useState(initialValues || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    onFormSubmit();
    setBook({ title: "", description: "", author: "", category: "" });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <TextArea
        type="text"
        placeholder="Description"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
      />
      <InputField
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <SelectField
        value={book.category}
        onChange={(e) => setBook({ ...book, category: e.target.value })}
      >
        <option>Select a Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Humor">Humor</option>
        <option value="Adventure">Adventure</option>
        <option value="Drama">Drama</option>
        <option value="History">History</option>
        <option value="Poetry">Poetry</option>
        <option value="Children's">Children's</option>
        <option value="Romance">Romance</option>
      </SelectField>
      <SubmitButton type="submit">Add Book</SubmitButton>
    </FormContainer>
  );
};

export default Form;
