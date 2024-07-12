import { VolunteeringModel } from "../models/volunteering_model.js";
import { volunteeringSchema } from "../models/volunteering_model.js";

//post volunteering 
export const addVolunteer = async (req, res, next) => {
 
    try {
        const {error, value} = volunteeringSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const volunteer = await VolunteeringModel.create(req.body)
        res.status(201).json(volunteer)
        
        
    } catch (error) {
        next(error)
        
    }
}


//get all volunteering controller
export const getVolunteering =async (req, res, next) => {
    try {const allVolunteering= await VolunteeringModel.find()
        res.status(201).json(allVolunteering)
        
    } catch (error ) {
        next(error)
        
    }

}
    
//get a single volunteering
export const oneVolunteering =async (req, res, next) => {
    try{
        const aVolunteering = await VolunteeringModel.findById(req.params.id)
        res.status(201).json(aVolunteering)
    } catch (error){
        next (error)
    }
}

//update volunteering
export const updateVolunteering = async (req, res, next) =>{
    try {
        const {error, value} = volunteeringSchema.validate(req.body)
        if(error) return res.status (400).send(error.details[0].message)
        const volunteeringData = await VolunteeringModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json('user Data updated')
     
    } catch (error) {
        next (error)
        
    }
}


//delete volunteering
export const deleteVolunteering =async (req, res, next) =>{
try {

    const volunteeringDeleted =await VolunteeringModel. findByIdAndDelete (req.params.id)
     res.status(201).json('user deleted')
     
} catch (error) {
    next(error)
    
}

}


