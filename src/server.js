const express = require("express")
const cookieParser = require("cookie-parser")
const staticHandler = express.static("public")
const bodyParser = express.urlencoded({ extended: false })
const server = express()

server.use(staticHandler)
server.use(cookieParser)
server.use(bodyParser)

module.exports = server
