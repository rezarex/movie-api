const express = require('express')
const swaggerJsdoc= require('swagger-jsdoc') 
const PORT = process.env.PORT || 4000
const fs = require('fs');
const swaggerUi= require('swagger-ui-express') 
const app = express();
// const options = {
//   definition: {

//   },
//   // looks for configuration in specified directories
//   apis: ['./routes/*.js'],
// }
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
      description: 'Dev environment'
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/routes/*.js`],
  yaml: fs.readFileSync('./docs/swagger.yaml', 'utf-8'),
};


const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(){
  app.use('/api/docs', swaggerUi.serve,swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

app.listen(3000, ()=> {
  //console.log(`served with swagger`)
  console.log('here we are');
})
}

// function swaggerDocs(app, port) {
//   // Swagger Page
//   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//   // Documentation in JSON format
//   app.get('/docs.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.send(swaggerSpec)
//   })
// }

module.exports =  swaggerDocs