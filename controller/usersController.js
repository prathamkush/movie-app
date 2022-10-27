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

const login = (req,res,next) => {
    UserModel.findOne(
        {
            email : req.body.email
        },
        (error,result) => {
            if(error) {
                next(error);
            }
            else{
                if(!result || !bcrypt.compareSync(req.body.password, result.password)){
                    res.status(401).json({
                        message: "Authentication Failed !!"
                    })
                }
                else{
                    // genearting the token using jwt.sign function
                    /*
                        3 parameters
                            1. Claims
                            2. Secret Key
                            3. Expiry time of token
                    */
                    const token = jwt.sign(
                        {
                            id: result._id
                        },
                        req.app.get('secret_key'),
                        {
                            expiresIn: "1H"
                        }
                    )
                    res.status(200).json({
                        message : "Successfully Logged-in !!",
                        data : {
                            user: result,
                            token : token
                        }
                    })
                }
            }
        }
    )
}

// get-users
const getUsers = (req,res,next) => {
    UserModel.find(
        {},
        (error, result) => {
            if(error){
                next(error)
            }
            res.status(200).json({
                message : "Successfully retrieved all Users",
                Users : result
            })
        }
        
    )
}





// exporting
module.exports = {create, login, getUsers}