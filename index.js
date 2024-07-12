import express from "express";
import { dbConnection } from "./config/db.js";
import { userRouter } from "./routes/user_route.js";
import { educationRouter } from "./routes/education_route.js";
import { userProfileRouter } from "./routes/userprofile_route.js";
import session from 'express-session'
import MongoStore from "connect-mongo";



//create server
const app = express();
dbConnection() ;


//middleware
app.use(express.json());
// express session authentication
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}))






//Use Routes
app.use('/api/v1', userRouter)
app.use('/api/v1', educationRouter)
app.use('/api/v1', userProfileRouter)


















const port = process.env.PORT || 9090

//listen to port
app.listen(port, () => {
    console.log (`app is listening on port ${port}`)
})