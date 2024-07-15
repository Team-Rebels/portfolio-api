
import joi from "joi";

 export const volunteeringSchema = joi.object({

        organization: joi.string().required(),
        description:joi.string().required(),
        skills: joi.string(),
        role: joi.string().required(),
        responsibilities: joi.string().required(),
        location: joi.string().required(),
        startDate: joi.string().required(),
        endDate: joi.string(),
        projectName:joi.string()
     
    
})



