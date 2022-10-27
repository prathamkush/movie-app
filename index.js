// for creating the server, 
// routing URI APIs (GET, POST, DELETE etc),
// configuring middlewares
const express = require("express")

// Get the method logs from client side
const logger = require("morgan")

// extracting from request body (json) 
const bodyParser = require("body-parser")

// connecting the mongo database
const mongoose = require("mongoose")

// only verifying the token
const jwt = require("jsonwebtoken")

// import routes 
const userRoutes = require("./routes/usersRoutes")


//--------------------------------------------------//

// initializing the app 
const app = express()

// configuring middleware for morgan loggers
// and body Parsers
app.use(logger('dev'))

app.use(bodyParser.json())

// for creating the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

// Default route
app.get("/welcome", (req,res) => {
    res.send("Welcome to node application")
})

// path for userRoutes
app.use("/user", userRoutes)


const uri = "mongodb+srv://pratham520:451228@cluster0.pe7oqtx.mongodb.net/movieJWT?retryWrites=true&w=majority" 
mongoose.connect(uri, {useNewUrlParser:true}).
            then(() => {console.log("Database connected")}).
            catch((error) => {console.log(error)})


// Setting a secret key with random string for jwt initial 
app.set("secret_key", "qwertyuiop")