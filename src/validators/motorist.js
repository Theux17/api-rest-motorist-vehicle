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
 
        const { CPF } = req.body
        const motorists = await Motorist.find()

        const cpfAlreadyRegistered = motorists.find(motorist => motorist.CPF === CPF)

        if(cpfAlreadyRegistered) return res.status(400).json({ error: "CPF já está cadastrado." })
    
        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Erro inesperado ao cadastrar um novo motorista."
        })
    }
}

async function put(req, res, next) {

    try {
        const fillAllFields = checksIfFieldsIsEmpty(req.body, res)
        if (fillAllFields) return fillAllFields
 
        const { CPF } = req.body
        const motorists = await Motorist.find()

        const motorist = await Motorist.findById(req.params.id)
        if(!motorist) return res.status(400).json({ error: "Motorista não está cadastrado." })

        const cpfAlreadyRegistered = motorists.find(motorist => motorist.CPF == CPF && motorist._id != req.params.id )
        if(cpfAlreadyRegistered) return res.status(400).json({ error: "CPF já está cadastrado." })
    
        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Erro inesperado ao atualizar o motorista."
        })
    }

}

async function showAndDeleteMotorist(req, res, next){
    try {
        const motorist = await Motorist.findById(req.params.id)
        if(!motorist) return res.status(400).json({ error: "Motorista não está cadastrado." })

        next()
    }
    catch (error) {
        return res.status(400).json({
            error: "Um erro inesperado aconteceu."
        })
    }

}
module.exports = {
    post,
    put,
    showAndDeleteMotorist
}