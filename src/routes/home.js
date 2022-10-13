const { homeHtml } = require("../templates/home");
const dotenv = require("dotenv");
dotenv.config();

function get(request, response) {
  const client_id = process.env.client_id;
  const login_url = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

  response.send(homeHtml(login_url));
}

module.exports = { get };
