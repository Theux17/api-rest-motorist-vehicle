const moongose = require('../database/index')

const VehicleSchema = new moongose.Schema({
    owerName:{
        type: moongose.Schema.Types.String,
        ref: 'Motorist',
        required: true
    },
    board: {
        type: String,
        unique: true,
        required: true
    },
    renavam: {
        type: Number,
        unique: true,
        required: true
    },
})

const Vehicle = moongose.model('Vehicle', VehicleSchema)

module.exports = Vehicle