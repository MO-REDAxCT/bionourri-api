 const mongoose  = require('mongoose');
 
const sub_prodSchema = new mongoose.Schema({
              
              name : {type : String  },
              img : {type : String  }, 
              price : {type : Number }, 
              countInStock: {type : Number }
})
const productsSchema = new mongoose.Schema(
    {
        
        name: {type : String  , },
        slug: {type : String  , },
        category: {type : String  },
        image: {type : String  , }, // Image URL
        price: {type : Number  }, // Price in dollars
        countInStock:{type : Number },
        brand: {type : String  , }, // Brand or producer
        rating: {type : Number  ,}, // Average rating out of 5
        numReviews: {type : Number  ,}, // Number of reviews
        description: {type : String , }, // Product description
        sub_prod : [sub_prodSchema] 
        
      }
      , 
)

let Product = mongoose.model('Producti' , productsSchema)

module.exports = Product