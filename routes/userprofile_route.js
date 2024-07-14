import { Router } from "express";
import { addUserProfile, getProfile, updateOneUserProfile } from "../controllers/userprofile_controller.js";
import { checkUserSession } from "../middlewares/auth.js";
import { profilePictureUploads } from "../middlewares/uploads.js";



export const userProfileRouter = Router()
userProfileRouter.get('/users/get/userprofile', checkUserSession, getProfile)
userProfileRouter.post('/users/userprofile', checkUserSession, profilePictureUploads.single('profilePicture'), addUserProfile)

userProfileRouter.patch('/users/userprofile/:id', checkUserSession, updateOneUserProfile)



//,resumeUploads.single('resume')