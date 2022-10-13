const { logInHtml } = require("../templates/log-in.js");
const bcrypt = require("bcryptjs");
const { getUserByUsername } = require("../model/users.js");
const { createCookie, redirectIfLoggedIn, sanitize } = require("../utils");

function get(request, response) {
    redirectIfLoggedIn(request, response, logInHtml)
}

function post(request, response) {
  let { username, password } = request.body;

  let errors = {};
  !username ? (errors.username = "Please add a username") : "";
  !password ? (errors.password = "Please add a password") : "";

  if (Object.keys(errors).length){
    response.status(400)
    return response.send(logInHtml(errors))
  }

  const user = getUserByUsername(sanitize(username));

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
