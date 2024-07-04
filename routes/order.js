const express = require('express')
const asyncHandler = require('express-async-handler');
const Orders = require('../modules/orderModule')
const Users = require('../modules/usersModule')
const {isAuth} = require('../utils');
const Route = express.Router()

Route.post('/' ,isAuth,  asyncHandler(async (req , res)=>{
        
        console.log("di ma t3aweed")
        let order = req.body

        console.log("paulo")
        order.user = req.user._id
        order.isDelivered = false 
        order.isPaid = false
        order.createdAt = Date.now() , 
        console.log("the order is " , order)
        const NewOrder = new Orders(order)
        try{
                order = await NewOrder.save()
        }
        catch(err){
                console.log(err)
        }
         
            
        res.status(201).send({message : 'New Order Created' , order})
}))
Route.get('/all' , isAuth , asyncHandler(async(req , res)=>{
        
        
                
        let orders = await   Orders.find()   
                
              
        res.send(orders)
}))
Route.get('/:id' , isAuth , asyncHandler(async(req , res)=>{
        
        const order = await Orders.findById(req.params.id)
        if(order)
                {
                        res.send(order)
                }
        else
                {
                        res.status(404).send({message : 'order not found'})
                }        
        
}))

Route.put('/:id/pay' , isAuth , asyncHandler(async(req , res)=>{
        const order = await Orders.findById(req.params.id)

        if(order)
                {
                        order.isPaid = true , 
                        order.paidAt = Date.now() , 
                        order.paymentResult = {
                                id : req.body.id , 
                                status : req.body.status , 
                                update_time : req.body.update_time , 
                                email_adress : req.body.email_adress
                        }

                        const updateOrder = await order.save();
                        res.send({message : 'Order Paid' , order: updateOrder})
                }

        else
                {
                        res.status(404).send({message : 'order not found'})
                }          

}))


module.exports = Route