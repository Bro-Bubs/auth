const router = require ('express').Router();
const User = require("../Model/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const {registerValidation} = require('../Routes/validation');
const token11 = "iloveyou";



router.post('/user', async (req,res)=>{

    const checkEmail = await User.findOne({email:req.body.email});
    if(checkEmail) return res.json("Email Already Exists");
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const newUser =  new User({
        full_name : req.body.full_name,
        role: req.body.role,
        email : req.body.email,
        password :hashedPassword,

    })
    try {
        const saveUser= await newUser.save();
        res.status(200).json({user_id:saveUser._id});

    } catch (err) {
        res.status(400).json(err)
    }
})
router.post('/login',async(req,res)=>{

    const user = await User.findOne({email:req.body.email});
    if(!user) return res.send("Email not found!");

    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.send("Your Password invalid !");
 
    const token = jwt.sign({_id:user._id},token11);
    res.header('auth-token',token).send({accessToken:token});


})

module.exports = router
