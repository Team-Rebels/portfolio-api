import joi from "joi";

export const experienceSchema = joi.object({
    experience:{
        company: joi.string().required(),
        roles: joi.string().required(),
        skills: joi.string(),
        responsibility: joi.string().required(),
        location: joi.string().required(),
        startDate: joi.string().required(),
        endDate: joi.string(),
     
    }
})