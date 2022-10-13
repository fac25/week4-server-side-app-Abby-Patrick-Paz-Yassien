const { missingRoutesHtml } = require("../templates/missing-routes");
const {  redirectIfLoggedIn } = require("../utils");

function get(request, response) {
    redirectIfLoggedIn(request, response, missingRoutesHtml);
}

module.exports = { get };