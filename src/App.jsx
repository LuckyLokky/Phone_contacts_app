import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/index.tsx";
import Navigation from "./components/Navigation/index.tsx";
import ContactCard from "./components/ContactCard";
import React from "react";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactCard />} />
      </Routes>
    </Router>
  );
};

export default App;
