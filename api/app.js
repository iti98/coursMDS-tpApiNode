const express = require('express');
const mongoose = require('mongoose');

const postRoute = require("./api/routes/postRoute");
const commentRoute = require("./api/routes/commentRoute");
const userRoute = require("./api/routes/userRoute");

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

mongoose.connect('mongodb://localhost:27017/apinodetp'); // Sans docker
// mongoose.connect('mongodb://mongo/nodeapi'); // Avec docker

server.use(express.urlencoded());
server.use(express.json());

postRoute(server);
commentRoute(server);
userRoute(server);

server.listen(port, hostname);