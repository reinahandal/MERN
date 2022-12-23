import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Chat = (props) => {
    const [socket] = useState(()=> io(':8000'));
    const [user, SetUser] = useState(props.currentUser);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

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

    const chatStyle = {
        marginLeft: 'auto',
        
    }
    return (
        <div style={{margin:"5%"}}>
        <h1 className='mb-4'>Hi, {user}!</h1>
        <div style={{overflowY:"scroll", height:"400px", backgroundColor:"#f2f3f4", position:"relative"}}>
        {messages.map((msg, i)=> <div 
        style={{backgroundColor:"white", 
        padding:"10px", 
        width:"50%", 
        borderRadius:"20px",
        margin:"10px 0",
        marginLeft: msg.sender===user ? 'auto':'10px',
        marginRight: msg.sender===user ? '10px':''
        }}
        ><span className='text-primary font-weight-bold'>{msg.sender===user ? "You": msg.sender}</span>: {msg.txt}</div>)}
        <div ref={bottomRef} />
        </div>
        <form className='mt-3' onSubmit={sendMsg}>
            <TextField id="outlined-basic" variant="outlined" size="small" sx={{width:'85%'}} onChange={e=>setMessage(e.target.value)} value={message}/>
            <Button variant="contained" type="submit"sx={{ml:'10px'}}>Send</Button>
        </form>
        </div>
    )
}

export default Chat
