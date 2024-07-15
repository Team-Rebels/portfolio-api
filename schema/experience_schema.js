import joi from "joi";

export const experienceSchema = joi.object({
  
        companyName: joi.string().required(),
        role: joi.string().required(),
        skills: joi.string(),
        responsibilities: joi.string().required(),
        location: joi.string().required(),
        startDate: joi.string().required(),
        endDate: joi.string(),
     

})