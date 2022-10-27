// for decrypting the password
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") //generating the token key and verifying the token key
const UserModel = require("../model/users") // for crud operations


//saving the User and request from client,
// response from server, next for next steps 
const create = (req,res,next) => {
    UserModel.create(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        },
        (error,result) => {
            if(error){
                next(error)
            }
            res.status(200).json({
                message:"User added successfully !!",
                data : result
            })
        }
    )
}


// exporting
module.exports = {create}