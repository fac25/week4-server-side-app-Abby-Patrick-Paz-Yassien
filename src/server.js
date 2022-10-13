// imports node modules from npm
const cookieParser = require("cookie-parser");
const express = require("express");
const server = express();

//To add css file
const staticHandler = express.static("public");

// Import routes from routes folder

const {
  home,
  logIn,
  signUp,
  submitQuestion,
  searchQuestion,
  logOut,
  authenticate,
  missing,
} = require('./routes') //index.js is the default path here so we do not need to write require('./routes/index.js')


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
server.get("/submit-questions", submitQuestion.get);
server.post("/submit-questions", body, submitQuestion.post);
server.get("/search-questions", searchQuestion.get);
server.post("/search-questions", body, searchQuestion.post);
server.post("/log-out", logOut.post);


 server.get("/authenticate", authenticate.get);


server.use(missing.get);

module.exports = server;
