const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({ message: `Example Rest API NodeJs` })
})

module.exports = routes;