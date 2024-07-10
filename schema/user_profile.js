import joi from "joi";

const userSchema = joi.object({
    userProfile:{
        profilePicture: joi.string().required,
        location: joi.string().required,
        maritalStatus: joi.string().valid('single', 'married', 'prefer-not-to-say'),
        sex: joi.string().valid('male', 'female', 'prefer-not-to-say'),
        bio: joi.string().required,
        contact: joi.string().required,
        resume: joi.string(),
        languages: joi.array().items(joi.string()),
        githublink: joi.string().required,
        linkedinLink: joi.string().required,
        instagramLink: joi.string().required,
        twitterLink: joi.string().required,


    }
})