const { SearchQuestions } = require("../templates/search-questions.js")
const { listQuestions, getQuestionByTopic } = require("../model/questions.js")

function get(req, res) {
    const topic = req.query.topic
    const allQuestions = topic ? getQuestionByTopic(topic) : listQuestions()
    res.send(SearchQuestions(allQuestions))
}

function post(req, res) {
    const topic = req.body.topic
    res.redirect(`/search-questions?topic=${topic}`)
}

module.exports = { get, post };


