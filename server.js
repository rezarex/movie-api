const express = require('express');
const app = express();
const v1Router = require('./-v1/v1.js');
const v2Router = require('./-v2/v2.js');
require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./config/dbConfig.js')

app.use('/v1',v1Router);

app.use('/v2',v2Router);







const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL) 
        
        app.listen(PORT, console.log(`server is live on PORT ${PORT}..`))
    } catch (error) {
        console.log(error)
    }
}


start()
