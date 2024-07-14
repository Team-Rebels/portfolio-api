import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { addExperience } from "../controllers/experience_controller.js";



 export const experienceRouter = Router();

 experienceRouter.post('/users/experience',checkUserSession, addExperience)