const express = require('express');
const app = express();
const connectDB = require('./config/dbConfig.js');
require('dotenv').config();
let mainRoutes = require('./v1/routes/authRoutes')
app.use(mainRoutes)

const PORT = process.env.PORT || 3000

const swaggerUi= require('swagger-ui-express')
const swaggerSpec = require('./swagger.js')


const v1Auth = require('./v1/v1');


app.use(express.json());









const start = async() => {
  try {
      await connectDB(process.env.MONGO_URL) 
      
      app.listen(PORT, console.log(`server is live on PORT ${PORT}..`))
  } catch (error) {
      console.log(error)
  }
}



app.use('/v1',v1Auth);

/**
 * @swagger
 * /users:
 *  post:
 *      summary: This is my users
 *      description: This router is used to create new users.
 *      responses:
 *          200:
 *             description: user created successfully.
 */

app.post('/users', async(req,res)=>{
  try{
    const user = await user.create(req.body)
  }catch(error){
    res.status(500).json({message:error})
  }
} );

//media routes
app.get('profile/:filename', async(req,res)=>{
try {
  const file = await getFips.files.findOne({filename:req.params.filename})
  const readStream = gfs.createReadStream(file.filename);
  readStream.pipe(res)
} catch (error) {
  res.send('not found')
}
});

app.delete('/profile/:filename',async(req,res)=>{
  try {
    await gfs.files.deleteOne({filename:req.params.filename});
    res.send("image deleted successfully")
  } catch (error) {
    console.log(err);
    res.send("an error occurred.")
  }
})

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec) )


start()


//app.use('/v2',v2Router);


//app.use(notFound); //for when the page requested is not found/ is not there
//app.use(errorHandler) //was app.request(errorHandler)...in case anything goes wrong
