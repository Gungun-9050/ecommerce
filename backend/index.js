const port= 8080
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const app = express()

const secret_key = "xr9QJ3$%$6vWNfw"

app.use(express.json());
app.use(cors());

// DataBase connection with mongoDB

mongoose.connect("mongodb+srv://gungun:fhIRJ180U5sDHgGk@cluster0.kvcdl.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds

})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("MongoDB connection error:", err));

// API Creation

app.get("/",(req,res) => {
    res.send('You are in / path')
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage})

// Creating upload endpoint for images

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'),(req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`

    })
})

// Schema for creating Products

const Product = mongoose.model("Product", {
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    old_price:{
        type:String,
        required:true
    },
    new_price:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default: Date.now
    },
    avilable:{
        type:Boolean,
        default:true
    }
})

// Add a product

app.post('/addproduct', async (req,res)=> {
    
    const products = await Product.find({});
    let id;
    if (products.length>0){
    const last_product = products.slice(-1)
    const last_product_array = last_product[0]
    id = last_product_array.id+1
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name
    })
    
})

// Remove a product

app.post('/removeproduct', async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Get all products list

app.get('/allproducts', async (req,res) => {
    let products = await Product.find({})
    console.log("All products fatched");
    res.send(products);
})

// Scema creating for user model

const Users = mongoose.model('Users', {

    name: {
        type:String
    },
    password: {
        type:String
    },
    cartData: {
        type:Object
    },
    date: {
        type:Date,
        default:Date.now
    },
    email: {
        type: String,
        unique: true
    }
})

// Creating Endpoint for registering the user

app.post('/signup', async (req,res) => {

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false, errors:'Account already exist'})
    }
    let cart= {};
    for (let i = 0; i < 300; i++) {
        cart[i]= 0;        
    }
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,secret_key);
    res.json({success:true,token })
})

// Creating Endpoint for user login

app.post('/login', async (req,res) => {
    let user = await Users.findOne({email: req.body.email});
    if(user){
        const compare_password = req.body.password===user.password
        if(compare_password) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,secret_key)
            res.json({success:true,token})
        }else {
            res.json({success:false, errors:"Wrong Password"})
        }
    }else {
        res.json({success:false,errors:"Account does not exist"})
    }
})

// new Collection Data

app.get('/newcollection', async (req,res)=> {
    let products = await Product.find({})
    let newCollection = products.slice(1).slice(-8)
    res.send(newCollection)
})

// Popular in women

app.get('/popularinwomen', async (req,res)=> {
    let products = await Product.find({category:"women"})
    let popularinwomen = products.slice(0,8);
    res.send(popularinwomen)
})

// Creating middelware to fetch user

const fetchUser = async (req,res,next)=> {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:'Please authenticate using a vaild token'})
    }else {
        try{
            const data = jwt.verify(token,"xr9QJ3$%$6vWNfw")
            req.user= data.user;
            next();
        }catch (error) {
            res.status(401).send({errors:'Please authenticate using a vaild token'})
        }
    }
}

// add Product to cart 

app.post('/addtocart', fetchUser, async (req,res) => {

    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] += 1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    console.log(userData.cartData[req.body.itemId]);
})

// Remove Product from cart 

app.post('/removefromcart', fetchUser, async (req,res) => {

    let userData = await Users.findOne({_id:req.user.id})
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-= 1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    console.log(userData.cartData[req.body.itemId]);
})

// To get cart data

app.post('/getcart',fetchUser, async (req,res) => {

    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
})

// Listening to port

app.listen(port,(error) => {
    if (!error) {
        console.log(`listening to port: ${port}`);        
    }else{
        console.log(`error:${error}`);
    }
})
