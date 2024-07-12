import { AchievementsModel } from "../models/achievement_model.js";
import { achievementSchema } from "../models/achievement_model.js";

//post achievement
export const addAchievement = async (req, res, next) => {
 
    try {
        const {error, value} = achievementSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const achievement = await AchievementsModel.create(req.body)
        res.status(201).json(achievement)
        
        
    } catch (error) {
        next(error)
        
    }
}


//get all achievements controller
export const getAchievement =async (req, res, next) => {
    try {const allAchievement = await AchievementsModel.find()
        res.status(201).json(allAchievement)
        
    } catch (error ) {
        next(error)
        
    }

}
    
//get a single  achievement
export const oneAchievement =async (req, res, next) => {
    try{
        const aAchievement = await AchievementsModel.findById(req.params.id)
        res.status(201).json(aAchievement)
    } catch (error){
        next (error)
    }
}

//update achievement
export const updateAchievement = async (req, res, next) =>{
    try {
        const {error, value} = achievementSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const achievementData = await ProjectModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json('Project Data updated')
     
    } catch (error) {
        next (error)
        
    }
}


//delete achievement
export const deleteAchievement =async (req, res, next) =>{
try {

    const achievementDeleted =await AchievementsModel. findByIdAndDelete (req.params.id)
     res.status(201).json('achievement deleted')
     
} catch (error) {
    next(error)
    
}

}


