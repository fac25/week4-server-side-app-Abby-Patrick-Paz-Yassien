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

function listQuestions(){
    return list_questions.all()
}

module.exports = { addQuestions,listQuestions }