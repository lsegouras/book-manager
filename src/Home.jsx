import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  ListContainer,
  ListItem,
  EditButton,
  DeleteButton,
} from "./HomeStyles.js";
import Form from "./Form.jsx";
import { getAllBooks, deleteBook, editBook } from "./api";
import EditModal from "./EditModal.jsx";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllBooks();
      setBooks(response.data);
    };
    fetchData();
  }, []);

  const handleEdit = async (updatedBook) => {
    await editBook(updatedBook.id, updatedBook);
    handleFormSubmit();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    const response = await getAllBooks();
    setBooks(response.data);
  };

  return (
    <Container className="Home">
      <Title>Book Manager</Title>
      <Form onFormSubmit={handleFormSubmit} />
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
            <EditButton
              onClick={() => {
                setIsEditModalOpen(true);
                setSelectedBook(book);
              }}
            >
              <MdOutlineEdit />
            </EditButton>
            <DeleteButton onClick={() => handleDelete(book.id)}>
              <GoTrash />
            </DeleteButton>
          </ListItem>
        ))}
      </ListContainer>
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={handleEdit}
        book={selectedBook || {}}
      />
    </Container>
  );
};

export default Home;
