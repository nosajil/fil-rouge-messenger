const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room) => {
        socket.join(room);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    })
})

server.listen(3003, () => {
    console.log("Socket.io server listening on port 3003 !");
})