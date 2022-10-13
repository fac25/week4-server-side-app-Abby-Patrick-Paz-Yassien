const { signUpHtml } = require("../templates/sign-up.js");
const { createUser, getUserByUsername } = require("../model/users");
const { redirectIfLoggedIn,sanitize } = require("../utils");

const { createCookie } = require('../utils')
const bcrypt = require("bcryptjs");

function get(request, response) {
  redirectIfLoggedIn(request, response, signUpHtml)
}

function post(request, response) {
  let { username, password } = request.body;

  let errors = {};
  if (!username) {
    errors.username = "Please add a username";
  }
  if (!password) {
    errors.password = "Please add a password";
  }

  if (Object.keys(errors).length){
    response.status(400)
    return response.send(signUpHtml(errors))
  }

  username = sanitize(username);
  let user = getUserByUsername(username);
  if (user) {
    response
      .status(400)
      .send(`<h1>User already exists</h1><a href="/sign-up">Sign Up</a>`);
  } else {
    bcrypt.hash(password, 12).then((hash) => {
      //returns an id for that user
      const newUser = createUser({ username, hash });
      createCookie(response, newUser)
    });
  }
}

module.exports = { get, post }