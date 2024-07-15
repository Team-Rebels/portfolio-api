import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { createUserVolunteering, getAllUserVolunteerings, updateUserVolunteering,deleteUserVolunteering } from "../controllers/volunteering_controller.js";

export const volunteeringRouter = Router()

volunteeringRouter.post('/users/volunteering', checkUserSession, createUserVolunteering)

volunteeringRouter.get('/users/get/volunteering', checkUserSession, getAllUserVolunteerings)

volunteeringRouter.patch('/users/volunteering/:id', checkUserSession, updateUserVolunteering)

volunteeringRouter.delete('/users/volunteering/:id', checkUserSession, deleteUserVolunteering)