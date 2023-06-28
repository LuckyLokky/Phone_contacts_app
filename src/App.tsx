import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/index";
import Navigation from "./components/Navigation/index";
import ContactCard from "./components/ContactCard/index";
import React from "react";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/:id" element={<ContactCard />} />
      </Routes>
    </Router>
  );
};

export default App;
