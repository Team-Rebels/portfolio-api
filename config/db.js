import mongoose from "mongoose";
import 'dotenv/config'


//create database
const connectionString = process.env.MONGO_URL


//connect database
export const dbConnection = () => {
    mongoose.connect(connectionString).then(() => {
        console.log('database is connected')
    }
    )
}