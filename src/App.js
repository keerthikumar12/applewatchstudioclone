import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CustomizationPage from "./pages/CustomizationPage";
import GlobalStyles from "../styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customize" element={<CustomizationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
