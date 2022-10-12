const db = require("../database/db.js");

const add_questions = db.prepare(/*sql*/
    `INSERT INTO questions (topic, question, user_id)
    VALUES ($topic, $question, $user_id )`
);

function addQuestions(topic, question, user_id) {
    return add_questions.run({ topic, question, user_id })
}

const list_questions = db.prepare(/*sql*/ `
SELECT topic, question, created_at
FROM questions
`)

function listQuestions() {
    return list_questions.all()
}

const user_questions = db.prepare(/*sql*/ `
SELECT topic, question, created_at, user_id
FROM questions WHERE user_id=?
`)

function getUserQuestions(user_id) {
    return user_questions.all(user_id)
}

const select_questions_by_topic = db.prepare(/*sql*/ `
SELECT topic, question, created_at, user_id
FROM questions WHERE topic=?
`)

function getQuestionByTopic(topic) {
    return select_questions_by_topic.all(topic)
}

module.exports = { addQuestions, listQuestions, getUserQuestions, getQuestionByTopic }