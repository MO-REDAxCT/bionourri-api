const express = require('express')
const Users = require('../modules/usersModule')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils')
const asyncHandler = require('express-async-handler');


const Router = express.Router()

Router.post('/' , asyncHandler(async (req , res)=>{
    let user = req.body

    if(!await Users.findOne({email : user.email}))
        {
            user.password = bcrypt.hashSync(user.password , bcrypt.genSaltSync(10))
            user.isAdmin = false
            user = await Users.create(user)
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
        res.status(409).send('this email is already registered')

   
}))

module.exports = Router