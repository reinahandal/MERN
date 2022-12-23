import React from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const ChatForm = (props) => {
    const [user, setUser] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        props.setCurrentUser(user);
        console.log(user)
    }
    return (
        <Container maxWidth="sm" component={Paper} sx={{mx:'auto', my:'10%', p:'5%' }} elevation={2}>
            <h1 className="text-center">Get started right now!</h1>
        <form onSubmit={handleSubmit}>
            <p className='my-3 text-center'>I want to start chatting with the name...</p>
            <div style={{display: "flex", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                <TextField id="outlined-basic" label="My name..." size="small" variant="outlined"  value={user} onChange={e=>setUser(e.target.value)}/>
                <Button variant="contained"type="submit" color="success" sx={{ml:'10px'}}>Start Chatting</Button>
            </div>
        </form>
        </Container>
    )
}

export default ChatForm
