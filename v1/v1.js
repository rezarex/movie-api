const express = require('express');

const router = express.Router();
const userRoutes = require('./routes/authRoutes')


// router.get('/',(req,res) =>{
//     res.send('This is version 1 of the API')
// });

router.use('/user', userRoutes)

module.exports = router;