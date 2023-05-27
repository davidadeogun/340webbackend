//Needed resources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);


//Step
// Route to deliver the inventory detail view
router.get("/detail/:invId", invController.deliverItemDetail);


module.exports = router;