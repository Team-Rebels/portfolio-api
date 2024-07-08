import mongoose from "mongoose";
import 'dotenv/config'


//create database
const connectionString = process.env.mongo_url


//connect database
export const dbConnection = () => {
    mongoose.connect(connectionString).then(() => {
        console.log('database is connected')
    }
    )
}