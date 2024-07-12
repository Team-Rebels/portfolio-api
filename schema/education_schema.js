import Joi from "joi";
import { User } from "../models/user_model.js";

export const educationSchema = Joi.object({

    schoolName: Joi.string().required(),
    program: Joi.string(),
    qualification: Joi.string(),
    grade: Joi.string(),
    location: Joi.string(),
    startDate: Joi.string().required(),
    endDate: Joi.string(),
    user: Joi.string(),

})



