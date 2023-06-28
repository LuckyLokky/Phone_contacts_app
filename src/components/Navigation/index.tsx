import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { NavigationContainer } from "./style";

const Navigation: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <NavigationContainer>
      <nav>
        <Link className="Link" to="/">
          Contacts
        </Link>
        <button onClick={() => navigate(-1)}>Go back</button>
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;
