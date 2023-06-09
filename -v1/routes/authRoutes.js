const express = require('express')
const router = express.Router;
const {createUser, loginUser} = require('./-v1/controllers/userController.js');



router.post('/register', createUser);
router.post('/loginUser', loginUser);

module.exports = router