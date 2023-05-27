const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

module.exports = invCont


//step 
/* ***************************
 *  Deliver Item Detail view
 * ************************** */
invCont.deliverItemDetail = async function (req, res, next) {
  const invId = req.params.invId;
  const vehicle = await invModel.getInventoryItemById(invId);
  const vehicleHTML = await utilities.buildVehicleHTML(vehicle);
  let nav = await utilities.getNav();
  res.render("./inventory/detail", {
    title: vehicle.make + " " + vehicle.model,
    nav,
    vehicleHTML
  });
}


