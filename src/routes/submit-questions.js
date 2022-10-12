const { SubmitQuestion } = require("../templates/submit-questions.js");
const { addQuestions } = require("../model/questions.js");
const { getUserByID } = require("../model/users.js");
const { sanitize } = require("../utils");
const { getSession } = require("../model/sessions");

function get(req, res) {
  res.send(SubmitQuestion());
}

function post(req, res) {
  let { topic, question } = req.body;

  let errors = {};
  !topic ? (errors.topic = "Please select a topic") : "";
  !question ? (errors.question = "Please add a question") : "";
console.log(topic.length);
  if (Object.keys(errors).length) {
    res.status(400);
    return res.send(SubmitQuestion(errors));
  }

  question = sanitize(question);
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  getUserByID(session.user_id);
  addQuestions(topic, question, session.user_id);
  res.redirect(`/submit-questions`);
}

module.exports = { get, post };
