const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const authorRoute = require("./Routes/author");
const bookRoute = require("./Routes/book");

dotenv.config();
// CONNECT DB
// mongoose.connect((process.env.MONGODB_URL), function(err){
//     try {
//         console.log('Connect to MongoDB')
//     } catch (error) {
//         console.log('Error connecting to MongoDB', err);
//     }
// })

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://Minh:TanMinh01@cluster0.uvpt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connect to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}
connectDB();


app.use(bodyParser.json({limit: "50mb"}))
app.use(cors());
app.use(morgan("common"));

// // tao mot request don gian
// app.get("/api/",(req,res)=>{
//     res.status(200).json("Hello");
// })

// MVC: Model view controller


//ROUTES
app.use("/v1/author",authorRoute);

app.use("/v1/books",bookRoute);


app.listen(8000, ()=>{
    console.log('Server is running...');
});