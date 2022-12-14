import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ShowTasks from './components/ShowTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([...tasks,{name:newTask, isCompleted:false}]);
  }

  const deleteTask = deletedItem => {
    setTasks(tasks.filter((item) => item!==deletedItem));
  }

  const updateTask = updatedItem => {
    const newList = tasks.map((obj,i) => {
      if(obj===updatedItem) {
        return {...obj, isCompleted: !obj.isCompleted};
      }
      return obj;
    });
    setTasks(newList);
  }

  return (
    <>
      <AddTask addTask={addNewTask}/>
      <ShowTasks allTasks={tasks} checkItem={updateTask} deleteItem={deleteTask}/>
    </>
  );
}

export default App;
