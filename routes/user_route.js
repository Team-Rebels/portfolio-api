import { getUsers, login, logout, profile, signup } from "../controllers/user_controller.js";
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";


export const userRouter = Router()

userRouter.post('/users/signup', signup)
userRouter.post('/users/login', login)

userRouter.get('/users/logout', checkUserSession, logout)
userRouter.get('/users/:userName', checkUserSession, profile)
userRouter.get('/users/getUsers', getUsers)

