import { Link } from "react-router-dom";
import { styled } from "styled-components";
import React from "react";

const NavigationContainer = styled.nav`
  background-color: tan;
  padding: 30px;
`;
interface Navigation {}
const Navigation: React.FunctionComponent<Navigation> = () => {
  return (
    <NavigationContainer>
      <nav>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;
