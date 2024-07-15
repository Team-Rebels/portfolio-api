import { Router } from "express";
import { addEducation, deleteUserEducation, getAllUserEducation, updateUserEducation } from "../controllers/education_controller.js";
import { checkUserSession } from "../middlewares/auth.js";



 export const educationRouter = Router();

educationRouter.post('/education',checkUserSession, addEducation);

educationRouter.get('/get/education', checkUserSession, getAllUserEducation)

educationRouter.patch('/education/:id',checkUserSession, updateUserEducation)

educationRouter.delete('/education/:id',checkUserSession, deleteUserEducation)

