/*********************************
 * Account routes
 * Unit 4. Delivering the login view*/
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require("../utilities/account-validation")

/*********************************
 * Login view
 * Unit 4. Delivering the LOGIN VIEW*/
router.get("/login", utilities.handleErrors(accountController.buildLogin))


// Process the login attempt
// router.post("/login", (req, res) => {res.status(200).send('login process')})


// Process the LOGIN ROUTE
// //Unit 5
router.post("/login", regValidate.loginRules(), regValidate.checkLoginData, utilities.handleErrors(accountController.accountLogin))

/*********************************
 * Login view
 * Unit 4. Delivering the register view*/
router.get("/register", utilities.handleErrors(accountController.buildRegister))

/*********************************
 * Login view
 * Unit 4. Process Registration*/
router.post("/register", regValidate.registationRules(), regValidate.checkRegData, utilities.handleErrors(accountController.registerAccount))




router.get("/", utilities.handleErrors(accountController.buildManagement))





module.exports = router;