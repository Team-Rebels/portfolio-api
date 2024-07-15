import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { createUserVolunteering, getAllUserVolunteerings, updateUserVolunteering,deleteUserVolunteering } from "../controllers/volunteering_controller.js";

export const volunteeringRouter = Router()

volunteeringRouter.post('/volunteering', checkUserSession, createUserVolunteering)

volunteeringRouter.get('/volunteering', checkUserSession, getAllUserVolunteerings)

volunteeringRouter.patch('/volunteering/:id', checkUserSession, updateUserVolunteering)

volunteeringRouter.delete('/volunteering/:id', checkUserSession, deleteUserVolunteering)