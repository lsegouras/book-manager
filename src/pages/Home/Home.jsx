// Home.jsx
import React from "react";
import { Container, Title } from "./HomeStyles.js";
import Form from "../../components/Form/Form.jsx";
import EditModal from "../../components/EditModal/EditModal.jsx";
import { BookProvider } from "../../contexts/BookContext";
import BooksList from "../../components/ListContainer/BooksList.jsx";

const Home = () => {
  return (
    <Container className="Home">
      <Title>Book Manager</Title>
      <BookProvider>
        <Form />
        <BooksList />
        <EditModal />
      </BookProvider>
    </Container>
  );
};

export default Home;
