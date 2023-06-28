import { styled } from "styled-components";

export const ContactCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;

  ul {
    font-weight: 400;
    li {
      margin-bottom: 10px;
      .Link {
        text-decoration: none;
        color: black;
      }
    }
  }
`;
