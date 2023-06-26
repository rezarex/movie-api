const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

// const connectionString = ''

const connectDB = (url) => {
    mongoose.set({'strictQuery':false})
    .connect(url)

}


let gfs;

const  conn = mongoose.connection;
conn.once('open',function(){
    gfs = Grid(conn.db,mongoose.mongo);
    gfs.collection("photos")
})

module.exports = connectDB;