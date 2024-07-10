import Joi, { required } from "joi";

const userSchema = Joi.object({
    user:{
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    otherName:Joi.string(),
    email:Joi.string().email().required(),
    password:Joi.string().min().required(),
    confirmedPassword:Joi.ref('password'),
    userName: Joi.string(),
    termsAndConditions: Joi.boolean(),




}
})