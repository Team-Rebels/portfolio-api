import { Router } from "express";
import { addUserProfile, getProfile } from "../contollers/userprofile_controller.js";

export const userProfileRouter = Router()

userProfileRouter.post('/users/userprofile', addUserProfile)

userProfileRouter.get('/users/profile', getProfile)