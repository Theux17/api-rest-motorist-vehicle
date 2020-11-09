const moongose = require('../database/index')

const UserSchema = new moongose.Schema({
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

UserSchema.set('timestamps', true)

const Motorist = moongose.model('Motorist', UserSchema)

module.exports = Motorist