import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddAuthor from "./views/AddAuthor";
import EditAuthor from "./views/EditAuthor";
import Main from "./views/Main";

function App() {
  return (
    <Routes>
      <Route element={<Main/>} path="/"/>
      <Route element={<AddAuthor/>} path="/new"/>
      <Route element={<EditAuthor/>} path="/edit/:id"/>
    </Routes>
  );
}

export default App;
