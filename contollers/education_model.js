import { Education } from "../models/education_model.js";
import { educationSchema } from "../schema/education_schema.js";
import { User } from "../models/user_model.js";




//create an education
export const addEducation = async (req, res, next) => {

    try {
        const { error, value } = educationSchema.validate(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        const education = await Education.create(value)
        //after, find the user with the id that you passed when creating the education 
        const user = await User.findById(value.user);
        if (!user) {
            return res.status(404).send('User not found');
        }
        //if you find the user, push the education id you just created inside
        user.education.push(education._id);

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ education })
        
    } catch (error) {
        next(error)
    }
}


// Get All Education
export const getAllUserEducation = async (req, res, next) => {

    try {
        //we are fetching education that belongs to a particular user
        const userId = req.params.id
        const alleducation = await Education.find({user: userId})
    if(alleducation.length == 0){
        return res.status(404).send('No education added')
    }
    res.status(200).json({education:alleducation})
    } catch (error) {
        
    }

}


//update  Education
export const UpdateEducation = async (req, res, next) => {
    try {
        const userId = req.params.id
        // const educationId = req.params.id
        const updatedData = Education.findByIdAndUpdate({user:userId}, req.body, {new:true})
        // res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
}





// export const updateNote = async (req, res, next) => {
//     try {
//         const noteId = req.params.id;
//         const updatedData = await NoteModel.findByIdAndUpdate({_id:noteId}, req.body,{new:true})
//         console.log(updatedData);
//         res.status(200).json(updatedData)
    
//     }catch (error) {
//         next(error)
//     }
// }










