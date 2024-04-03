import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;

  > div {
    margin-bottom: 5px;
  }

  .title {
    font-weight: bold;
  }

  .description,
  .author,
  .category {
    margin-left: 10px;
  }
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  margin: 10px 10px 0 10px;
  border: none;
  padding: 5px;
  font-size: 1rem;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  margin: 10px 10px 0 10px;
  border: none;
  padding: 5px;
  font-size: 1rem;
  border-radius: 4px;
`;
