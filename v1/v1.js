const express = require('express');
const router = express.Router();
const userRoutes = require('./routes/authRoutes')




router.use('/user', userRoutes)




module.exports = router;