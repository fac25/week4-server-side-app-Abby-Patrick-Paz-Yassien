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
const submitQuestion = require('./routes/submit-questions.js')
const searchQuestion = require('./routes/search-questions.js')
const logOut = require('./routes/log-out.js')
const missing = require('./routes/missing-routes.js')


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
server.get("/submit-questions", submitQuestion.get)
server.post("/submit-questions", body, submitQuestion.post)
server.get("/search-questions", searchQuestion.get)
server.post("/search-questions", body, searchQuestion.post)
server.post("/log-out", logOut.post);

server.use(missing.get);


module.exports = server;