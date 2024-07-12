import { Router } from "express";
import { addEducation, getAllUserEducation, getEducation, UpdateEducation } from "../controllers/education_controller.js";


 export const educationRouter = Router();

educationRouter.post('/users/education', addEducation);

educationRouter.get('/users/education/:id', getAllUserEducation)

educationRouter.get('/users/education/:id', getEducation)


educationRouter.patch('/users/education/:id', UpdateEducation)

// educationRouter.delete('/users/education/:id', deleteEducation)

