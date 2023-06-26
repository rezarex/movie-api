const express = require('express');
const app = express()
let mainRoutes = require('./v1/routes/authRoutes')
app.use(mainRoutes)
const swaggerJsdoc= require('swagger-jsdoc');
const fs = require('fs');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MOVIE-API',
    description: 'API for movie-api development',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:5000/`,
      description: 'Dev environment'
    }
  ]
}
  //apis: [`${__dirname}/v1/routes/*.js`],

const options = {
  swaggerDefinition,
  apis:[`${__dirname}/v1/routes/*.js`],
  yaml: fs.readFileSync('./docs/swagger.yaml', 'utf-8'),
};




const swaggerSpec = swaggerJsdoc(options)

module.exports =  swaggerSpec