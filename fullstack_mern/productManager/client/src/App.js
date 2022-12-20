import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from "./views/Update";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Detail/>} path="/:id"/>
        <Route element={<Update/>} path="/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
