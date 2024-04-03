// FormFields.jsx
import React from "react";
import { InputField, SelectField } from "./FormStyles";

const FormFields = ({ book, handleInputChange }) => {
  return (
    <>
      <label>Title: </label>
      <InputField
        type="text"
        name="title"
        value={book.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
      />
      <label>Description: </label>
      <InputField
        type="text"
        name="description"
        value={book.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />
      <label>Author: </label>
      <InputField
        type="text"
        name="author"
        value={book.author}
        onChange={(e) => handleInputChange("author", e.target.value)}
      />
      <label>Category:</label>
      <SelectField
        name="category"
        value={book.category}
        onChange={(e) => handleInputChange("category", e.target.value)}
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
    </>
  );
};

export default FormFields;
