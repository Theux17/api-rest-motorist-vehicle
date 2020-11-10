const moongose = require('../database/index')

const MotoristSchema = new moongose.Schema({
    name:{
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    CPF: {
        type: Number,
        unique: true,
        required: true
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },
    vehicles: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Vehicle',
    }],
})

MotoristSchema.set('timestamps', true)

const Motorist = moongose.model('Motorist', MotoristSchema)

module.exports = Motorist