const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({

    full_name : {
        require: true,
        type : String,
        min : 3,
        max : 255
    },
    email : {
        type : String ,
        require : true ,

    },
    role : {
        type : String ,
        require : true
    },
    password : {
        type : String ,
        require : true 

    },
    date : {
        type : Date,
        require : true ,
        default : Date.now 
    }
})

module.exports = mongoose.model('users', userSchema);