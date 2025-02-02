const { API_CALLS, TABLE } = require('../constant');
const { DB } = require('../db')

const getFoodData = async(req, res) => {
  try {
    const foodData = await DB(API_CALLS.FIND_MANY, TABLE.FOOD_ITEM)
    const foodCategory = await DB(API_CALLS.FIND_MANY, TABLE.CATEGORY);

    res.status(200).json({foodCategory, foodData})

  } catch (error) {
    console.error(error.message);
    res.status(400).send("Unable to get the food items");
  }
};

const getUserOrderedData = async (req, res) => {
    let data = req.body.order_data
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    try {
        console.log(data)
        console.log("1231242343242354",req.body.email)
        await order.create({
            email: req.body.email,
            data:req.body.data,
            totalprice: req.body.totalprice,
            date: req.body.date,
        }).then(() => {
            res.json({ success: true })
        })
    } catch (error) {
        console.log(error.message)
        res.send("Server Error", error.message)

    }
}

const createOrderData = async(req, res) => {
    // let data1 = new Date();
    console.log(req.body);
    // const {id1 , name1, quantity1, size1, totalprice1} = req.body;
    try{
        await order.create({
            oid: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity,
            size: req.body.size,
            totalprice: req.body.totalprice,
            date: req.body.data,
        });
        res.json({success: true})
    } catch(e){
        console.log(e);
        res.json({ success: false });
    }
};

const getUserOrderData = async (req, res) => {
    try {
        let email = req.body.email;
        let eId = await order.find({email})
        res.json(eId)
    } catch (error) {
        res.send("Error"+ error.message)
    }
}

module.exports = {
  getFoodData,
  getUserOrderData,
  createOrderData,
  getUserOrderedData,
};
