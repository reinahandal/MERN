const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

const allMessages = [];

io.on("connection", socket => {
    io.emit("new_msg",allMessages);
    console.log(socket.id);
    socket.on("send_msg", data => {
        allMessages.push(data);
        io.emit("new_msg", allMessages);
    })
});


// io.emit emits an event to all connected clients
// socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
// socket.emit emits an event directly to this specific client