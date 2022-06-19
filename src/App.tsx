import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultSet from "./pages/ResultSet";
import WordSet from "./pages/WordSet";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WordSet />} />
        <Route path="result" element={<ResultSet />} />
      </Routes>
    </>
  );
}

export default App;
