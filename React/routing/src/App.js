import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Number from './components/Number';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Number path="/:bla"/>
        <Colors path="/:word/:txt/:bg"/>
      </Router>
    </div>
  );
}

export default App;
