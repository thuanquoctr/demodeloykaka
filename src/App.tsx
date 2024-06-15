import React, { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { HeaderPage } from "./pages/HeaderPage";
import { FooterPage } from "./pages/FooterPage";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
