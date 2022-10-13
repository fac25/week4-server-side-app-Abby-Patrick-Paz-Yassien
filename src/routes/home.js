const { redirectIfLoggedIn } = require("../utils");
const { homeHtml } = require("../templates/home.js");
const dotenv = require("dotenv");

function get(request, response) {
  const client_id = process.env.client_id;
  const login_url = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
  redirectIfLoggedIn(request, response, () => homeHtml(login_url));
}

module.exports = { get };
