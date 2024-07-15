import joi from "joi";

export const skillSchema = joi.object({
   
        name: joi.string().required(),
        levelOfProficiency: joi.string().valid('beginner', 'intermediate', 'advanced', 'expert')
      
  
})