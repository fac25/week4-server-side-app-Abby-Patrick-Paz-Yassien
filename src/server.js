const express = require("express")
const cookieParser = require("cookie-parser")
const staticHandler = express.static("public")
const bodyParser = express.urlencoded({ extended: false })
const server = express()
const submitQuestions = require("./routes/submit-questions")


server.use(staticHandler)
server.use(cookieParser)
server.use(bodyParser)


server.get("/submit-questions", submitQuestions.get)

module.exports = server
