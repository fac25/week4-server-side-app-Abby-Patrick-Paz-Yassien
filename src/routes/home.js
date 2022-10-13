const {  redirectIfLoggedIn } = require("../utils");
const { homeHtml } = require("../templates/home.js");

function get(request, response) {
    redirectIfLoggedIn(request, response, homeHtml);
}

module.exports = { get };