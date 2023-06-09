const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    IsAdmin:{
        type:String,
        default:"admin"
    },
    img:{
        type:String,
        default:""
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);