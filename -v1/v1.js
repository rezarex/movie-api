const express = require('express');

const router = express.Router();

router.get('/',(req,res) =>{
    res.send('This is version 1 of the API')
});

module.exports = router;