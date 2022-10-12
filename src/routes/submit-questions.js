const { QuestionForm } = require("../templates/submit-questions.js")
const { addQuestions, getUserQuestions } = require("../model/questions.js")
const { getSession } = require("../model/sessions.js")

function get(req, res) {
    const sid = req.signedCookies?.sid
    const session = getSession(sid)
    const user_id = session?.user_id
    const questionsArr = getUserQuestions(user_id)
    res.send(QuestionForm(questionsArr))
}

function post(req, res) {
    const sid = req.signedCookies?.sid
    const session = getSession(sid)
    const user_id = session?.user_id

    let { topic, question } = req.body;
    addQuestions(topic, question, user_id)
    res.redirect(`/submit-questions`);
}


module.exports = { get, post };