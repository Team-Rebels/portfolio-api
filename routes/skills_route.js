import { Router } from "express";
import { addSkills,getAllUserSkills, updateOneSkills } from "../controllers/skills_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

const skillRouter =  Router();


skillRouter.post('/users/skills',checkUserSession, addSkills)
skillRouter.get('/users/get/skills', checkUserSession, getAllUserSkills)
skillRouter.patch('/users/Skills/:id', checkUserSession, updateOneSkills)

export default skillRouter;