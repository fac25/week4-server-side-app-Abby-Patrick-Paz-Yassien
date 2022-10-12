const { homeHtml } = require("../templates/home");

function get(request, response) {
  response.send(homeHtml());
}

module.exports = { get };
