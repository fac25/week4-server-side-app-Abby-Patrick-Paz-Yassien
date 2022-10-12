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

function listQuestions(){
    return list_questions.all()
}

module.exports = { addQuestions,listQuestions }