import { SkillsModel } from "../models/skills_models.js";
import { skillsSchema } from "../models/skills_models.js";

//post skills
export const addSkills = async (req, res, next) => {
 
    try {
        const {error, value} = skillsSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const skills = await SkillsModel.create(req.body)
        res.status(201).json(skills)
        
        
    } catch (error) {
        next(error)
        
    }
}


//get all skills controller
export const getSkills =async (req, res, next) => {
    try {const getSkills = await SkillsModel.find()
        res.status(201).json(getSkills)
        
    } catch (error ) {
        next(error)
        
    }

}
    
//get a single  skills
export const oneSkill =async (req, res, next) => {
    try{
        const aSkill = await SkillsModel.findById(req.params.id)
        res.status(201).json(aSkill)
    } catch (error){
        next (error)
    }
}

//update skills
export const updateSkills = async (req, res, next) =>{
    try {
        const {error, value} = skillsSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const skillData = await SkillsModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json(' Your Skills  have been  updated')
     
    } catch (error) {
        next (error)
        
    }
}


//delete Skills
export const deleteSkills =async (req, res, next) =>{
try {

    const skillDeleted =await SkillsModel. findByIdAndDelete (req.params.id)
     res.status(201).json('Skill deleted')
     
} catch (error) {
    next(error)
    
}

}


