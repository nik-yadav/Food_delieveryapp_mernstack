const mongoose = require('mongoose')

const {Schema} = mongoose;


const OrderSchema = new Schema({
    email:{
        type:String,
        required: true,
    },
    data:{
        type: Object,
        required: true,
    },
    totalprice:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
    }
});

module.exports = mongoose.model('orders', OrderSchema)