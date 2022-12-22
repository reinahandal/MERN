import React, { useState } from 'react'
import Chat from '../components/Chat';
import ChatForm from '../components/ChatForm';

const Main = () => {
    const [user, setUser] = useState();

    return (
        <div>
        {!user ? 
        <ChatForm setCurrentUser={setUser}/> :
        <Chat currentUser={user}/>
        }
        </div>
    )
}

export default Main
