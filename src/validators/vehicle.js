const Vehicle = require('../models/Vehicle')
const Motorist = require('../models/Motorist')

function checksIfFieldsIsEmpty(body, res) {
    const keys = Object.keys(body)

    for (key of keys) {
        if (body[key] == "") return res.status(400).json({
            message: "Por favor, Preecha todos os campos."
        })
    }
}

async function post(req, res, next) {

    try {
        const fillAllFields = checksIfFieldsIsEmpty(req.body, res)
        if (fillAllFields) return fillAllFields

        const { board, renavam } = req.body
        const vehicles = await Vehicle.find()

        const renavamOrBoardAlreadyRegistered = vehicles.find(vehicle => vehicle.board == board || vehicle.renavam == renavam)

        if (renavamOrBoardAlreadyRegistered) return res.status(400).json({ error: "Renavam ou placa já estão cadastrado." })

        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Erro inesperado ao cadastrar um veículo."
        })
    }
}

async function put(req, res, next) {
    try {
        const fillAllFields = checksIfFieldsIsEmpty(req.body, res)
        if (fillAllFields) return fillAllFields

        const { board, renavam } = req.body
        const vehicles = await Vehicle.find()

        const vehicle = await Vehicle.findById(req.params.id)
        if (!vehicle) return res.status(400).json({ error: "Veículo não está cadastrado." })

        const boardAlreadyRegistered = vehicles.find(vehicle =>
            vehicle.board == board && vehicle._id != req.params.id)

        if (boardAlreadyRegistered) return res.status(400).json({ error: "Placa já está cadastrada." })

        const renavamAlreadyRegistered = vehicles.find(vehicle =>
            vehicle.renavam == renavam && vehicle._id != req.params.id)

        if (renavamAlreadyRegistered) return res.status(400).json({ error: "Renavam já está cadastrado." })

        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Erro inesperado ao atualizar os dados do veículo."
        })
    }

}

async function showAndDeleteVehicle(req, res, next) {
    try {
        const vehicle = await Vehicle.findById(req.params.id)
        if (!vehicle) return res.status(400).json({ error: "Veículo não está cadastrado." })

        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Um erro inesperado aconteceu."
        })
    }

}

async function addVehicle(req, res, next){
    const { motoristId } = req.body

    const motorist = await Motorist.findById(motoristId)
    if(motorist.status == false) return res.status(400).json({ error: "O usuário está inativo para adicionar um novo veículo." })

    next()
}
module.exports = {
    post,
    put,
    showAndDeleteVehicle,
    addVehicle
}