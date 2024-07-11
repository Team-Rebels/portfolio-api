import joi from "joi";

export const projectSchema = joi.object({
    projects:{
        projectName: joi.string().required,
        description: joi.string().required,
        contributors: joi.string(),
        date: joi.string().required,
        link: joi.string().required,
        image: joi.string(),
        nameOfInstitution: joi.string(),
     
    }
})




