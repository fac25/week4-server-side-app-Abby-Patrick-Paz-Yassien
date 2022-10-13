const { homeHtml } = require("../templates/home");
const {  redirectIfLoggedIn } = require("../utils");

function get(request, response) {
    redirectIfLoggedIn(request, response, homeHtml);
    //response.send(homeHtml());
}

module.exports = { get };