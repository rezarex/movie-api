const express = require('express');
const app = express();
const fs = require('fs');
const swaggerJsdoc= require('swagger-jsdoc') 
const swaggerUi= require('swagger-ui-express')
//const router = require('./-v2/routes/authRoutes');
const v1Auth = require('./v1/v1');
//const v2Router = require('./-v2/v2.js');



const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      description: 'API documentation for blog and portfolio',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:5000`,
        //url: `https://marvin-n1cb.onrender.com/`, //--->replace with live environment
        description: 'Dev environment'
      }
    ]
  }


  const options = {
    swaggerDefinition,
    apis: [`${__dirname}/v1/routes/*.js`],
    yaml: fs.readFileSync('./docs/swagger.yaml', 'utf-8'),
  };
  
  
  const swaggerSpec = swaggerJsdoc(options)



require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./config/dbConfig.js')

app.use('/v1',v1Auth);
//app.use('/v2',v2Router);
app.use('/api/docs', swaggerUi.serve,swaggerUi.serve, swaggerUi.setup(swaggerSpec) )


// app.use(notFound); //for when the page requested is not found/ is not there
// app.use(errorHandler) //was app.request(errorHandler)...in case anything goes wrong









const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL) 
        
        app.listen(PORT, console.log(`server is live on PORT ${PORT}..`))
    } catch (error) {
        console.log(error)
    }
}


start()
