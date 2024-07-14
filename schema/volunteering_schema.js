
import joi from "joi";

const volunteeringSchema = joi.object({
    
        organization: joi.string().required,
        description:joi.string().required,
        skills: joi.string(),
        responsibility: joi.string().required,
        location: joi.string().required,
        startDate: joi.string().required,
        endDate: joi.string(),
        projectName:joi.string
     
    
})



