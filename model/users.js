const mongoose = require("mongoose")
// for encrypting the password
const bcrypt = require("bcrypt")

// Creating a schema on type of data communicated to mongodb

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }

})

// custom function for matching the entered password in request
// with the one in database(hash_password- after auto decrypting it here)
UserSchema.methods.comparePassword = function (reqst_pswd) {
    return bcrypt.compareSync(reqst_pswd, this.password)
}


// pre function used to run the statements in
// the callback function (do this before "save")
UserSchema.pre("save", function(next){
    const saltRounds = 10
    this.password = bcrypt.hashSync(this.password,saltRounds)
    next()
})


module.exports = mongoose.model("users", UserSchema)