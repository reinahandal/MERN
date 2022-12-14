import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  // const [result, setResult] = useState("");
  // const [resource, setResource] = useState("");
  // const [id, setId] = useState("");

  return (
    <div className="App">
      <Search/>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
