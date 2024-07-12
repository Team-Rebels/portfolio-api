import { ProjectModel } from "../models/project_model.js";
import { projectSchema } from "../schema/projects_schema.js";

//post project
export const addProject = async (req, res, next) => {
 
    try {
        const {error, value} = projectSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const project = await ProjectModel.create(req.body)
        res.status(201).json(project)
        
        
    } catch (error) {
        next(error)
        
    }
}


//get all projects controller
export const getProject =async (req, res, next) => {
    try {const getProject = await ContactModel.find()
        res.status(201).json(getProject)
        
    } catch (error ) {
        next(error)
        
    }

}
    
//get a single project
export const oneProject =async (req, res, next) => {
    try{
        const aProject = await ProjectModel.findById(req.params.id)
        res.status(201).json(aProject)
    } catch (error){
        next (error)
    }
}

//update project
export const updateProject = async (req, res, next) =>{
    try {
        const {error, value} = projectSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const projectData = await ProjectModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json('Project Data updated')
     
    } catch (error) {
        next (error)
        
    }
}


//delete Contact
export const deleteProject =async (req, res, next) =>{
try {

    const projectDeleted =await ContactModel. findByIdAndDelete (req.params.id)
     res.status(201).json('project deleted')
     
} catch (error) {
    next(error)
    
}

}


