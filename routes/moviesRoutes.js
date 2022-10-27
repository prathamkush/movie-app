const express = require("express")
const router = express.Router()

const movieController = require("../controller/moviesController")

// API paths 
router.post("/add-movie", movieController.create)
router.get("/get-movies", movieController.getMovies)

// exporting the router
module.exports = router