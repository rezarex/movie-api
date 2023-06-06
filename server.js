const express = require('express');
const app = express();

port = 5000

const v1Router = require('./-v1/v1.js');
app.use('/v1',v1Router);

const v2Router = require('./-v2/v2.js');
app.use('/v2',v2Router);










app.listen(port,(req,res)=>{
    console.log(`server running on port :${port}`)
})