const { logInHtml } = require("../templates/log-in.js");
const bcrypt = require("bcryptjs");
const { createSession, getSession } = require("../model/sessions.js");
const { getUserByUsername } = require("../model/users.js");
const { createCookie, redirectIfLoggedIn } = require("../utils");

function get(request, response) {
    redirectIfLoggedIn(request, response, logInHtml)
}

function post(request, response) {
  const { username, password } = request.body;
  const user = getUserByUsername(username);
  const error = () =>
    response
      .status(400)
      .send(`<h1>Login failed</h1><a href="/log-in">Try login again</a>`);

  if (!user) {
    error();
  } else {
    bcrypt.compare(password, user.hash).then((match) => {
      if (!match) {
        error();
      } else {

        createCookie(response, user)

      }
    });
  }
}

module.exports = { get, post };
