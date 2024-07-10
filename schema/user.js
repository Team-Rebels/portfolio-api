import joi from "joi";

 export const userSchema = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    otherName:joi.string(),
    email:joi.string().email().required(),
    password:joi.string().min(3).required(),
    confirmedPassword:joi.ref('password'),
    userName: joi.string(),
    termsAndConditions: joi.boolean(),
})