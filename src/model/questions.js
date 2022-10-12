const db = require("../database/db.js");

const add_questions = db.prepare(/*sql*/
    `INSERT INTO questions (topic, question, user_id)
    VALUES ($topic, $question, $user_id )`
);

function addQuestions(topic, question, user_id) {
    return add_questions.run({ topic, question, user_id })
}

const list_questions = db.prepare(/*sql*/ `
SELECT 
questions.topic AS topic, 
questions.question AS question, 
questions.created_at AS created_at,
users.username AS username
FROM questions JOIN users ON questions.user_id = users.id
`)

function listQuestions() {
    return list_questions.all()
}

const user_questions = db.prepare(/*sql*/ `
SELECT 
questions.topic AS topic, 
questions.question AS question, 
questions.created_at AS created_at,
users.username AS username
FROM questions JOIN users ON questions.user_id = users.id
WHERE user_id=?
`)

function getUserQuestions(user_id) {
    return user_questions.all(user_id)
}

const select_questions_by_topic = db.prepare(/*sql*/ `
SELECT 
questions.topic AS topic, 
questions.question AS question, 
questions.created_at AS created_at,
users.username AS username
FROM questions JOIN users ON questions.user_id = users.id
WHERE topic=?
`)


function getQuestionByTopic(topic) {
    return select_questions_by_topic.all(topic)
}

module.exports = { addQuestions, listQuestions, getUserQuestions, getQuestionByTopic }