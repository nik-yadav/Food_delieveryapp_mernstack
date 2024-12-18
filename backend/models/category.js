const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;
const categorySchema = new Schema({
    CategoryName: {
        name: String,
        required: true,
    }
})

module.exports = mongoose.model('foodCategory', categorySchema);