import express from "express";
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";
import { userRouter } from "./routes/user_route.js";
import { educationRouter } from "./routes/education_route.js";
import { userProfileRouter } from "./routes/userprofile_route.js";
import AchievementRouter from "./routes/achievement_routes.js";
import { volunteeringRouter } from "./routes/volunteering_routes.js";
import { experienceRouter } from "./routes/experience_route.js";
import session from 'express-session'
import MongoStore from "connect-mongo";
import skillRouter from "./routes/skills_route.js";

import expressOasGenerator from "@mickeymond/express-oas-generator";
import { projectRouter } from "./routes/project_route.js";



//create server
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: [""],
    mongooseModels: mongoose.modelNames(),
});



// connect database
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
app.use('/api/v1', AchievementRouter)
app.use('/api/v1', skillRouter)
app.use('/api/v1', experienceRouter)
app.use('/api/v1', volunteeringRouter)

app.use('/api/v1', projectRouter)





expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));





















const port = process.env.PORT || 9090

//listen to port
app.listen(port, () => {
    console.log (`app is listening on port ${port}`)
})