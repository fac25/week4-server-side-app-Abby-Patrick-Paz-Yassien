const { logInHtml } = require("../templates/log-in.js");

function get(request, response) {
  response.send(logInHtml());
}

module.exports = { get };
