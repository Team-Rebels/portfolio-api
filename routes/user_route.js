import { getUsers, login, logout, profile, signup } from "../controllers/user_controller.js";
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";


export const userRouter = Router()


userRouter.post('/auth/signup', signup)
userRouter.post('/auth/login', login)

userRouter.get('/auth/logout', checkUserSession, logout)
userRouter.get('/auth/:userName', checkUserSession, profile)
userRouter.get('/getUsers', getUsers)

