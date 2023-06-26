const express = require('express')
const router = express.Router();
const upload  = require('../middleware/upload');
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

 /**
 * @swagger
 * /upload:
 *   post:
 *      summary: this is used for uploading image files
 *      responses:
 *       200:
 *         description: profile upload
 */
router.post("/upload", upload.single("profile"),(req,res)=>{
     const profile = new profile({
        img: req.file.path
     })
    if(req.file === undefined)return res.send('You have to select a file.');
    const imgUrl=`http://localhost:5000/${req.file.filename}`;
    profile.save()
    return res.send(imgUrl);
})

module.exports = router