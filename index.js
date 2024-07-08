import express from "express";
import { dbConnection } from "./config/db.js";


//create server
const app = express();
dbConnection() ;




const port = process.env.PORT || 9090

//listen to port
app.listen(port, () => {
    console.log (`app is listening on port ${port}`)
})