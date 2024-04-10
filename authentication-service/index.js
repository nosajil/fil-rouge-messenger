const express = require('express');
const mongoose = require('mongoose');
const server = express();

mongoose.connect("mongodb://messengerbdd:27017/demo")

server.use(express.json());

const cors = require('cors');

require('dotenv').config();

server.use(cors());

const routes = require("./routes");

server.listen(3001, () => {
    console.log("Serveur lancé et à l'écoute sur le port 3001");
    
    mongoose.set('strictQuery', false);
    
    const db = mongoose.connection;
    db.once('open', () => console.log("Connexion à la base Messenger !")).on("error", error => console.error("Problème durant la connexion à la base de mongo", error));
});

routes(server);