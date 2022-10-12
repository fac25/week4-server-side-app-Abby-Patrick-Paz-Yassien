const { SubmitQuestion } = require("../templates/submit-questions.js")

function get(req, res) {
    console.log(SubmitQuestion())
    res.send(SubmitQuestion())
}


module.exports = { get };