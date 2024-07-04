const express = require('express')
const Users = require('../modules/usersModule')
const bcrypt = require('bcryptjs')
const {generateToken} = require('../utils')
const asyncHandler = require('express-async-handler');


const signinRoute = express.Router()

signinRoute.post('/' , asyncHandler(async (req , res)=>{
    console.log("tkhrbi9a")
    const user = await Users.findOne({email : req.body.email})  
    console.log(typeof(generateToken).__proto__)
    
    if(user)
        {
           if(bcrypt.compareSync(req.body.password , user.password))
            {
                console.log(typeof(generateToken))
                res.json(
                    {
                            
                            name : user.name , 
                            email : user.email , 
                            password : user.password , 
                            isAdmin :  user.isAdmin ,
                            token : generateToken(user.toObject())
                        
                    
                    }
                )
            }
            res.status(401).send('Password incorrect')        
        }
     res.status(401).send('User not found') 
}))

module.exports = signinRoute