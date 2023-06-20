const express = require('express')
const router = express.Router();
const {createUser, loginUser} = require('../controllers/authController');

/**
 * @swagger
 * /v1/user/register:
 *  post:
 *      summary: this is used for user registration
 *      responses:
 *       200:
 *         description: Registration of users
 */
router.post('/register', createUser);

/**
 * @swagger
 * /v1/user/login:
 *  post:
 *      summary: this is used for user registration
 *      responses:
 *       200:
 *         description: User login
 */
router.post('/login', loginUser);

module.exports = router