import joi from "joi";


export const profileSchema = joi.object({
        profilePicture: joi.string(),
        location: joi.string().required(),
        sex: joi.string().valid('male', 'female', 'prefer-not-to-say'),
        bio: joi.string().required(),
        contact: joi.string().required(),
        resume: joi.string(),
        languages: joi.array().items(joi.string()),
        githublink: joi.string(),
        linkedinLink: joi.string(),
        twitterLink: joi.string(),
        user: joi.string().required()
        
    }
)


    
