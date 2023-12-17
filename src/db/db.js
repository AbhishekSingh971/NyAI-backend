const mongoose = require('mongoose');
 require('dotenv').config();

const connectDB =async ()=>{
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.CONNECTION_STRING || "mongodb+srv://m001-student:abhi@sandbox.1tynyfo.mongodb.net/NyAI");
        console.log(`Connected To Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in Connecting Database ${error}`);
    }
} 

module.exports = connectDB;