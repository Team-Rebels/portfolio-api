import { Router } from "express";
import { addSkills,getAllUserSkills, deleteUserSkill, updateUserSkill } from "../controllers/skills_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

const skillRouter =  Router();


skillRouter.post('/users/skills',checkUserSession, addSkills)
skillRouter.get('/users/get/skills', checkUserSession,getAllUserSkills)
skillRouter.patch('/users/Skills/:id', checkUserSession, updateUserSkill)
skillRouter.delete('/users/Skills/:id', checkUserSession, deleteUserSkill)

export default skillRouter;