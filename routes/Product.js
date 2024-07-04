const express = require('express')
const data = require('../data')
const products = require('../modules/productsModule')


const productsRoute = express.Router()





productsRoute.get('/' , async (req , res)=>{
    console.log("reda")
    const Products = await products.find()
    res.send(Products)
})

productsRoute.get('/:slug' , async (req , res)=>{
    
    const product = await products.findOne({slug : req.params.slug})
    res.send(product)
})

productsRoute.get('/:slug/:id' , async (req , res)=>{
    
    const product = await products.findOne({slug:req.params.slug})
    console.log("rani kanbraki" , req.params.id)
    console.log("wa l ID kanbraki" , product)
    const s_product = product.sub_prod.find((x)=>{
        
        return x._id.toHexString() === req.params.id})
    console.log("rani kanbraki" , s_product)
    res.send(s_product)
})


module.exports = productsRoute;