import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import { useState } from "react";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
