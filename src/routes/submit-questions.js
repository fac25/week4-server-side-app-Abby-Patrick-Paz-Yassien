const { QuestionForm } = require("../templates/submit-questions.js")
const { addQuestions, getUserQuestions } = require("../model/questions.js")
const { getUserByID } = require("../model/users.js");
const { sanitize } = require("../utils");
const { getSession } = require("../model/sessions.js")

function get(req, res) {
  const sid = req.signedCookies?.sid
  const session = getSession(sid)
  const user_id = session?.user_id
  const questionsArr = getUserQuestions(user_id)
  res.send(QuestionForm(questionsArr))
}


function post(req, res) {
  let { topic, question } = req.body;

  const sid = req.signedCookies?.sid;
  const session = getSession(sid);
  const user_id = session?.user_id
  const questionsArr = getUserQuestions(user_id)

  getUserByID(session.user_id);

  let errors = {};
  !topic ? (errors.topic = "Please select a topic") : "";
  !question ? (errors.question = "Please add a question") : "";
  if (Object.keys(errors).length) {
    res.status(400)
    return res.send(QuestionForm(questionsArr, errors));
  } 

    question = sanitize(question);
    addQuestions(topic, question, session.user_id);
    res.redirect(`/submit-questions`);
  }


module.exports = { get, post };
