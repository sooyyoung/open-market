import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
