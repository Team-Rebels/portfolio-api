import Joi from "joi";
import { User } from "../models/user_model.js";

export const AchievementSchema = Joi.object({

    award: Joi.string(),
    description: Joi.string(),
    date: Joi.string(),
    image: Joi.string(),
    nameOfInstitution: Joi.string(),
    user: Joi.string(),
})