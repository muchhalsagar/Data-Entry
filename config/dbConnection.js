const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const dbConnection = async() => {
    mongoose.connect(process.env.MONGODB_URL)
        .then((conn) => {
            console.log(`App is connected to MongoDB database on ${conn.connection.host}`)
        })
        .catch((err) => {
            console.log(`Error is ${err}`);
            process.exit(1)
        })
}
module.exports = dbConnection;