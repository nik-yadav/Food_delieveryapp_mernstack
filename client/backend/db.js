const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config();
const mongoURI = process.env.URL;

const mongoCo = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to the database');

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catdata = await foodCategory.find({}).toArray();

    global.food_items = data;
    //console.log(global.food_items);
    global.foodCategory = catdata;
    //console.log(global.foodCategory); 

  } catch (err) {
    console.error('Database connection error', err);
  }
}

module.exports = mongoCo;


