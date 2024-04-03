import React from "react";
import {
  ListContainer,
  ListItem,
  EditButton,
  DeleteButton,
} from "./ListStyles";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

const BookList = ({ books, onEdit, onDelete }) => {
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
          <EditButton onClick={() => onEdit(book)}>
            <MdOutlineEdit />
          </EditButton>
          <DeleteButton onClick={() => onDelete(book.id)}>
            <GoTrash />
          </DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default BookList;
