// imports node modules from npm
const cookieParser = require("cookie-parser");
const express = require("express");
const { getToken, getUser } = require("./auth");
const server = express();
const bcrypt = require("bcryptjs");
const { createUser, getUserByUsername } = require("./model/users");
const { createCookie } = require("./utils");
//To add css file
const staticHandler = express.static("public");

// Import routes from routes folder
const home = require("./routes/home.js");
const logIn = require("./routes/log-in.js");
const signUp = require("./routes/sign-up.js");
const submitQuestion = require("./routes/submit-questions.js");
const searchQuestion = require("./routes/search-questions.js");
const logOut = require("./routes/log-out.js");
const missing = require("./routes/missing-routes.js");

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

// this is the route GitHub redirects users back to after the log in
// there'll be a ?code=xxx search params provided by GH for us to use
// we need to POST this code to GH to get an access_token for talking to their API

server.get("/authenticate", (req, res) => {
  const code = req.query.code;
  getToken(code)
    .then(getUser)
    .then((user) => {
      // Exit function if user exists
      const dbUser = getUserByUsername(user.login);
      if (dbUser) {
        return createCookie(res, dbUser);
        //res.redirect("/submit-questions");
      }

      bcrypt.hash(code, 12).then((hash) => {
        //returns an id for that user
        const newUser = createUser({ username: user.login, hash });
        createCookie(res, newUser);
      });
    });
});

server.use(missing.get);

module.exports = server;
