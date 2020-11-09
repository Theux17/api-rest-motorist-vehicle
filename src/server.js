const express = require('express')
const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.listen(3333, console.log("Server is running"))