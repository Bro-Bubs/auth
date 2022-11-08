const express = require('express');
const app = express();
const mongoose = require('mongoose');


const authRoutes = require('./Routes/auth')

app.use(express.json());
mongoose.connect('mongodb+srv://admin:sophun@cluster0.h5mg6z1.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true},()=>{
    console.log("connect to DataBase...")
})

app.get("/",(req,res)=>{
    return res.json("Login")
})


app.use('/',authRoutes);

app.listen(3000,()=>console.log('server run ....'));