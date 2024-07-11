import Joi, { required } from "joi";

export const educationSchema = Joi.object({
    education:{
    schoolName:Joi.string().required(),
    program:Joi.string(),
    qualification:Joi.string(),
    grade:Joi.string(),
    location:Joi.string(),
    startDate:Joi.ref(),
    endDate: Joi.string(),
  




}
})