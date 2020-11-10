const Motorist = require('../models/Motorist')

module.exports = {
    async index(req, res) {
        try {
            const motorists = await Motorist.find()

            return res.json({ motorists })
        } catch (error) {
           return res.status(400).json({
                error: "Erro inesperado ao listar todos os motorista"
            })
        }
    },

    async create(req, res) {
        try {

            const motorist = await Motorist.create(req.body)

            return res.status(201).json({ motorist })

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao cadastrar um novo motorista"
            })
        }
    },

    async show(req, res) {
        try {

            const motorist = await Motorist.findById(req.params.id)
            
            return res.json({ motorist })
        
        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao mostrar a motorista"
            })
        }
    },

    async update(req, res) {
        try {
            const { name, surname, CPF, dateOfBirth, status } = req.body
            
            const user = await Motorist.findByIdAndUpdate(req.params.id, {
                name, 
                surname, 
                CPF, 
                dateOfBirth,
                status 
            }, { new: true })

            return res.status(201).json({ user })

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao atualizar o motorista"
            })
        }
    },

    async delete(req, res) {
        try {
            const motorist = await Motorist.findById(req.params.id)
            
            await Motorist.findByIdAndRemove(req.params.id)

            return res.json({ message: `Motorista ${motorist.name} ${motorist.surname}, deletado com sucesso.` })

        } catch (error) {
            return res.status(400).json({
                error: "Erro inesperado ao deletar o motorista"
            })
        }
    }
}