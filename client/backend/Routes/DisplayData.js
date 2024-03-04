const express = require("express");
const ram = require("../models/User");
const order = require("../models/Orders")
const router = express.Router();

router.post("/foodData", (req,res)=>{
    try {
        // console.log(global.food_items);
        res.send([global.food_items, global.foodCategory])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

router.post("/getdata", async (req, res) => {
    let email = req.body.email;

    try {
      let userData = await ram.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "use correct credentials" });
      }
      res.json({ success: true, id: userData._id});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
});


router.post('/orderdata', async (req, res) => {
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
})


router.post('/orderdatahelp', async(req, res) => {
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
})

router.post('/myOrderData', async (req, res) => {
    try {
        let email = req.body.email;
        let eId = await order.find({email})
        //console.log(eId)
        res.json(eId)
    } catch (error) {
        res.send("Error"+ error.message)
    }
});

module.exports = router;
