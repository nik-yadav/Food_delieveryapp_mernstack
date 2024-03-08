const mongoose = require('mongoose')

const {Schema} = mongoose;

const CartSchemaa = new Schema({
    uid: {
        type: String,
        required: true,
    },
    items: {
        type: Number,
        required: true,
    },
    totalprice: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('cart', CartSchemaa)