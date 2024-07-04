const express = require('express')
const Product = require('../modules/productsModule')
const Users = require('../modules/usersModule')
const data = require('../data')
const { Mongoose } = require('mongoose')

const seedRoute = express.Router()

seedRoute.get('/' , async (req , res)=>{
    
    await Product.deleteMany({})
    const createProducts = await Product.insertMany(data.products)
    await Users.deleteMany({})
    const createUsers = await Users.insertMany(data.users)
    res.send(createUsers)
})


module.exports = seedRoute;

