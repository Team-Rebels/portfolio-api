import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { createUserProject, deleteUserProject, getAllUserProject, updateUserProject } from "../controllers/projects_controller.js";


 export const projectRouter = Router();

projectRouter.post('/users/project',checkUserSession, createUserProject);

 projectRouter.get('/users/get/project', checkUserSession, getAllUserProject)

projectRouter.patch('/users/project/:id',checkUserSession, updateUserProject)

projectRouter.delete('/users/delete/project/:id',checkUserSession, deleteUserProject)

