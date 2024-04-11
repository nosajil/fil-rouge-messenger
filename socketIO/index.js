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

const rooms = {}; // Stocker les messages par room

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room) => {
        socket.join(room);
        // Envoyer les messages précédents de la room
        if (rooms[room]) {
            rooms[room].forEach(message => {
                socket.emit("receive_message", message);
            });
        }
    });

    socket.on("send_message", (data) => {
        // Enregistrer le message
        if (!rooms[data.room]) {
            rooms[data.room] = [];
        }
        rooms[data.room].push(data.message);

        // Transmettre le message aux autres utilisateurs de la room
        socket.to(data.room).emit("receive_message", data.message);
    });
});

server.listen(3003, () => {
    console.log("Socket.io server listening on port 3003 !");
});
