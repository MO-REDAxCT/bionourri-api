const mongoose  = require('mongoose');


const orderSchema = new mongoose.Schema(
    {
        orderItems : [{
            name : {type : String , required : true} , 
            img : {type : String , required : true } , 
            price : {type : Number , required : true} , 
            countInStock : {type : Number , required : true} , 
            quantity : {type : Number , required : true}
        }], 

        shippingAdress :    
            {
                fullname : {type : String , required : true} , 
                city : {type : String , required : true } , 
                postalcode : {type : Number , required : true} , 
                country : {type : String , required : true } , 
                adress : {type : String , required : true }
            }   ,
        paymentMethod :     {type : String , required : true}   , 
        paymentResult : {
            id : String , 
            status : String , 
            update_time : String , 
            email_adress : String 

        } , 
        itemsPrice : {type : Number , required : true} , 
        shippingPrice : {type : Number , required : true} , 
        taxPrice : {type : Number , required : true} , 
        totalPrice : {type : Number , required : true} , 
        user : {type : mongoose.Schema.Types.ObjectId  , ref : 'User' , required : true} , 
        isPaid : {type : Boolean , default : false } , 
        paidAt : Date , 
        createdAt : Date , 
        isDelivered : {type : Boolean , default : false}
    }
)

const Orders = mongoose.model('Orders' , orderSchema)

module.exports = Orders