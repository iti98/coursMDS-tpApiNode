const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');

const postRoute = require("./src/routes/postRoute");
const commentRoute = require("./src/routes/commentRoute");
const userRoute = require("./src/routes/userRoute");

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

mongoose.connect(process.env.MongoDB + '/apinodetp'); // Sans docker
// mongoose.connect('mongodb://mongo/nodeapi'); // Avec docker

server.use(express.urlencoded());
server.use(express.json());

server.use(cors()); // For dev purpose only

postRoute(server);
commentRoute(server);
userRoute(server);

server.listen(port, hostname);