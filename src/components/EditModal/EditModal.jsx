// EditModal.jsx
import React, { useEffect } from "react";
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
import { useBookContext } from "../../contexts/BookContext";

Modal.setAppElement("#root");

const EditModal = () => {
  const {
    isEditModalOpen,
    selectedBook,
    handleEdit,
    editedBook,
    setEditedBook,
    setSuccessMessage,
    closeEditModal,
    successMessage,
  } = useBookContext();

  useEffect(() => {
    if (selectedBook) {
      setEditedBook(selectedBook);
    }
  }, [selectedBook, setEditedBook]);

  const handleInputChange = (field, value) => {
    setEditedBook({ ...editedBook, [field]: value });
  };

  const handleFormSubmit = async () => {
    await handleEdit(editedBook);
    setSuccessMessage("Changes saved successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      closeEditModal();
    }, 2000);
  };

  return (
    <ModalOverlay isOpen={isEditModalOpen} onRequestClose={closeEditModal}>
      <ModalContainer>
        <ModalHeader>Edit Book</ModalHeader>
        <ModalContent>
          <FormFields book={editedBook} handleInputChange={handleInputChange} />
        </ModalContent>
        <ModalFooter>
          <SubmitButton onClick={handleFormSubmit}>Save Changes</SubmitButton>
          <CloseButton onClick={closeEditModal}>Cancel</CloseButton>
        </ModalFooter>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <ModalCloseButton onClick={closeEditModal}>&times;</ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditModal;
