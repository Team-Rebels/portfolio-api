import joi from "joi";

export const skillsSchema = joi.object({
    skills:{
        name: joi.string().required,
        levelOfExperience: joi.string().valid('beginner', 'intermediate', 'advanced', 'expert')
      
    },
})