// generating the token key and verifying the token key
const jwt = require("jsonwebtoken") 
const MovieModel = require("../model/movies") // for CRUD ops

// Create Movie 
const create = (req, res, next) => {
    MovieModel.create(
        {
            name:req.body.name,
            releaseDate:req.body.releaseDate
        },
        (error, result) => {
            if(error){  
                next(error)
            }
            res.status(200).json(
                {
                    message: "Movie Added Successfully!!!",
                    data: result
                }
            )
        }
    )
}

// Get Movies
const getMovies = (req,res,next) => {
    MovieModel.find(
        {},
        (err,result) => {
            if(err) {   
                next(err); 
            }
            res.status(200).json({
                Movies : result
            });
        }
    );
}

// Export
module.exports = {create,getMovies};