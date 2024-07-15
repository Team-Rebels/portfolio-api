import { Router } from "express";
import { addUserProfile, getProfile, updateOneUserProfile } from "../controllers/userprofile_controller.js";
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";



export const userProfileRouter = Router()
userProfileRouter.get('/users/get/userprofile', checkUserSession, getProfile)
userProfileRouter.post('/users/userprofile', remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]),
    checkUserSession,
    addUserProfile)

userProfileRouter.patch('/users/userprofile/:id', checkUserSession, updateOneUserProfile)



//,resumeUploads.single('resume')