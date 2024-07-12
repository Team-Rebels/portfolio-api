import { Router } from "express";
import { addEducation, getAllUserEducation, UpdateEducation } from "../contollers/education_model.js";


 export const educationRouter = Router();

educationRouter.post('/users/education', addEducation);

educationRouter.get('/users/education/:id', getAllUserEducation)

educationRouter.patch('/users/education/:id', UpdateEducation)

// educationRouter.delete('/users/education/:id', deleteEducation)

