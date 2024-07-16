import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { achievementUploads } from "../middlewares/uploads.js";
import { createUserAchievement, getUserAchievements, updateUserAchievement, deleteAchievement} from "../controllers/achievement_controller.js";



//create Router
const AchievementRouter = Router()

//define routes
//add a contact route
AchievementRouter.post('/achievement',achievementUploads.single('image'),checkUserSession,createUserAchievement)

// //get route
 AchievementRouter.get('/user/achievement',checkUserSession, getUserAchievements)


// //update contact
 AchievementRouter.patch('/achievement/:id',achievementUploads.single('image'), updateUserAchievement)

// //delete contact
 AchievementRouter.delete('/achievement/:id',deleteAchievement)


export default AchievementRouter;