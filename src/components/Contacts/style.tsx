import { styled } from "styled-components";

export const ContactsContainer = styled.table`
  margin: auto;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 5px;

  thead {
    color: #210aee;
    font-size: large;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }
  tbody {
    font-size: larger;
    font-weight: 300;
    font-family: Arial, Helvetica, sans-serif;

    .Link {
      text-decoration: none;
      color: black;
    }
  }
`;
