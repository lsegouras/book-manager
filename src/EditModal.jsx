import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  InputField,
  SelectField,
  SubmitButton,
  CloseButton,
  SuccessMessage,
} from "./EditModalStyles";

Modal.setAppElement("#root");

const EditModal = ({ isOpen, onClose, onEdit, selectedBook }) => {
  const [editedBook, setEditedBook] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setEditedBook(selectedBook);
    }
  }, [selectedBook]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleFormSubmit = async () => {
    const updatedBook = {
      ...editedBook,
      id: selectedBook.id,
    };
    await onEdit(updatedBook);
    setSuccessMessage("Changes saved successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      onClose();
    }, 2000);
  };

  return (
    <ModalOverlay isOpen={isOpen} onRequestClose={onClose}>
      <ModalContainer>
        <ModalHeader>Edit Book</ModalHeader>
        <ModalContent>
          <label>Title: </label>
          <InputField
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleInputChange}
          />
        </ModalContent>
        <ModalContent>
          <label>Description: </label>
          <InputField
            type="text"
            name="description"
            value={editedBook.description}
            onChange={handleInputChange}
          />
        </ModalContent>
        <ModalContent>
          <label>Author: </label>
          <InputField
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleInputChange}
          />
        </ModalContent>
        <ModalContent>
          <label>Category:</label>
          <SelectField
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
            <option value="Romance">Romance</option>
          </SelectField>
        </ModalContent>
        <ModalFooter>
          <SubmitButton onClick={handleFormSubmit}>Save Changes</SubmitButton>
          <CloseButton onClick={onClose}>Cancel</CloseButton>
        </ModalFooter>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditModal;
