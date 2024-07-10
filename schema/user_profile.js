import joi from "joi";

const userSchema = joi.object({
    userProfile:{
        profilePicture: joi.string().required,
        location: joi.string().required,
        maritalStatus: joi.string(),
        sex: joi.string().required,
        bio: joi.string().required,
        contact: joi.string().required,
        resume: joi.string(),
        languages: joi.array().required,
    }
})