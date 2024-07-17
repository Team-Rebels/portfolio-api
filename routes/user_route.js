import { getUsers, login, logout, profile, signup, token } from "../controllers/user_controller.js";
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";


export const userRouter = Router()


userRouter.post('/users/auth/signup', signup)
userRouter.post('/users/auth/session/login', login)
userRouter.post('/users/auth/token/login', token)
userRouter.get('/users/auth/logout', checkUserSession, logout)
userRouter.get('/users/:userName', profile)
userRouter.get('/users/getUsers', getUsers)

