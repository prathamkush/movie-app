const express = require("express")
const router = express.Router()

const userController = require("../controller/usersController")

// API paths 
router.post("/add-user", userController.create)


// exporting the router
module.exports = router
