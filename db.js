const mongoose = require('mongoose')

const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://wesbound:fender1979@cluster0.nb4fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' );
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (e) {

        console.log(`Error  ${e.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;