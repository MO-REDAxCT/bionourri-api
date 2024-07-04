const mongoose  = require('mongoose');


const User_Schema = new mongoose.Schema({
    name : {type : String} , 
    email : {type : String} , 
    password : {type : String} , 
    isAdmin : {type : Number} , 

} , {timestamps : true})

const Users = mongoose.model('Users' , User_Schema)
module.exports = Users