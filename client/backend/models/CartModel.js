const mongoose = require('mongoose')

const {Schema} = mongoose;

const CartSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    orders: {
        type: Object,
        required: true,
    },

})

module.exports = mongoose.model('cart', CartSchema)