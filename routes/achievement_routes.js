import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { createUserAchievement } from "../controllers/achievement_controller.js";



//create Router
const AchievementRouter = Router()

//define routes
//add a contact route
AchievementRouter.post('/achievement',checkUserSession,createUserAchievement)

// //get route
// AchievementRouter.get('/achievement',checkUserSession, getUserAchievements)

// // //get by id
// // AchievementRouter.get('/achievement/:id', oneAchievement)

// //update contact
// AchievementRouter.patch('/achievement/:id', updateAchievement)

// //delete contact
// AchievementRouter.delete('/achievement/:id',deleteAchievement)


export default AchievementRouter;