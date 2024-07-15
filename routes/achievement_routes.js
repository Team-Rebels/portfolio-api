import { Router } from "express";
import { getUserAchievements, updateAchievement ,deleteAchievement, addAchievement } from "../controllers/achievement_controller.js";
import { checkUserSession } from "../middlewares/auth.js";




//create Router
const AchievementRouter = Router()

//define routes
//add a contact route
AchievementRouter.post('/users/achievement',checkUserSession, addAchievement)

//get route
AchievementRouter.get('/users/get/achievement',checkUserSession, getUserAchievements)

// //get by id
// AchievementRouter.get('/achievement/:id', oneAchievement)

//update contact
AchievementRouter.patch('/users/achievement/:id', updateAchievement)

//delete contact
AchievementRouter.delete('/achievement/:id',deleteAchievement)


export default AchievementRouter;