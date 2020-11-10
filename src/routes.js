const express = require('express')
const routes = express.Router()

const MotoristController = require('./controllers/MotoristController')
const VehicleController = require('./controllers/VehicleController')

// Motorist
routes.get('/motorists', MotoristController.index)
routes.post('/motorists', MotoristController.create)
routes.get('/motorists/:id', MotoristController.show)
routes.put('/motorists/:id', MotoristController.update)
routes.delete('/motorists/:id', MotoristController.delete)

// add vehicle
routes.post('/add-vehicles', VehicleController.addVehicle)

// Vehicles
routes.get('/vehicles', VehicleController.index)
routes.post('/vehicles', VehicleController.create)
routes.get('/vehicles/:id', VehicleController.show)
routes.put('/vehicles/:id', VehicleController.update)
routes.delete('/vehicles/:id', VehicleController.delete)

module.exports = routes