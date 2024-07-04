const bcrypt = require('bcryptjs')

const data = {
    products: [
      {
        
        name: 'Organic Chicken Eggs',
        slug: 'organic-chicken-eggs',
        category: 'Eggs',
        image: '/images/chicken_eggs.jpg', // Image URL
        price: 3.99, // Price in dollars
        countInStock: 50, // Number of available units
        brand: 'Local Farms Co.', // Brand or producer
        rating: 4, // Average rating out of 5
        numReviews: 20, // Number of reviews
        description: 'Certified organic eggs from free-range chickens.', // Product description
        sub_prod : [
          {
            name : 'X6' , 
            img: '/images/chicken/6_chicken.jpg',
            price : 15 , 
            countInStock : 30 , 
          } , 
          {
            name : 'X30' ,
            img: '/images/chicken/30_chicken.jpg', 
            price : 60 , 
            countInStock : 0 , 
          } , 
          {
            name : 'X60' , 
            img: '/images/chicken/60_chicken.jpg',
            price : 110 , 
            countInStock : 10 , 
          } ,
        ]
      },
      {
        name: 'Organic Turkey Eggs',
        slug: 'organic-turkey-eggs',
        category: 'Eggs',
        image: '/images/turkey_eggs.jpg', // Image URL
        price: 5.49, // Price in dollars
        countInStock: 30, // Number of available units
        brand: 'Gobble Farms', // Brand or producer
        rating: 4.7, // Average rating out of 5
        numReviews: 15, // Number of reviews
        description: 'Rich and flavorful eggs from organically raised turkeys.', // Product description
       
      },
      {
        name: 'Organic Duck Eggs',
        slug: 'organic-duck-eggs',
        category: 'Eggs',
        image: '/images/duck_eggs.jpg', // Image URL
        price: 6.99, // Price in dollars
        countInStock: 40, // Number of available units
        brand: 'Quack Valley Farm', // Brand or producer
        rating: 4.6, // Average rating out of 5
        numReviews: 25, // Number of reviews
        description: 'Large and creamy eggs from organically raised ducks.', // Product description
       
      },
      {
        name: 'Organic Goose Eggs',
        slug: 'organic-goose-eggs',
        category: 'Eggs',
        image: '/images/goose_eggs.jpg', // Image URL
        price: 7.99, // Price in dollars
        countInStock: 20, // Number of available units
        brand: 'Feathered Fields', // Brand or producer
        rating: 4.9, // Average rating out of 5
        numReviews: 30, // Number of reviews
        description: 'Rich and luxurious eggs from organically raised geese.', // Product description
       
      },
      {
        name: 'Organic Carrots',
        slug: 'organic-carrots',
        category: 'Vegetables',
        image: '/images/carrots.jpg', // Image URL
        price: 1.99, // Price in dollars
        countInStock: 100, // Number of available units
        brand: 'Roots Organic Farm', // Brand or producer
        rating: 4.5, // Average rating out of 5
        numReviews: 40, // Number of reviews
        description: 'Sweet and crunchy carrots grown using organic farming methods.', // Product description
        
      },
      {
        name: 'Organic Broccoli',
        slug: 'organic-broccoli',
        category: 'Vegetables',
        image: '/images/broccoli.jpg', // Image URL
        price: 2.49, // Price in dollars
        countInStock: 80, // Number of available units
        brand: 'Green Stalks Co-op', // Brand or producer
        rating: 4.7, // Average rating out of 5
        numReviews: 35, // Number of reviews
        description: 'Nutrient-packed organic broccoli florets, perfect for stir-fries and salads.', // Product description
      
      },
      {
        name: 'Organic Wildflower Honey',
        slug: 'organic-wildflower-honey',
        category: 'Honey',
        image: '/images/wildflower_honey.jpg', // Image URL
        price: 9.99, // Price in dollars
        countInStock: 60, // Number of available units
        brand: 'Bees Buzzing Gardens',
        rating: 4.8, // Average rating out of 5
        numReviews: 50, // Number of reviews
        description: 'Deliciously floral honey harvested from organic wildflowers.', // Product description
        
      },
      {
        name: 'Organic Manuka Honey',
        slug: 'organic-manuka-honey',
        category: 'Honey',
        image: '/images/manuka_honey.jpg', // Image URL
        price: 14.99, // Price in dollars
        countInStock: 50, // Number of available units
        brand: 'Kiwi Fields Apiary', // Brand or producer
        rating: 4.9, // Average rating out of 5
        numReviews: 45, // Number of reviews
        description: 'Potent and healing organic honey sourced from New Zealand\'s Manuka flowers.', // Product description
        
      },
      
    ],
    users: [
      {
        name : 'reda' , 
        email : 'red38for@gmail.com',
        password : bcrypt.hashSync('1255'),
        isAdmin : true
      } , 
      {
        name : 'ureda' , 
        email : 'red38for@gmail.com',
        password : bcrypt.hashSync('1255' , bcrypt.genSaltSync(10)),
        isAdmin : true
      }
    ]
  };

  module.exports = data