const { SubmitQuestion } = require("../templates/submit-questions.js")
const { addQuestions } = require("../model/questions.js")

function get(req, res) {
    res.send(SubmitQuestion())
}

function post(req, res) {
    let { topic, question } = req.body;
    addQuestions(topic, question)
    res.redirect(`/submit-questions`);
}


module.exports = { get, post };