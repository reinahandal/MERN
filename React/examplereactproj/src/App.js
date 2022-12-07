import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Reina" lastName="Handal" age={25} hairColor="Pink"></PersonCard>
      <PersonCard firstName="Wednesday" lastName="Addams" age={19} hairColor="Blue Black"></PersonCard>
    </div>
  );
}

export default App;
