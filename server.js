const express = require('express');
const app = express();
const mongoose = require('mongoose');


const authRoutes = require('./Routes/auth')

app.use(express.json());
mongoose.connect('DB_URL',{useNewUrlParser:true},()=>{
    console.log("connect to DataBase...")
})

app.get("/",(req,res)=>{
    return res.json("Login")
})


app.use('/',authRoutes);

app.listen(3000,()=>console.log('server run ....'));
