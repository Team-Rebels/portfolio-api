import { Router } from "express";
import { addSkills,getAllUserSkills, deleteUserSkill, updateUserSkill } from "../controllers/skills_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

const skillRouter =  Router();


skillRouter.post('/skills',checkUserSession, addSkills)
skillRouter.get('/skills/', checkUserSession,getAllUserSkills)
skillRouter.patch('/skills/:id', checkUserSession, updateUserSkill)
skillRouter.delete('/skills/:id', checkUserSession, deleteUserSkill)

export default skillRouter;