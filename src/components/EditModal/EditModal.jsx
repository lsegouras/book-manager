import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  SubmitButton,
  CloseButton,
  SuccessMessage,
} from "./EditModalStyles";
import FormFields from "../Form/FormFields";

Modal.setAppElement("#root");

const EditModal = ({ isOpen, onClose, onEdit, selectedBook }) => {
  const [editedBook, setEditedBook] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setEditedBook(selectedBook);
    }
  }, [selectedBook]);

  const handleInputChange = (field, value) => {
    setEditedBook({ ...editedBook, [field]: value });
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
          <FormFields book={editedBook} handleInputChange={handleInputChange} />
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
