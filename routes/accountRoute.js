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

/*********************************
 * Account management view
 **/
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

/*********************************
 * Account update view
 **/
router.get("/update-information/:account_id",
    utilities.checkLogin,
    utilities.handleErrors(accountController.buildUpdateAccountInformation)
)

/*********************************
 * Account update handler
 **/
router.post("/update-information",
    utilities.checkLogin,
    regValidate.updateInAccountInformationRules(),
    regValidate.checkUpdateAccountData,
    utilities.handleErrors(accountController.updateAccountInformation)
)

/*********************************
 * Password update handler
 **/
router.post("/update-password",
    utilities.checkLogin,
    regValidate.changePasswordRules(),
    regValidate.checkUpdatePasswordData,
    utilities.handleErrors(accountController.updateAccountPassword)
)

/*********************************
 * Logout
 **/
router.get("/logout", utilities.logout)





module.exports = router;