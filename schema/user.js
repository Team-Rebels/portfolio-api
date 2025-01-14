import joi from "joi";

 export const userSchema = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    otherName:joi.string(),
    email:joi.string().email().required(),
    password:joi.string().min(5).required(),
    confirmPassword:joi.ref('password'),
    userName: joi.string(),
    termsAndConditions: joi.boolean(),
})
.with ('password','confirmPassword')