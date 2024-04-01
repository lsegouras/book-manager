import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EditModal = ({ isOpen, onClose, onEdit, book }) => {
  const initialValues = book
    ? {
        title: book.title,
        description: book.description,
        author: book.author,
        category: book.category,
      }
    : {
        title: "",
        description: "",
        author: "",
        category: "",
      };

  const [editedBook, setEditedBook] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleFormSubmit = async () => {
    await onEdit({ ...editedBook, id: book.id });
    setSuccessMessage("Changes saved successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      onClose();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Edit Book</h2>
      <div>{successMessage}</div>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={editedBook.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Author: </label>
        <input
          type="text"
          name="author"
          value={editedBook.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={editedBook.category}
          onChange={handleInputChange}
        >
          <option value="">Select a Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Humor">Humor</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
          <option value="History">History</option>
          <option value="Poetry">Poetry</option>
          <option value="Children's">Children's</option>
        </select>
      </div>
      <div>
        <button onClick={handleFormSubmit}>Save Changes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default EditModal;
