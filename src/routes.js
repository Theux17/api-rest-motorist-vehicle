const express = require('express')
const routes = express.Router()

const MotoristController = require('./controllers/MotoristController')
const VehicleController = require('./controllers/VehicleController')

const MotoristValidator = require('./validators/motorist')
const VehicleValidator = require('./validators/vehicle')

// Motorist
routes.get('/motorists', MotoristController.index)
routes.post('/motorists', MotoristValidator.post, MotoristController.create)
routes.get('/motorists/:id', MotoristValidator.showAndDeleteMotorist, MotoristController.show)
routes.put('/motorists/:id', MotoristValidator.put, MotoristController.update)
routes.delete('/motorists/:id', MotoristValidator.showAndDeleteMotorist, MotoristController.delete)

// add vehicle
routes.post('/add-vehicles', VehicleValidator.addVehicle, VehicleController.addVehicle)

// Vehicles
routes.get('/vehicles', VehicleController.index)
routes.post('/vehicles', VehicleValidator.post, VehicleController.create)
routes.get('/vehicles/:id', VehicleValidator.showAndDeleteVehicle, VehicleController.show)
routes.put('/vehicles/:id', VehicleValidator.put, VehicleController.update)
routes.delete('/vehicles/:id', VehicleValidator.showAndDeleteVehicle, VehicleController.delete)

module.exports = routes