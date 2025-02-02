const { API_CALLS, TABLE } = require("../constant");
const { DB } = require("../db");

const getUserOrders = async(req, res) => {
    const { id } = req.params;
    try {
        const orderQuery = {
            where: {
                userId: id
            }
        }
        const getAllUserOrders = await DB(API_CALLS.FIND_MANY, TABLE.ORDER, orderQuery);
        res.status(200).json({orderData: getAllUserOrders})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserOrders
}
