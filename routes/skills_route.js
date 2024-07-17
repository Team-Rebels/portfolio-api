import { Router } from "express";
import { addSkills,getAllUserSkills, deleteUserSkill, updateUserSkill } from "../controllers/skills_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

const skillRouter =  Router();


skillRouter.post('/users/skills',checkUserSession, addSkills)
skillRouter.get('/users/skills/', checkUserSession,getAllUserSkills)
skillRouter.patch('/users/skills/:id', checkUserSession, updateUserSkill)
skillRouter.delete('/users/skills/:id', checkUserSession, deleteUserSkill)

export default skillRouter;