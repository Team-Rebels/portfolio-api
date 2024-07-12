import { ExperienceModel } from "../models/experience_model.js";
import { experienceSchema } from "../models/experience_model.js";


//post project
export const addExperience = async (req, res, next) => {
 
    try {
        const {error, value} = experienceSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const experience = await ExperienceModel.create(req.body)
        res.status(201).json(experience)
        
        
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


