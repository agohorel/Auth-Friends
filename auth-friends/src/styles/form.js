import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  padding: 0.5rem;
  min-width: 500px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

  label {
    color: #efefef;
  }

  input {
    border: none;
    background-color: #9c9c9c;
    color: #1c1c1c;
    padding: 0.25rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    border: none;
    background-color: #3c3c3c;
    padding: 0.5rem;
    color: #fff;
    transition: 0.2s ease-out all;

    :hover {
      cursor: pointer;
      background-color: #2c2c2c;
      color: #eee;
    }
  }

  * {
    margin: 0.25rem;
  }
`;
