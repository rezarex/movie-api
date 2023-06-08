const mongoose = require('mongoose');

// const connectionString = ''

const connectDB = (url) => {
    mongoose.set({'strictQuery':false})
    .connect(url)

}

module.exports = connectDB;