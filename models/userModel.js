const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto') //installed to help with generating refresh token

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
},
//added timestamp option to show when user created account
{
    timestamps: true,
}
);

//moved the encription option here to make controller cleaner and more readable
//this will reduce the amount of configuration on the controller side
userSchema.pre('save', async function(next){
    if(!this.modifiedPaths('password')){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
});


//this will check if the passwords match
//remember, the encryption is done one-way, so no need to decrypt
//helps with security of password
userSchema.methods.isPasswordMatched = async function(entered_password){
    return await bcrypt.compare(entered_password, this.password);
}

//here we generate a token that will last for approx 10 mins
//this helps with session management
userSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto
    .createHash
    .update(resetToken)
    .digest("hex")

    this.passwordResetExpires = Date.now() + 30*60*1000 //10 mins from now

    return resetToken
};



//Export the model
module.exports = mongoose.model('User', userSchema);