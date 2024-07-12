import express from "express";
import { dbConnection } from "./config/db.js";
import { userRouter } from "./routes/user_route.js";



//create server
const app = express();
dbConnection() ;


//middleware
app.use(express.json())

//Use Routes
app.use('/api/v1', userRouter)


const port = process.env.PORT || 9090

//listen to port
app.listen(port, () => {
    console.log (`app is listening on port ${port}`)
})