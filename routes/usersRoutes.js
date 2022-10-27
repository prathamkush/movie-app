const express = require("express")
const router = express.Router()

const userController = require("../controller/usersController")

// API paths 
router.post("/add-user", userController.create)
router.post("/login", userController.login)
router.get("/get-users", userController.getUsers)

// exporting the router
module.exports = router
