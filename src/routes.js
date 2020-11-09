const express = require('express')
const routes = express.Router()

const MotoristController = require('./controllers/MotoristController')

routes.get('/motorists', MotoristController.index)
routes.post('/motorists', MotoristController.create)
routes.put('/motorists/:id', MotoristController.update)
routes.delete('/motorists/:id', MotoristController.delete)

module.exports = routes