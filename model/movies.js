const mongoose = require("mongoose")

// Creating a schema on type of data communicated to mongodb

const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    }

})


module.exports = mongoose.model("movies", MovieSchema)