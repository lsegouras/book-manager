// BookContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getAllBooks,
  deleteBook,
  editBook,
  addBook as apiBook,
} from "../api/api";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editedBook, setEditedBook] = useState("");
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
  });

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
    closeEditModal();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    const response = await getAllBooks();
    setBooks(response.data);
  };

  const handleAddBook = async (book) => {
    const response = await apiBook(book);
    handleFormSubmit();
    return response;
  };

  const openEditModal = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedBook(null);
    setIsEditModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddBook(book);
    setBook({ title: "", description: "", author: "", category: "" });
  };

  const handleInputChange = (field, value) => {
    setBook({ ...book, [field]: value });
  };

  return (
    <BookContext.Provider
      value={{
        books,
        selectedBook,
        setSelectedBook,
        handleEdit,
        handleDelete,
        handleFormSubmit,
        handleAddBook,
        openEditModal,
        closeEditModal,
        isEditModalOpen,
        setIsEditModalOpen,
        successMessage,
        setSuccessMessage,
        editedBook,
        setEditedBook,
        book,
        setBook,
        handleSubmit,
        handleInputChange,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
