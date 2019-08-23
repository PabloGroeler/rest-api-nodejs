const express = require('express')

const app = express()
const server = require('http').Server(app)

app.get('/', (req, res) => res.send('Hello api with Express'));

app.use(express.json)

server.listen(3333);