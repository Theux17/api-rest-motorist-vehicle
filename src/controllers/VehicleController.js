const Vehicle = require('../models/Vehicle')
const Motorist = require('../models/Motorist')

module.exports = {
    async index(req, res) {
        try {
            const vehicles = await Vehicle.find()

            return res.json({ vehicles })
        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao listar todos os veículos."
            })
        }
    },
    
    async create(req, res) {
        try {
            
            const vehicle = await Vehicle.create(req.body)
            
            return res.status(201).json({ vehicle })

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao cadastrar um novo veículo."
            })
        }
    },

    async show(req, res) {
        try {

            const vehicle = await Vehicle.findById(req.params.id)
            
            return res.json({ vehicle })
        
        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao mostrar os dados de um veículo."
            })
        }
    },

    async update(req, res) {
        try {
            const { owerName, board, renavam } = req.body
            
            const vehicles = await Vehicle.find()
            const foundRenavam = vehicles.find(vehicle => vehicle.renavam == renavam && vehicle._id != req.params.id)
            
            if(foundRenavam) return res.status(400).json({ error: "Renavam já está em uso." })

            const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, {
                owerName, 
                board, 
                renavam
            }, { new: true })

            return res.status(201).json({ vehicle })

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao atualizar os dados do veículo."
            })
        }
    },

    async delete(req, res) {
        try {
            const vehicle = await Vehicle.findById(req.params.id)
            
            await Vehicles.findByIdAndRemove(req.params.id)

            return res.json({ message: `Dados do veículo do proprietário ${vehicle.owerName}, deletado com sucesso.`})

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao deletar dados do veículo"
            })
        }
    },

    async addVehicle(req, res) {
        try {
            const { motoristId, vehicles } =  req.body

            const motorists = await Motorist.find()
            let foundMotorist = motorists.find(motorist => motorist._id == motoristId)

            const vehicleIds = await Promise.all(vehicles.map( async vehicle => vehicle.vehicleId))

            foundMotorist.vehicles = vehicleIds 
            
            await foundMotorist.save()

            return res.json({ motorist: foundMotorist })
        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao deletar dados do veículo"
            })
        }
    },


}