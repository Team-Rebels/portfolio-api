import Joi, { required } from "joi";

export const achievementSchema = Joi.object({
    achievement:{
    award:Joi.string(),
    description:Joi.string(),
    date:Joi.string(),
    image:Joi.string(),
    nameOfInstitution:Joi.string(),

  
  

}
})