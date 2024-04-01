import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

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
  margin-right: 5px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  margin-right: 5px;
`;
