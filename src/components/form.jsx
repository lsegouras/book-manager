import React, { useState } from "react";
import { addBook, editBook } from "./api";
import { FormContainer, Input, Button } from "./FormStyles";

const Form = ({ bookToEdit, onFormSubmit }) => {
  const [book, setBook] = useState(
    bookToEdit || { title: "", description: "", author: "", category: "" }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bookToEdit) {
      await editBook(bookToEdit.id, book);
    } else {
      await addBook(book);
    }
    onFormSubmit();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Description"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <select
        value={book.category}
        onChange={(e) => setBook({ ...book, category: e.target.value })}
      >
        <option value="Fiction">Fiction</option>
        <option value="Humor">Humor</option>
        <option value="Adventure">Adventure</option>
        <option value="Drama">Drama</option>
        <option value="History">History</option>
        <option value="Poetry">Poetry</option>
        <option value="Children's">Children's</option>
      </select>
      <Button type="submit">{bookToEdit ? "Edit Book" : "Add Book"}</Button>
    </FormContainer>
  );
};

export default Form;
