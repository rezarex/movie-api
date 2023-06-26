// const  GridFsStorage  = require('multer-gridfs-storage');
const multer = require('multer');

//location where the image will be stored
const storage = multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null,'./uploads/')
        }
    },
    {
        filename: (req, file, cb)=>{
            cb(null, `${new Date().toISOString()}${file.originalname}`)
        }
    }
)
//filter type of image to be uploaded
const fileFilter = (req, file, cb)=>{
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } //accept a file
    else{
        cb(null,false)
    }
   
   
}
const upload = multer({storage : storage, 
fileFilter : fileFilter})


// const storage = new GridFsStorage({
//     url: process.env.MONGO_URL,
//     options:{userNewUrlParser:true, useUnifiedTopology:true},
//     file:(req,file)=>{
//         const match =["image/png", "image/jpeg"];
//         if(match.indexOf(file.mimetype)===-1){
//             const filename = `${Date.now()}-any-name-${file.data.data}`
//             return filename
//         }
//         return{
//             bucketName:"photos",
//             filename:`${Date.now()}-any-name-${file.originalname}`
//         }
//     }
    
// })

module.exports = upload

