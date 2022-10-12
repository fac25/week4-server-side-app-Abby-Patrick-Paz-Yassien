const {signUpHtml} = require("../templates/sign-up.js");

function get(request, response) {
  response.send(signUpHtml());
}

module.exports = { get };
