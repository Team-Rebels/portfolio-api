import { getUsers, login, logout, profile, signup, token } from "../controllers/user_controller.js";
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";


export const userRouter = Router()


userRouter.post('/auth/signup', signup)
userRouter.post('/auth/session/login', login)
userRouter.post('/auth/token/login', token)
userRouter.get('/auth/logout', checkUserSession, logout)
userRouter.get('/:userName', profile)
userRouter.get('/getUsers', getUsers)

