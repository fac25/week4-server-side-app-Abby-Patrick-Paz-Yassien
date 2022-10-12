const { SubmitQuestion } = require("../templates/submit-questions.js")
const { addQuestions } = require("../model/questions.js")
const { getUserByID } = require("../model/users.js")
const {sanitize} = require('../utils')
const {getSession} = require('../model/sessions')

function get(req, res) {
    res.send(SubmitQuestion())
}

function post(req, res) {
    let { topic, question } = req.body;
    question = sanitize(question)
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    getUserByID(session.user_id)
    addQuestions(topic, question, session.user_id)
    res.redirect(`/submit-questions`);
}


module.exports = { get, post };