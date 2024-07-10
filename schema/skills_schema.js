import joi from "joi";

const skillsSchema = joi.object({
    skills:{
        name: joi.string().required,
        levelOfExperience: joi.string().valid('beginner', 'intermediate', 'advanced', 'expert')
      
    },
})