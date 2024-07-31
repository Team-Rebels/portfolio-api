import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { addExperience, deleteUserExperience, getAllUserExperience, updateUserExperience} from "../controllers/experience_controller.js";
import { updateUserEducation } from "../controllers/education_controller.js";



 export const experienceRouter = Router();

 experienceRouter.post('/users/experience',checkUserSession, addExperience)
 experienceRouter.get('/users/get/experience',checkUserSession,getAllUserExperience)
 experienceRouter.patch('/users/experience/:id',checkUserSession, updateUserExperience)
 experienceRouter.delete('/users/delete/experience/:id',checkUserSession, deleteUserExperience)
