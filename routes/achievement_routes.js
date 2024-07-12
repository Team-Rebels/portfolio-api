import { Router } from "express";
import { getAchievement, oneAchievement, updateAchievement ,deleteAchievement, addAchievement } from "../controllers/achievement_controller";



//create Router
const Router = Router()

//define routes
//add a contact route
AchievementRouter.post('/achievement', addAchievement)

//get route
AchievementRouter.get('/achievement', getAchievement)

//get by id
AchievementRouter.get('/achievement/:id', oneAchievement)

//update contact
AchievementRouter.patch('/achievement/:_id', updateAchievement)

//delete contact
ContactRouter.delete('/achievement/:id',deleteAchievement)


export default AchievementRouter;