const { API_CALLS, TABLE } = require("../constant");
const { DB } = require("../db");

const createcart = async(req, res) => {

    const {orderId, data} = req.body;

    try {
        const orderDataQuery = {
            where: {
                id: orderId
            }
        }
        const orderDetails = await DB(API_CALLS.FIND_UNIQUE, TABLE.ORDER, orderDataQuery);

        if(orderDetails){
            const updateOrderQuery = {
                where: {
                    orderId
                },
                data: data
            }
            const addedOrderItems = DB(API_CALLS.CREATE_MANY, TABLE.ORDER_ITEM, updateOrderQuery);
            
            // need to add some order delete logic
            // const deleteOrderItemQuery = {
            //     where: {
            //         id: 
            //     }
            // }


        } else{
            const createOrderQuery = {}
        }
        
    } catch (error) {
        
    }

    const eID = await ram.findOne({uid:req.body.uid});
    console.log(eID);
    if(eID === null){
        try {

            DB(API_CALLS.CREATE, TABLE.ORDER)

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
}

const getCartData = async(req, res)=> {

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
}

module.exports = {
    createcart,
    getCartData
}