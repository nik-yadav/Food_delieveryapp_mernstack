const express = require("express");
const router = express.Router();
const foodDataController = require('../controllers/foodData.controller')

router.get("/getallfooddata", foodDataController.getFoodData);
router.post('/orderdata', foodDataController.getUserOrderedData);
router.post('/orderdatahelp', foodDataController.createOrderData);
router.post('/myOrderData', foodDataController.getUserOrderData);

// router.post("/getdata", async (req, res) => {
//     let email = req.body.email;

//     try {
//       let userData = await ram.findOne({ email });
//       if (!userData) {
//         return res.status(400).json({ errors: "use correct credentials" });
//       }
//       res.json({ success: true, id: userData._id});
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
// });

module.exports = router;
