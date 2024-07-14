import { Experience } from "../models/experience_model.js";
import { experienceSchema } from "../schema/experience_schema.js";
import { User } from "../models/user_model.js";



//post experience       
export const addExperience = async (req, res, next) => {

    console.log('yess Boss')
    try {
        const { error, value } = experienceSchema.validate(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
         //after, find the user with the id that you passed when creating the education
        const userSessionId = req.session.user.id

        const user = await User.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
        //create the suer
        const experience = await Experience.create({ ...value, user: userSessionId })
        //if you find the user, push the education id you just created inside
        user.experiences.push(experience._id);

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ experience })
        
    } catch (error) {
        next(error)
    }
}




//get all experience controller
export const getExperience =async (req, res, next) => {
    try {const getAchievement = await ExperienceModel.find()
        res.status(201).json(getAchievement)
        
    } catch (error ) {
        next(error)
        
    }

}
    
//get a single achievement
export const oneExperience =async (req, res, next) => {
    try{
        const aExperience = await ExperienceModel.findById(req.params.id)
        res.status(201).json(aExperience)
    } catch (error){
        next (error)
    }
}

//update experience
export const updateExperience = async (req, res, next) =>{
    try {
        const {error, value} = experienceSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const experienceData = await ExperienceModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json('Experience Data updated')
     
    } catch (error) {
        next (error)
        
    }
}


//delete experience
export const deleteExperience =async (req, res, next) =>{
try {

    const experienceDeleted =await ExperienceModel. findByIdAndDelete (req.params.id)
     res.status(201).json('experience deleted')
     
} catch (error) {
    next(error)
    
}

}


