import joi from "joi";

const volunteeringSchema = joi.object({
    projects:{
        organization: joi.string(),
        description: joi.string(),
        skills: joi.string(),
        responsibilities: joi.string(),
        role: joi.string().required,
        location: joi.string(),
        startDate: joi.string(),
        endDateDate: joi.string(),
        projectName: joi.string(),
     
    }
})
