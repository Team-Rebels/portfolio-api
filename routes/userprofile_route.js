import { Router } from "express";
import { getProfile,createUserProfile, updateUserProfile } from "../controllers/userprofile_controller.js";
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUploads } from "../middlewares/uploads.js";



export const userProfileRouter = Router()

userProfileRouter.get('/user/userprofile', checkUserSession, getProfile)




userProfileRouter.post("/user/userProfile", remoteUploads.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]),
    checkUserSession,
    createUserProfile
);



userProfileRouter.patch("/user/userProfile/:id",remoteUploads.fields([
      { name: "profilePicture", maxCount: 1 },
      { name: "resume", maxCount: 1 },
    ]),
    checkUserSession,
    updateUserProfile
  );


//,resumeUploads.single('resume')