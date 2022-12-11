import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);
  
  const addBox = (color,width,height) => {
    setCurrentBoxes([...currentBoxes,[color,width,height]]);
  }
  return (
      <>
          <BoxForm myFun={addBox}/>
          <DisplayBoxes boxes={currentBoxes}/>
      </>
  );
}

export default App;
