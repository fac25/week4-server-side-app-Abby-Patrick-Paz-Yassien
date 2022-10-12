// imports node modules from npm
const cookieParser = require("cookie-parser");
const express = require("express");

const server = express();

//To add css file
const staticHandler = express.static("public");

// Import routes from routes folder
const home = require("./routes/home.js");
const logIn = require('./routes/log-in.js')
const signUp = require('./routes/sign-up.js')

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

//middlewear
server.use(cookies);
server.use(staticHandler);

server.get("/", home.get);
server.get("/log-in", logIn.get);
server.post("/log-in", body, logIn.post);
server.get("/sign-up", signUp.get);
server.post("/sign-up", body, signUp.post);

module.exports = server;