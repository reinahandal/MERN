import React, { useState } from 'react'

const AddTask = (props) => {
    const [task, setTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask("");
    }
    return (
        <div className="container mt-4">
        <h1 className='text-center'>To do list</h1>
        <form onSubmit={addTask}>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task} className="form-control mt-4"></input>
            <input type="submit" value="Add" className='btn btn-primary mt-4'></input>
        </form>
        </div>
    )
}

export default AddTask
