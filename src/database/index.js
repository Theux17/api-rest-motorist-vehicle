const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://motorist-vehicles:teste123@cluster0.wrcvg.mongodb.net/motoris-vehicles?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.Promise = global.Promise

module.exports = mongoose