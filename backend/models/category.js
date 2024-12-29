const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;
const categorySchema = new Schema({
    CategoryName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('food_categories', categorySchema);
