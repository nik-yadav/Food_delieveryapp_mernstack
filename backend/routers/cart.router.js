const express = require('express')
const router = express.Router();
const ram = require("../models/CartModel")

// api = "http://localhost:8000/api/createcart"
router
.post('/createcart', async(req, res) => {

    console.log(
        req.body.uid,
        req.body.orders
    )

    let eID = await ram.findOne({uid:req.body.uid});
    console.log(eID);
    if(eID === null){
        try {
            await ram.create({
                uid: req.body.uid,
                orders: req.body.orders,
            }).then(() => {
                res.json({success: true})
            })
        } catch (error) {
            console.log(error)
            res.json({success: false})
        }
    }else{
        try {
            const data = req.body.orders;
            const userID = req.body.uid;
            console.log("==============UPDATE================")
            console.log(data, userID)
            await ram.findOneAndUpdate({uid: req.body.uid},
                { $set:{orders: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error);
            res.json({status: false})
        }
    }
})

// api = "http://localhost:8000/api/createcart1/YOUR_ID"
router.get('/createcart1/:id', async(req, res)=> {

    try {
        const uid = req.params.id;
        let eID = await ram.findOne({uid})
        console.log(eID);

        if(eID !== null){
            res.json({success: true, orders: eID.orders})
        }else{
            res.json({success: false, message: "User not found"});
        }

    } catch (error) {
        console.log(error.message)
        res.json({success: false})
    }
})


module.exports = router