const express = require('express')
const data = require('./data')
const path = require('path')
const dotenv = require('dotenv')
const productsRoute = require('./routes/Product')
const seedRoute = require('./routes/seedRoute')
const mongoose = require('mongoose')
const signinRoute = require('./routes/signin')
const signupRoute = require('./routes/signup')
const orderRoute = require('./routes/order')
const Orders = require('./modules/orderModule')
const { isAuth } = require('./utils')
const Users = require('./modules/usersModule')
const bcrypt = require('bcryptjs')

const app = express()
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://your-frontend.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
dotenv.config()

const MongoDb_URI = process.env.MongoDb_URI
const port = process.env.PORT


mongoose.connect(MongoDb_URI)
.then((res)=>{console.log('connecting to data base succeded')})
.catch((err)=>{console.log('d')})


const {products} = data
const cars = ["Saab", "Volvo", "BMW"];

app.listen(5000 , ()=>{console.log(`your server is runing in port 5000`)})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/products' , productsRoute)
app.use('/api/seedProduct' , seedRoute)
app.use('/api/users/signin' , signinRoute)
app.use('/api/users/signup' , signupRoute)

app.use('/api/order' ,   orderRoute)
app.get('/home' , (req , res)=>{res.send('hola')})
app.get('/api/paypal/key', isAuth , (req , res)=>{
    res.send(process.env.PAYPAL_CREATE_ID || 'sb')
})
app.put('/api/users/update' , isAuth , async (req,res)=>{
    const id = req.user._id
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password , bcrypt.genSaltSync(10))
    const name = req.body.name

    const user = await Users.updateOne({_id:id} , {email : email , password : password , name : name})
    res.send(user)
})

const _dirname = path.resolve()
app.use(express.static(path.join(_dirname , '/frontend/build')))
app.get('*' , (req , res)=>{
    res.sendFile(path.join(_dirname , '/frontend/build/index.html'))
})
app.use((err , req , res , next)=>{
    console.log(err)

    res.status(500).send({message : 'Internal server error'})
})


