// BooksList.jsx
import React, { useState } from "react";
import {
  ListContainer,
  ListItem,
  EditButton,
  DeleteButton,
} from "./ListStyles";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { useBookContext } from "../../contexts/BookContext";
import EditModal from "../../components/EditModal/EditModal";

const BooksList = () => {
  const { books, handleDelete } = useBookContext();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const handleDeleteBook = (id) => {
    handleDelete(id);
  };

  return (
    <ListContainer>
      {books.map((book) => (
        <ListItem key={book.id}>
          <div>
            <span className="title"> Title: </span>
            {book.title}
          </div>
          <div>
            <span className="title"> Description: </span>
            {book.description}
          </div>
          <div>
            <span className="title"> Author: </span>
            {book.author}
          </div>
          <div>
            <span className="title"> Category: </span>
            {book.category}
          </div>
          <EditButton onClick={() => handleEditBook(book)}>
            <MdOutlineEdit />
          </EditButton>
          <DeleteButton onClick={() => handleDeleteBook(book.id)}>
            <GoTrash />
          </DeleteButton>
        </ListItem>
      ))}
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          selectedBook={selectedBook}
        />
      )}
    </ListContainer>
  );
};

export default BooksList;
