import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Detail/>} path="/:id"/>
      </Routes>
    </div>
  );
}

export default App;
