import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout-items/Navbar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
