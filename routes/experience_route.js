import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { addExperience, deleteUserExperience, getAllUserExperience, updateUserExperience} from "../controllers/experience_controller.js";
import { updateUserEducation } from "../controllers/education_controller.js";



 export const experienceRouter = Router();

 experienceRouter.post('/experience',checkUserSession, addExperience)
 experienceRouter.get('/experience',checkUserSession,getAllUserExperience)
 experienceRouter.patch('/experience/:id',checkUserSession, updateUserExperience)
 experienceRouter.delete('/experience/:id',checkUserSession, deleteUserExperience)