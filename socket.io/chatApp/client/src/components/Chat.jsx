import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

const Chat = (props) => {
    const [socket] = useState(()=> io(':8000'));
    const [user, SetUser] = useState(props.currentUser);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=> {
        socket.on("new_msg", allMsgs => {
            setMessages(allMsgs);
        });
        return () => socket.disconnect(true);
    },[socket]);

    const sendMsg = (e) => {
        e.preventDefault();
        socket.emit("send_msg", {txt:message,sender:user});
        setMessage("");
    }
    return (
        <div style={{margin:"0px 5%"}}>
        <h1>Hi, {user}!</h1>
        <div style={{overflowY:"scroll", height:"400px", backgroundColor:"lightgray"}}>
        {messages.map((msg, i)=> <div 
        style={{backgroundColor:"white", 
        padding:"10px", 
        margin:"10px", 
        width:"50%", 
        borderRadius:"20px",
        }}><span style={{color:"red",fontWeight:"bold"}}>{msg.sender}:</span> {msg.txt}</div>)}
        </div>
        <form onSubmit={sendMsg}>
            <input type="text" onChange={e=>setMessage(e.target.value)} value={message}></input>
            <input type="submit" value="Send"></input>
        </form>
        </div>
    )
}

export default Chat
