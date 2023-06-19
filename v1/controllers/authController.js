const bcrypt = require ('bcryptjs');
const User = require('../../models/userModel')

//create new user

const createUser = async(req,res)=>{
    //console.log("Register");
    try{
        const {Email, password} =req.body;
        //find user with same email

        /**
         * -You had called the `user.findOne` but had not defined the user object
         * -I have imported the userSchema and assigned to User
         * 
         */
        const user = await User.findOne({ email });
        if(user){
            return res.json({ message: 'user already exists'});
        }else{

            /**
             * All encryption is now done in the schema
             * here we dont need to deconstruct the req.body,
             * the fields provided should reflect what is in the schema
             * 
             */

             const newUser = User.create(req.body);
            // res.json({newUser});

        //hashed password to secure user password. 
        // let hashedPassword;
        // let salt = bcrypt.genSaltSync(8);
        // hashedPassword = bcrypt.hashSync(password, salt);
        
        // //New user    
        // const newUser = new user(
        // {
        //     Email,
        //     password  : hashedPassword,
        // });
       // newUser.save();
        return res.json({message:'user created successfully'});}

    }catch(err){
        console.log(err);
    }
};
//user login

const loginUser = (req, res , next) =>{
    //console.log("login");
   const {email,password} = req.body;
   user.findOne(
    {$or: [{email},{password}]}
   ).then(user=>{
    if(user){
            bcrypt.compare(password,email,function(err, result){
                if(err){
                    res.json({
                        error:err
                    })
                };
                if(result){
                    let token = jwt.sign({name: user.email}, 'secretValue',{expiresIn: '3'})
                    res.json({
                        message : 'login successful',
                        token
                    })
                }else{
                    res.json({
                        message: 'password does not match'
                    })
                }
            });
    }else{
        res.json({
            message : "no user found"
        })
    }
   })

}




module.exports = {createUser, loginUser}