import React from 'react'
import { useState } from 'react'

const ChatForm = (props) => {
    const [user, setUser] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        props.setCurrentUser(user);
        console.log(user)
    }
    return (
        <div>
            <h1>Get started right now!</h1>
        <form onSubmit={handleSubmit}>
            <label>I want to start chatting with the name...</label><br/>
            <input type="text" value={user} onChange={e=>setUser(e.target.value)}></input>
            <input type="submit" value="Start Chatting"></input>
        </form>
        </div>
    )
}

export default ChatForm
