// Home.jsx
import React, { useState, useEffect } from "react";
import { Container, Title } from "./HomeStyles.js";
import Form from "../../components/Form/Form.jsx";
import { getAllBooks, deleteBook, editBook } from "../../api/api.js";
import EditModal from "../../components/EditModal/EditModal.jsx";
import BookList from "../../components/ListContainer/BooksList.jsx";

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
      <BookList
        books={books}
        onEdit={(book) => {
          setIsEditModalOpen(true);
          setSelectedBook(book);
        }}
        onDelete={handleDelete}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={handleEdit}
        selectedBook={selectedBook}
      />
    </Container>
  );
};

export default Home;
