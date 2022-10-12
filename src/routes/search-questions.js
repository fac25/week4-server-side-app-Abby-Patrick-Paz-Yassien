const { SearchQuestions } = require("../templates/search-questions.js")
const { listQuestions } = require("../model/questions.js")

function get(req, res) {
    const allQuestions = listQuestions()
    res.send(SearchQuestions(allQuestions))
}


module.exports = { get };